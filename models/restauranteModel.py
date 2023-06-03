from pydantic import BaseModel, EmailStr

class Restaurante(BaseModel):
    nit: int
    nombre: str
    propietario: str
    correo: EmailStr
    telefono: int
    direccion: str
