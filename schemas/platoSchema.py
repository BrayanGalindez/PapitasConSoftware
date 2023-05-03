def platoEntity(item) -> dict:
    return{
        "id":str(item['_id']),
        "nombre":item['nombre'],
        "correo":item['correo'],
        "passw":item['passw'],
        "direccion":item['direccion']
    }

def platosEntity(entity) -> list:
    return [platoEntity(item) for item in entity]