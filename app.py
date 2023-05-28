from fastapi import FastAPI
import rutas.users
import rutas.propietarios
import rutas.plato
import rutas.resena
import rutas.restaurante




app = FastAPI()
app.include_router(rutas.users.router)
app.include_router(rutas.propietarios.router)
app.include_router(rutas.restaurante.router)
app.include_router(rutas.plato.router)
app.include_router(rutas.resena.router)

