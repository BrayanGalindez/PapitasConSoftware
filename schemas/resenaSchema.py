def resenaEntity(item) -> dict:
    return{
        "id":int(item['id']),
        "restaurante":item['restaurante'],
        "plato":item['plato'],
        "calificacion":item['calificacion'],
        "titulo":item['titulo'],
        "cuerpo":item['cuerpo']
    }

def resenasEntity(entity) -> list:
    return [resenaEntity(item) for item in entity]