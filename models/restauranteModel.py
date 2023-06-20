from pydantic import BaseModel, EmailStr, Field

class Restaurante(BaseModel):
    tags: list = Field(default_factory=list)
    nit: int
    nombre: str
    propietario: str
    correo: EmailStr
    telefono: int
    direccion: str
