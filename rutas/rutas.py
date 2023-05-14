from fastapi import APIRouter, Response
from schemas.userSchema import userEntity, usersEntity
from schemas.propietarioSchema import propietarioEntity, propietariosEntity
from schemas.platoSchema import platoEntity, platosEntity
from config.db import coleccionUser, coleccionProp, coleccionPlato
from models.userModel import User
from models.propietarioModel import Propietario
from models.platoModel import Plato
from bcrypt import checkpw, hashpw, gensalt
from starlette.status import HTTP_204_NO_CONTENT, HTTP_201_CREATED, HTTP_500_INTERNAL_SERVER_ERROR


router = APIRouter()
salt = gensalt()


@router.get('/')
def bienvenida():
    return 'Bienvenido'

#rutas usuarios
@router.get('/users')
async def findAllUsers():
    usuarios = usersEntity(coleccionUser.find())
    return f'status: ok, datos: {usuarios}'


def imprimirUsuario(user: dict):
    return (f"Nombre: {user['nombre']}\nApellido: {user['apellido']}\nDireccion: {user['direccion']}\nCorreo: {user['correo']}\nComentarios: {user['comentarios']}\nRestaurantes añadidos: {user['resAnadidos']}\n Teléfono: {user['telefono']}")

@router.get('/users/{id}')
async  def findOneUser(id:int):
    usuario = userEntity(coleccionUser.find_one({"id": id}))
    return imprimirUsuario(usuario)
    

@router.post('/users')
async def insertOneUser(user:User):
    usuarioNuevo = dict(user)
    usuarioNuevo['passw'] = str(hashpw(bytes(usuarioNuevo['passw']),salt))

    id = coleccionUser.insert_one(usuarioNuevo).inserted_id

    user = coleccionUser.find_one({"_id": id})
    return userEntity(user)

@router.put('/users/{id}')
async def updateUser(id: int, user: User):
    try:
        usuarioNuevo = dict(user)
        usuarioNuevo['id'] = id
        usuarioNuevo['passw'] = str(hashpw(bytes(usuarioNuevo['passw']),salt))
        coleccionUser.find_one_and_update({"id": id}, {"$set": dict(usuarioNuevo)})
        return Response(status_code=HTTP_201_CREATED)
    except: 
        return f'Usuario no encontrado, error: {Response(status_code=HTTP_500_INTERNAL_SERVER_ERROR)}'

@router.delete('/users/{id}')
def deleteUser(id: int):
    try:
        userEntity(coleccionUser.find_one_and_delete({"id": id}))
        return f'Usuario eliminado satisfactoriamente: ', Response(status_code=HTTP_204_NO_CONTENT)
        
    except:
        return f'Usuario no encontrado, error: {Response(status_code=HTTP_500_INTERNAL_SERVER_ERROR)}'

#rutas propietarios
@router.get('/propietarios')
async def findAllPropietarios():
    propietarios = propietariosEntity(coleccionProp.find())
    return f'status: ok, datos: {propietarios}'


@router.get('/propietarios/{id}')
async  def findOnePropietario(id:int):
    return propietarioEntity(coleccionProp.find_one({"id": id}))
    

@router.post('/propietarios')
async def insertOnePropietario(prop:Propietario):
    propNuevo = dict(prop)
    id = coleccionProp.insert_one(propNuevo).inserted_id

    prop = coleccionProp.find_one({"_id": id})
    return propietarioEntity(prop)

@router.put('/propietarios/{id}')
async def updatePropietario(id: int, prop: Propietario):
    try:
        propNuevo = dict(prop)
        propNuevo['id'] = id
        coleccionProp.find_one_and_update({"id": id}, {"$set": dict(propNuevo)})
        return Response(status_code=HTTP_201_CREATED)
    except: 
        return f'Propietario no encontrado, error: {Response(status_code=HTTP_500_INTERNAL_SERVER_ERROR)}'

@router.delete('/propietarios/{id}')
def deletePropietario(id: int):
    try:
        propietarioEntity(coleccionProp.find_one_and_delete({"id": id}))
        return f'Propietario eliminado satisfactoriamente: ', Response(status_code=HTTP_204_NO_CONTENT)
        
    except:
        return f'Propietario no encontrado, error: {Response(status_code=HTTP_500_INTERNAL_SERVER_ERROR)}'



#rutas platos
@router.get('/platos')
async def findAllPlatos():
    propietarios = propietariosEntity(coleccionProp.find())
    return f'status: ok, datos: {propietarios}'


@router.get('/platos/{id}')
async  def findOnePlato(id:int):
    return propietarioEntity(coleccionProp.find_one({"id": id}))
    

@router.post('/platos')
async def insertOnePropietario(prop:Propietario):
    propNuevo = dict(prop)
    id = coleccionProp.insert_one(propNuevo).inserted_id

    prop = coleccionProp.find_one({"_id": id})
    return propietarioEntity(prop)

@router.put('/platos/{id}')
async def updatePropietario(id: int, prop: Propietario):
    try:
        propNuevo = dict(prop)
        propNuevo['id'] = id
        coleccionProp.find_one_and_update({"id": id}, {"$set": dict(propNuevo)})
        return Response(status_code=HTTP_201_CREATED)
    except: 
        return f'Propietario no encontrado, error: {Response(status_code=HTTP_500_INTERNAL_SERVER_ERROR)}'

@router.delete('/platos/{id}')
def deletePropietario(id: int):
    try:
        propietarioEntity(coleccionProp.find_one_and_delete({"id": id}))
        return f'Propietario eliminado satisfactoriamente: ', Response(status_code=HTTP_204_NO_CONTENT)
        
    except:
        return f'Propietario no encontrado, error: {Response(status_code=HTTP_500_INTERNAL_SERVER_ERROR)}'
    
    
#MIS RUTAS
@router.post('/crearPlato')
def crearPlato(plato: Plato):
    platoNuevo = dict(plato)
    id = coleccionPlato.insert_one(platoNuevo).inserted_id

    plato = coleccionPlato.find_one({"id": id})
    return platoEntity(plato)