from fastapi import APIRouter, Response
from schemas.restauranteSchema import restauranteEntity, restaurantesEntity
from config.db import coleccionRestaurante
from models.restauranteModel import Restaurante
from starlette.status import HTTP_204_NO_CONTENT, HTTP_201_CREATED, HTTP_500_INTERNAL_SERVER_ERROR

router = APIRouter(
    prefix='/restaurantes',
    tags=['Restaurantes']
)


@router.get('/')
async def findAllRestaurantes():
    restaurantes = restaurantesEntity(coleccionRestaurante.find())
    return f'status: ok, datos: {restaurantes}'


@router.get('/{id}')
async def findOneRestaurante(id: str):
    return restauranteEntity(coleccionRestaurante.find_one({"id": id}))


@router.post('/')
async def insertOneRestaurante(restaurante: Restaurante):
    restauranteNuevo = dict(restaurante)
    id = coleccionRestaurante.insert_one(restauranteNuevo).inserted_id

    restaurante = coleccionRestaurante.find_one({"_id": id})
    return restauranteEntity(restaurante)


@router.put('/{id}')
async def updateRestaurante(id: str, restaurante: Restaurante):
    try:
        restauranteNuevo = dict(restaurante)
        restauranteNuevo['id'] = id
        coleccionRestaurante.find_one_and_update({"id": id}, {"$set": dict(restauranteNuevo)})
        return Response(status_code=HTTP_201_CREATED)
    except:
        return f'Restaurante no encontrado, error: {Response(status_code=HTTP_500_INTERNAL_SERVER_ERROR)}'


@router.delete('/{id}')
def deleteRestaurante(id: str):
    try:
        restauranteEntity(coleccionRestaurante.find_one_and_delete({"id": id}))
        return f'Restaurante eliminado satisfactoriamente', Response(status_code=HTTP_204_NO_CONTENT)

    except:
        return f'Restaurante no encontrado, error: {Response(status_code=HTTP_500_INTERNAL_SERVER_ERROR)}'
