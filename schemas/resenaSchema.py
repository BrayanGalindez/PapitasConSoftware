def resenaEntity(item) -> dict:
    return{
        "id":str(item['_id']),
        "nombre":item['nombre'],
        "correo":item['correo'],
        "passw":item['passw'],
        "direccion":item['direccion']
    }

def resenasEntity(entity) -> list:
    return [resenaEntity(item) for item in entity]