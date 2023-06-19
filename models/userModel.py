from typing import Optional
from pydantic import BaseModel, EmailStr, Field

class User(BaseModel):
    id: int
    nombre: str
    correo: EmailStr
    passw: str
    direccion:Optional[str]
    comentarios: Optional[int]
    resAnadidos: Optional[int]
    telefono: Optional[int]
    tipo: Optional[str]
    favoritos: list = Field(default_factory=list)