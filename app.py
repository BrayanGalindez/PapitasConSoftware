from fastapi import FastAPI
import rutas.users
import rutas.propietarios




app = FastAPI()
app.include_router(rutas.users.router)
app.include_router(rutas.propietarios.router)

