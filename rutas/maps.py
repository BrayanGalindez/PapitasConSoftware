from fastapi import APIRouter, Response, Request
from schemas.restauranteSchema import restauranteEntity, restaurantesEntity
from config.db import coleccionRestaurante
from models.restauranteModel import Restaurante
from starlette.status import HTTP_204_NO_CONTENT, HTTP_201_CREATED, HTTP_500_INTERNAL_SERVER_ERROR
import requests
import json

router = APIRouter(
    prefix='/maps',
    tags=['Maps']
)

@router.get('/{address}')
async def getLatitudeLongitudeFromAddress(address: str):
    link = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBIdzoYZYQ6j7ZZtT1puG_aUkeTmn_SwNY&components=country:CO|locality:Bogota&address='
    link += address
    r = requests.get(link)
    json_object = json.loads(r.content)
    #return json_object
    return json_object['results'][0]['geometry']['location']
