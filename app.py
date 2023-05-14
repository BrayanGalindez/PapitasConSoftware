from fastapi import FastAPI
from rutas.rutas import router
from bcrypt import hashpw,gensalt,checkpw



app = FastAPI()
app.include_router(router)


