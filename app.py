from fastapi import FastAPI
from rutas.user import user_router
from passlib.hash import sha256_crypt
from bcrypt import hashpw,gensalt,checkpw

#salt = gensalt()
#aprobar = hashpw(b"felord1985*",salt)
#print(aprobar)
#print(checkpw(b"felord1985*",aprobar))


app = FastAPI()
app.include_router(user_router)


