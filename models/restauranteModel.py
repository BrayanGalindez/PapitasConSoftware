from typing import Optional
from pydantic import BaseModel

class Restaurante(BaseModel):
    id: str
    nombre: str
    correo: str
    passw: str
    direccion: str
