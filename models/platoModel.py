from typing import Optional
from pydantic import BaseModel

class Plato(BaseModel):
    restaurante: str
    nombre: str
    precio: float
