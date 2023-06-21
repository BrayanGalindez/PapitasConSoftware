from pydantic import BaseModel, EmailStr, Field
from typing import Optional

class Restaurante(BaseModel):
    tags: list = Field(default_factory=list)
    nit: int
    nombre: str
    propietario: str
    correo: EmailStr
    telefono: int
    direccion: str
    urlImg: Optional[str]
