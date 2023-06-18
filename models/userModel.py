from typing import Optional
from pydantic import BaseModel, EmailStr

class User(BaseModel):
    id: Optional[int]
    nombre: str
    apellido: str
    direccion:str
    correo: EmailStr
    passw: str
    comentarios: int
    resAnadidos: int
    telefono: int
    tipo: str
    favoritos: list[str]