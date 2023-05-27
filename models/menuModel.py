from typing import Optional
from pydantic import BaseModel

class Menu(BaseModel):
    id: str
    nombre: str
    correo: str
    passw: str
    direccion: str