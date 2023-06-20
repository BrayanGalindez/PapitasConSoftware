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



from fastapi.middleware.cors import CORSMiddleware


# Configuración de CORS
origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
