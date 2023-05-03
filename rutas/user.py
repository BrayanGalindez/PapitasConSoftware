from fastapi import APIRouter, Response
from schemas.userSchema import userEntity, usersEntity
from config.db import coleccionUser
from models.user import User
from bcrypt import checkpw, hashpw, gensalt
from bson import ObjectId
from starlette.status import HTTP_204_NO_CONTENT, HTTP_201_CREATED, HTTP_500_INTERNAL_SERVER_ERROR


user_router = APIRouter()
salt = gensalt()


@user_router.get('/')
def bienvenida():
    return 'Bienvenido'


@user_router.get('/users')
async def findAllUsers():
    usuarios = usersEntity(coleccionUser.find())
    return f'status: ok, datos: {usuarios}'

@user_router.get('/users/{id}')
async def findOneUser(id:str):
    return userEntity(coleccionUser.find_one({"_id": ObjectId(id)}))

@user_router.post('/users')
async def insertOneUser(user:User):
    usuarioNuevo = dict(user)
    usuarioNuevo['passw'] = str(hashpw(bytes(usuarioNuevo['passw']),salt))

    id = coleccionUser.insert_one(usuarioNuevo).inserted_id

    user = coleccionUser.find_one({"_id": id})
    return userEntity(user)

@user_router.put('/users/{id}')
async def updateUser(id: int, user: User):
    try:
        usuarioNuevo = dict(user)
        usuarioNuevo['id'] = id
        usuarioNuevo['passw'] = str(hashpw(bytes(usuarioNuevo['passw']),salt))
        coleccionUser.find_one_and_update({"id": id}, {"$set": dict(usuarioNuevo)})
        return Response(status_code=HTTP_201_CREATED)
    except: 
        return 'hola'

@user_router.delete('/users/{id}')
def deleteUser(id: int):
    try:
        userEntity(coleccionUser.find_one_and_delete({"id": id}))
        return f'Usuario eliminado satisfactoriamente: ', Response(status_code=HTTP_204_NO_CONTENT)
        
    except:
        return f'Usuario no encontrado, error: {Response(status_code=HTTP_500_INTERNAL_SERVER_ERROR)}'