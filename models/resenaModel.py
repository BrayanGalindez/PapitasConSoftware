from pydantic import BaseModel

class Resena(BaseModel):
    id: int
    restaurante: str
    plato: str
    calificacion: int
    titulo: str
    cuerpo: str
