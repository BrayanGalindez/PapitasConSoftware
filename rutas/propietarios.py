from fastapi import APIRouter, Response
from schemas.propietarioSchema import propietarioEntity, propietariosEntity
from config.db import coleccionProp
from models.propietarioModel import Propietario
from starlette.status import HTTP_204_NO_CONTENT, HTTP_201_CREATED, HTTP_500_INTERNAL_SERVER_ERROR

router = APIRouter(
    prefix='/propietarios',
    tags=['Propietarios']
)


@router.get('/')
async def findAllPropietarios():
    propietarios = propietariosEntity(coleccionProp.find())
    return f'status: ok, datos: {propietarios}'


@router.get('/{id}')
async  def findOnePropietario(id:int):
    return propietarioEntity(coleccionProp.find_one({"id": id}))
    

@router.post('/')
async def insertOnePropietario(prop:Propietario):
    propNuevo = dict(prop)
    id = coleccionProp.insert_one(propNuevo).inserted_id

    prop = coleccionProp.find_one({"_id": id})
    return propietarioEntity(prop)

@router.put('/{id}')
async def updatePropietario(id: int, prop: Propietario):
    try:
        propNuevo = dict(prop)
        propNuevo['id'] = id
        coleccionProp.find_one_and_update({"id": id}, {"$set": dict(propNuevo)})
        return Response(status_code=HTTP_201_CREATED)
    except: 
        return f'Propietario no encontrado, error: {Response(status_code=HTTP_500_INTERNAL_SERVER_ERROR)}'

@router.delete('/{id}')
def deletePropietario(id: int):
    try:
        propietarioEntity(coleccionProp.find_one_and_delete({"id": id}))
        return f'Propietario eliminado satisfactoriamente: ', Response(status_code=HTTP_204_NO_CONTENT)
        
    except:
        return f'Propietario no encontrado, error: {Response(status_code=HTTP_500_INTERNAL_SERVER_ERROR)}'



