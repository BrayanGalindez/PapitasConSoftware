from fastapi import APIRouter, Response
from schemas.resenaSchema import resenaEntity, resenasEntity
from config.db import coleccionResena
from models.resenaModel import Resena
from starlette.status import HTTP_204_NO_CONTENT, HTTP_201_CREATED, HTTP_500_INTERNAL_SERVER_ERROR

router = APIRouter(
    prefix='/resenas',
    tags=['Reseñas']
)

#todas las reseñas del sistema
@router.get('/')
async def findAllResenasSYSTEM():
    return resenasEntity(coleccionResena.find())


#todas las reseñas de un restaurante
@router.get('/{restaurante}')
async def findAllResenasRESTAURANT(restaurante: str):
    return resenasEntity(coleccionResena.find({"restaurante": restaurante}))
    


#todas las reseñas de un usuario, , no funciona, debe revisarse
@router.get('/{id}')
async def findAllResenasUSER(id: int):
    return resenasEntity(coleccionResena.find({"id": id}))


#reseñas de un usuario sobre un restaurante, , no funciona, debe revisarse
@router.get('/{restaurantes}')
async def findAllResenasUserRestaurant(restaurante: str, id: int):
    return resenasEntity(coleccionResena.find({"$and":[{"restaurante": restaurante}, {"id": id}]}))


#reseñas de un plato de un restaurante
@router.get('/{restaurante}/{plato}')
async def findAllResenasRestaurantPlato(restaurante: str, plato: str):
    return resenasEntity(coleccionResena.find({"$and":[{"restaurante": restaurante}, {"plato": plato}]}))


#reseña en especifico, no funciona, debe revisarse
@router.get('/{titulo}/{id}')
async def findOneResena(id: int, titulo: str):
    return resenaEntity(coleccionResena.find_one({"$and":[{"titulo": titulo}, {"id": id}]}))


@router.post('/')
async def insertOneResenaRestaurante(resena: Resena):
    resenaNueva = dict(resena)
    id = coleccionResena.insert_one(resenaNueva).inserted_id

    resena = coleccionResena.find_one({"_id": id})
    return resenaEntity(resena)



@router.put('/')
async def updateResena(titulo: str,id: int, resena: Resena):
    try:
        resenaNueva = dict(resena)
        resenaNueva['id'] = id
        coleccionResena.find_one_and_update({"$and":[{"titulo": titulo}, {"id": id}]}, {"$set": dict(resenaNueva)})
        return Response(status_code=HTTP_201_CREATED)
    except:
        return f'Reseña no encontrada, error: {Response(status_code=HTTP_500_INTERNAL_SERVER_ERROR)}'


@router.delete('/')
def deleteResena(titulo: str,id: int):
    try:
        resenaEntity(coleccionResena.find_one_and_delete({"$and":[{"titulo": titulo}, {"id": id}]}))
        return f'Reseña eliminada satisfactoriamente', Response(status_code=HTTP_204_NO_CONTENT)

    except:
        return f'Reseña no encontrada, error: {Response(status_code=HTTP_500_INTERNAL_SERVER_ERROR)}'
