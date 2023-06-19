from fastapi import FastAPI
import rutas.users
import rutas.propietarios
import rutas.plato
import rutas.resena
import rutas.restaurante
import rutas.maps




app = FastAPI()
app.include_router(rutas.users.router)
app.include_router(rutas.propietarios.router)
app.include_router(rutas.restaurante.router)
app.include_router(rutas.plato.router)
app.include_router(rutas.resena.router)
app.include_router(rutas.maps.router)


from fastapi.middleware.cors import CORSMiddleware


# Configuración de CORS
origins = [
    "http://localhost:3000",  # Agrega aquí el dominio de tu frontend
    # Puedes agregar más dominios permitidos si es necesario
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
