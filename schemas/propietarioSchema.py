def propietarioEntity(item) -> dict:
    return{
        "id":str(item['_id']),
        "nombre":item['nombre'],
        "correo":item['correo'],
        "passw":item['passw'],
        "direccion":item['direccion']
    }

def propietariossEntity(entity) -> list:
    return [propietarioEntity(item) for item in entity]