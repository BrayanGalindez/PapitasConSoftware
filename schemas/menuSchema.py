def menuEntity(item) -> dict:
    return{
        "id":str(item['_id']),
        "nombre":item['nombre'],
        "correo":item['correo'],
        "passw":item['passw'],
        "direccion":item['direccion']
    }

def menusEntity(entity) -> list:
    return [menuEntity(item) for item in entity]