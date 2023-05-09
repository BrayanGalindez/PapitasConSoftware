
# Papitas con Software

### Instrucciones de instalación python.

1. Clonar repositorio.

	`git clone https://github.com/BrayanGalindez/PapitasConSoftware.git`

2. Pasarse a rama develop

	`git checkout develop_db`
3.  Instalar pipenv.

	`pip install pipenv`
	
4. activar env.

	`pipenv shell`
	
5 Instalar dependencias env.

	`pipenv install`
	
6 ejecutar uvicorn

	`uvicorn app:app --reload`

Listo, luego de seguir estos pasos, deberias tener funcionando de forma correcta el proyecto de FastApi.
