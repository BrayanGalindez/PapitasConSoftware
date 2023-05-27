from fastapi import APIRouter, Response
from schemas.menuSchema import menuEntity, menusEntity
from config.db import coleccionMenu
from models.menuModel import Menu
from starlette.status import HTTP_204_NO_CONTENT, HTTP_201_CREATED, HTTP_500_INTERNAL_SERVER_ERROR

router = APIRouter(
    prefix='/menu',
    tags=['Menu']
)


@router.get('/')
async def findAllMenus():
    menus = menusEntity(coleccionMenu.find())
    return f'status: ok, datos: {menus}'

def imprimirMenu(menu: dict):
    return (f"ID: {menu['id']}\nNombre: {menu['nombre']}\nCorreo: {menu['correo']}\nContraseña: {menu['passw']}\nDirección: {menu['direccion']}")

@router.get('/{id}')
async def findOneMenu(id: str):
    menu = menuEntity(coleccionMenu.find_one({"id": id}))
    return imprimirMenu(menu)


@router.get('/{id}')
async def findOneMenu(id: str):
    return menuEntity(coleccionMenu.find_one({"id": id}))


@router.post('/')
async def insertOneMenu(menu: Menu):
    menuNuevo = dict(menu)
    id = coleccionMenu.insert_one(menuNuevo).inserted_id

    menu = coleccionMenu.find_one({"_id": id})
    return menuEntity(menu)


@router.put('/{id}')
async def updateMenu(id: str, menu: Menu):
    try:
        menuNuevo = dict(menu)
        menuNuevo['id'] = id
        coleccionMenu.find_one_and_update({"id": id}, {"$set": dict(menuNuevo)})
        return Response(status_code=HTTP_201_CREATED)
    except:
        return f'Menu no encontrado, error: {Response(status_code=HTTP_500_INTERNAL_SERVER_ERROR)}'


@router.delete('/{id}')
def deleteMenu(id: str):
    try:
        menuEntity(coleccionMenu.find_one_and_delete({"id": id}))
        return f'Menu eliminado satisfactoriamente', Response(status_code=HTTP_204_NO_CONTENT)

    except:
        return f'Menu no encontrado, error: {Response(status_code=HTTP_500_INTERNAL_SERVER_ERROR)}'
