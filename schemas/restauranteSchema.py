def restauranteEntity(item) -> dict:
    return{
        "id":str(item['_id']),
        "nombre":item['nombre'],
        "correo":item['correo'],
        "passw":item['passw'],
        "direccion":item['direccion']
    }

def restaurantesEntity(entity) -> list:
    return [restauranteEntity(item) for item in entity]