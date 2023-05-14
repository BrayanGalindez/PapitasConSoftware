def platoEntity(item) -> dict:
    return{
        "restaurante":item['restaurante'],
        "nombre":item['nombre'],
        "precio":item['precio']
    }

def platosEntity(entity) -> list:
    return [platoEntity(item) for item in entity]