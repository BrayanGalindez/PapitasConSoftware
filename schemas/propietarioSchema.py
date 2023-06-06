def propietarioEntity(item) -> dict:
    return{
        "id":item['id'],
        "nombre":item['nombre'],
        "correo":item['correo'],
        "telefono":item['telefono']
    }

def propietariosEntity(entity) -> list:
    return [propietarioEntity(item) for item in entity]