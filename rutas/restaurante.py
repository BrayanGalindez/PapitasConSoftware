from fastapi import APIRouter, Response, UploadFile, File, Form
from schemas.restauranteSchema import restauranteEntity, restaurantesEntity
from config.db import coleccionRestaurante
from models.restauranteModel import Restaurante
from starlette.status import HTTP_204_NO_CONTENT, HTTP_201_CREATED, HTTP_500_INTERNAL_SERVER_ERROR
import boto3
from decouple import config
from uuid import uuid4

router = APIRouter(
    prefix='/restaurantes',
    tags=['Restaurantes']
)

# AWS S3 configuration

s3 = boto3.client(
    's3',
    aws_access_key_id=config('AWS_ACCESS_PUBLIC_KEY'),
    aws_secret_access_key=config('AWS_ACCESS_SECRET_KEY'),
    region_name=config('AWS_BUCKET_REGION')
)

bucket_name = config('AWS_BUCKET_NAME')

#subida de imagen a S3 y creacion de nuevo restaurante

@router.post('/upload')
async def uploadFile(file: UploadFile = File(...)):
    # Upload image to S3
    unique_filename = str(uuid4())+'_'+file.filename
    s3.upload_fileobj(file.file, bucket_name, unique_filename)
    
    # create de url to the image
    url = s3.generate_presigned_url(
        ClientMethod='get_object',
        Params={
            'Bucket': bucket_name,
            'Key': unique_filename
        }
    )
    return {'url': url}
#creacion de nuevo restaurante
@router.post('/')
async def insertOneRestaurante(restaurante: Restaurante): 
    restauranteNuevo = dict(restaurante)
    id = coleccionRestaurante.insert_one(restauranteNuevo).inserted_id
    restaurante = coleccionRestaurante.find_one({"_id": id})
    return restauranteEntity(restaurante)


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
