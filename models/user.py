from typing import Optional
from pydantic import BaseModel, EmailStr, validate_email

class User(BaseModel):
    id: Optional[int]
    nombre: str
    apellido: str
    direccion:str
    correo: EmailStr
    passw: bytes
    comentarios: int
    resAnadidos: int
    telefono: int
