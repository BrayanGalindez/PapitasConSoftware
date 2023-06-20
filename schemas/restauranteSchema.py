def restauranteEntity(item) -> dict:
    return{
        "tags": list(item["tags"]),
        "nit":item['nit'],
        "nombre":item['nombre'],
        "propietario":item['propietario'],
        "correo":item['correo'],
        "telefono":item['telefono'],
        "direccion":item['direccion']
    }

def restaurantesEntity(entity) -> list:
    return [restauranteEntity(item) for item in entity]