from fastapi import APIRouter, Response
from schemas.userSchema import userEntity, usersEntity
from config.db import coleccionUser
from models.userModel import User
from bcrypt import  hashpw, gensalt
from starlette.status import HTTP_204_NO_CONTENT, HTTP_201_CREATED, HTTP_500_INTERNAL_SERVER_ERROR


router = APIRouter(
    prefix='/users',
    tags=['Usuarios']
)
salt = gensalt()




#rutas usuarios
@router.get('/')
async def findAllUsers():
    usuarios = usersEntity(coleccionUser.find())
    return f'status: ok, datos: {usuarios}'


def imprimirUsuario(user: dict):
    return (f"Nombre: {user['nombre']}\nApellido: {user['apellido']}\nDireccion: {user['direccion']}\nCorreo: {user['correo']}\nComentarios: {user['comentarios']}\nRestaurantes añadidos: {user['resAnadidos']}\n Teléfono: {user['telefono']}")

@router.get('/{id}')
async  def findOneUser(id:int):
    usuario = userEntity(coleccionUser.find_one({"id": id}))
    return imprimirUsuario(usuario)
    

@router.post('/')
async def insertOneUser(user:User):
    usuarioNuevo = dict(user)
    usuarioNuevo['passw'] = str(hashpw(bytes(usuarioNuevo['passw']),salt))

    id = coleccionUser.insert_one(usuarioNuevo).inserted_id

    user = coleccionUser.find_one({"_id": id})
    return userEntity(user)

@router.put('/{id}')
async def updateUser(id: int, user: User):
    try:
        usuarioNuevo = dict(user)
        usuarioNuevo['id'] = id
        usuarioNuevo['passw'] = str(hashpw(bytes(usuarioNuevo['passw']),salt))
        coleccionUser.find_one_and_update({"id": id}, {"$set": dict(usuarioNuevo)})
        return Response(status_code=HTTP_201_CREATED)
    except: 
        return f'Usuario no encontrado, error: {Response(status_code=HTTP_500_INTERNAL_SERVER_ERROR)}'

@router.delete('/{id}')
def deleteUser(id: int):
    try:
        userEntity(coleccionUser.find_one_and_delete({"id": id}))
        return f'Usuario eliminado satisfactoriamente: ', Response(status_code=HTTP_204_NO_CONTENT)
        
    except:
        return f'Usuario no encontrado, error: {Response(status_code=HTTP_500_INTERNAL_SERVER_ERROR)}'

