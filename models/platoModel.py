from typing import Optional
from pydantic import BaseModel

class Plato(BaseModel):
    restaurante: Optional[str]
    nombre: str
    precio: float
