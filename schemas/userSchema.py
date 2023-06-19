def userEntity(item) -> dict:
    return{
        "id":item['id'],
        "nombre":item['nombre'],
        "direccion":item['direccion'],
        "correo":item['correo'],
        "passw":str(item['passw']),
        "comentarios":item["comentarios"],
        "resAnadidos":item["resAnadidos"],
        "telefono":item["telefono"],
        "tipo":item["tipo"],
        "favoritos": list(item["favoritos"])
    }

def usersEntity(entity) -> list:
    return [userEntity(item) for item in entity]