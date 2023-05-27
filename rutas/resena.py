from fastapi import APIRouter, Response
from schemas.resenaSchema import resenaEntity, resenasEntity
from config.db import coleccionResena
from models.resenaModel import Resena
from starlette.status import HTTP_204_NO_CONTENT, HTTP_201_CREATED, HTTP_500_INTERNAL_SERVER_ERROR

router = APIRouter(
    prefix='/resenas',
    tags=['Reseñas']
)


@router.get('/')
async def findAllResenas():
    resenas = resenasEntity(coleccionResena.find())
    return f'status: ok, datos: {resenas}'


@router.get('/{id}')
async def findOneResena(id: str):
    return resenaEntity(coleccionResena.find_one({"id": id}))


@router.post('/')
async def insertOneResena(resena: Resena):
    resenaNueva = dict(resena)
    id = coleccionResena.insert_one(resenaNueva).inserted_id

    resena = coleccionResena.find_one({"_id": id})
    return resenaEntity(resena)


@router.put('/{id}')
async def updateResena(id: str, resena: Resena):
    try:
        resenaNueva = dict(resena)
        resenaNueva['id'] = id
        coleccionResena.find_one_and_update({"id": id}, {"$set": dict(resenaNueva)})
        return Response(status_code=HTTP_201_CREATED)
    except:
        return f'Reseña no encontrada, error: {Response(status_code=HTTP_500_INTERNAL_SERVER_ERROR)}'


@router.delete('/{id}')
def deleteResena(id: str):
    try:
        resenaEntity(coleccionResena.find_one_and_delete({"id": id}))
        return f'Reseña eliminada satisfactoriamente', Response(status_code=HTTP_204_NO_CONTENT)

    except:
        return f'Reseña no encontrada, error: {Response(status_code=HTTP_500_INTERNAL_SERVER_ERROR)}'
