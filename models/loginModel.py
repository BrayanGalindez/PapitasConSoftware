from pydantic import BaseModel, EmailStr

class loginModel(BaseModel):
    correo: EmailStr
    passw: str