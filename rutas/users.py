from fastapi import APIRouter, Response
from schemas.userSchema import userEntity, usersEntity
from config.db import coleccionUser
from pydantic import SecretStr
from models.userModel import User
from models.loginModel import loginModel
from bcrypt import  hashpw, gensalt, checkpw
from passlib.context import CryptContext
import auth.jwt_handler as jwth
from fastapi import HTTPException
from starlette.status import HTTP_204_NO_CONTENT, HTTP_201_CREATED, HTTP_500_INTERNAL_SERVER_ERROR


router = APIRouter(
    prefix='/users',
    tags=['Usuarios']
)
salt = gensalt()
pwd_context = CryptContext(schemes=['bcrypt'], deprecated='auto')




#rutas usuarios
@router.get('/')
async def findAllUsers():
    usuarios = usersEntity(coleccionUser.find())
    return usuarios



def imprimirUsuario(user: dict):
    return (f"Nombre: {user['nombre']}\nDireccion: {user['direccion']}\nCorreo: {user['correo']}\nComentarios: {user['comentarios']}\nRestaurantes añadidos: {user['resAnadidos']}\n Teléfono: {user['telefono']}")

@router.get('/{id}')
async  def findOneUser(id:int):
    try:
        usuario = userEntity(coleccionUser.find_one({"id": id}))
        return usuario
    except Exception as e:
        print(e)
        return {"error": "usuario no encontrado"}

@router.post('/')
async def insertOneUser(user:User):
    password = user.passw.get_secret_value()
    print(password)
    try:
        usuarioNuevo = dict(user)
        usuarioNuevo['passw'] = password
        ids = coleccionUser.distinct("id")
        if usuarioNuevo['id'] not in ids:
            usuarioNuevo['passw'] = pwd_context.hash(usuarioNuevo['passw'])
            id = coleccionUser.insert_one(usuarioNuevo).inserted_id
            user = coleccionUser.find_one({"_id": id})
            return userEntity(user)
        else:
            return {"mensaje": "Parece que este ID ya tiene una cuenta asociada."}
    except Exception as e:
        print(e)
        return {"error": "Formato invalido"}

@router.put('/{id}')
async def updateUser(id: int, user: User):
    password = user.passw.get_secret_value()
    try:
        usuarioNuevo = dict(user)
        usuarioNuevo['id'] = id
        usuarioNuevo['passw'] = password
        usuarioNuevo['passw'] = pwd_context.hash(usuarioNuevo['passw'])
        coleccionUser.find_one_and_update({"id": id}, {"$set": dict(usuarioNuevo)})
        return Response(status_code=HTTP_201_CREATED)
    except Exception as e:
        print(e) 
        return f'Usuario no encontrado, error: {Response(status_code=HTTP_500_INTERNAL_SERVER_ERROR)}'

@router.delete('/{id}')
def deleteUser(id: int):
    try:
        userEntity(coleccionUser.find_one_and_delete({"id": id}))
        return f'Usuario eliminado satisfactoriamente: ', Response(status_code=HTTP_204_NO_CONTENT)
        
    except:
        return f'Usuario no encontrado, error: {Response(status_code=HTTP_500_INTERNAL_SERVER_ERROR)}'

@router.post('/login')
async def login(user: loginModel):
    try:
        userNuevo = dict(user)
        usuario = userEntity(coleccionUser.find_one({"correo": userNuevo['correo']}))
        password = userNuevo['passw']
        hashed = usuario['passw']
        if pwd_context.verify(password, hashed):
            token = jwth.signJWT(usuario['id'])
            return {
                'token': token,
                'id': usuario['id']
            }
        else:
            raise HTTPException(status_code=401, detail="Correo o contraseña incorrectos")
    except Exception as e:
        print(e)
        raise HTTPException(status_code=401, detail="Correo o contraseña incorrectos")
    
@router.put('/añadirFavoritos/{id}/{favorito}')
async def insertUserFavorito(favorito: str, id: int):
    try:
        ids = coleccionUser.distinct("id")
        user = coleccionUser.find_one({"id":id})
        favoritos = user.get("favoritos",[])
        if id not in ids:
            raise HTTPException(status_code=404, detail="Usuario no encontrado")
        elif favorito in favoritos:
            raise HTTPException(status_code=400, detail="Restaurante ya en favoritos")
        else:            
            coleccionUser.find_one_and_update({"id": id}, {"$push": {"favoritos": favorito}})
            return {"message": "Restaurante añadido a favoritos correctamente."}
    except Exception as e:
        print(e)

@router.get('/{id}/favoritos')
async def getFavoritos(id: int):
    try:
        ids = coleccionUser.distinct("id")#llama a todos los ids de la coleccion y lo almacena en una lista
        if id not in ids:
            raise HTTPException(status_code=404, detail="Usuario no encontrado")
        else:
            user = coleccionUser.find_one({"id":id})
            favoritos = list(user.get("favoritos",[]))
            return favoritos
    except Exception as e:
        print(e)