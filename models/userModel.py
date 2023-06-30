from typing import Optional
from pydantic import BaseModel, EmailStr, Field, SecretStr

class User(BaseModel):
    id: Optional[int]
    nombre: str
    correo: EmailStr
    passw: SecretStr
    direccion:Optional[str]
    comentarios: Optional[int]
    resAnadidos: Optional[int]
    telefono: Optional[int]
    tipo: Optional[str]
    favoritos: list = Field(default_factory=list)