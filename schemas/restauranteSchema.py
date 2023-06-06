def restauranteEntity(item) -> dict:
    return{
        "nit":item['nit'],
        "nombre":item['nombre'],
        "propietario":item['propietario'],
        "correo":item['correo'],
        "telefono":item['telefono'],
        "direccion":item['direccion']
    }

def restaurantesEntity(entity) -> list:
    return [restauranteEntity(item) for item in entity]