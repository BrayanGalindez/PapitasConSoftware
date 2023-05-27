from typing import Optional
from pydantic import BaseModel

class Resena(BaseModel):
    id: Optional[int]
    nombre: str
    correo: str
    passw: str
    direccion: str
