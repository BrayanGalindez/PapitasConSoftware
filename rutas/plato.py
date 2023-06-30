from fastapi import APIRouter, Response
from schemas.platoSchema import platoEntity, platosEntity
from config.db import coleccionPlato
from models.platoModel import Plato
from starlette.status import HTTP_204_NO_CONTENT, HTTP_201_CREATED, HTTP_500_INTERNAL_SERVER_ERROR

router = APIRouter(
    prefix='/platos',
    tags=['Platos']
)

#todos los platos del sistema
@router.get('/')
async def findAllPlatosSYSTEM():
    platos = platosEntity(coleccionPlato.find())
    return f'status: ok, datos: {platos}'

#todos los platos de un restaurante
@router.get('/{restaurante}')
async def findAllPlatosRESTAURANT(restaurante: str):
    platos = platosEntity(coleccionPlato.find({"restaurante": restaurante}))
    return f'status: ok, datos: {platos}'


@router.get('/{restaurante}/{nombre}')
async def findOnePlato(restaurante: str, nombre: str):
    return platoEntity(coleccionPlato.find_one({"$and":[{"restaurante": restaurante}, {"nombre": nombre}]}))


@router.post('/')
async def insertOnePlato(plato: Plato):
    platoNuevo = dict(plato)
    id = coleccionPlato.insert_one(platoNuevo).inserted_id

    plato = coleccionPlato.find_one({"_id": id})
    return platoEntity(plato)


@router.put('/')
async def updatePlato(restaurante: str, nombre: str, plato: Plato):
    try:
        platoNuevo = dict(plato)
        coleccionPlato.find_one_and_update({"$and":[{"restaurante": restaurante}, {"nombre": nombre}]}, {"$set": dict(platoNuevo)})
        return Response(status_code=HTTP_201_CREATED)
    except:
        return f'Plato no encontrado, error: {Response(status_code=HTTP_500_INTERNAL_SERVER_ERROR)}'


@router.delete('/{restaurante}/{nombre}')
def deleteRestaurante(restaurante: str, nombre: str):
    try:
        platoEntity(coleccionPlato.find_one_and_delete({"$and":[{"restaurante": restaurante}, {"nombre": nombre}]}))
        return f'Restaurante eliminado satisfactoriamente', Response(status_code=HTTP_204_NO_CONTENT)

    except:
        return f'Restaurante no encontrado, error: {Response(status_code=HTTP_500_INTERNAL_SERVER_ERROR)}'
