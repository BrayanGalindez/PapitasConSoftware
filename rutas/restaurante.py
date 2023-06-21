from fastapi import APIRouter, Response
from schemas.restauranteSchema import restauranteEntity, restaurantesEntity
from config.db import coleccionRestaurante
from models.restauranteModel import Restaurante
from starlette.status import HTTP_204_NO_CONTENT, HTTP_201_CREATED, HTTP_500_INTERNAL_SERVER_ERROR

router = APIRouter(
    prefix='/restaurantes',
    tags=['Restaurantes']
)


@router.get('/all')
async def findAllRestaurantes():
    restaurantes = restaurantesEntity(coleccionRestaurante.find())
    return {'restaurantes': restaurantes}



@router.get('/{nit}')
async def findOneRestaurante(nit: int):
    return restauranteEntity(coleccionRestaurante.find_one({"nit": nit}))


#busqueda de restaurantes segun tags
@router.get('/')
async def buscar_restaurantes(palabra_clave: str):
    try:
        query = { '$text': { '$search': palabra_clave } }
        resultados = restaurantesEntity(coleccionRestaurante.find(query))
        return resultados
    except Exception as e:
        return(e)


@router.post('/')
async def insertOneRestaurante(restaurante: Restaurante):
    restauranteNuevo = dict(restaurante)
    id = coleccionRestaurante.insert_one(restauranteNuevo).inserted_id

    restaurante = coleccionRestaurante.find_one({"_id": id})
    return restauranteEntity(restaurante)


@router.put('/{nit}')
async def updateRestaurante(nit: int, restaurante: Restaurante):
    try:
        restauranteNuevo = dict(restaurante)
        restauranteNuevo['nit'] = nit
        coleccionRestaurante.find_one_and_update({"nit": nit}, {"$set": dict(restauranteNuevo)})
        return Response(status_code=HTTP_201_CREATED)
    except:
        return f'Restaurante no encontrado, error: {Response(status_code=HTTP_500_INTERNAL_SERVER_ERROR)}'


@router.delete('/{nit}')
def deleteRestaurante(nit: int):
    try:
        restauranteEntity(coleccionRestaurante.find_one_and_delete({"nit": nit}))
        return f'Restaurante eliminado satisfactoriamente', Response(status_code=HTTP_204_NO_CONTENT)

    except:
        return f'Restaurante no encontrado, error: {Response(status_code=HTTP_500_INTERNAL_SERVER_ERROR)}'
