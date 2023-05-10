from typing import Optional
from pydantic import BaseModel, EmailStr

class Propietario(BaseModel):
    id: Optional[int]
    nombre: str
    correo: EmailStr
    telefono: int
