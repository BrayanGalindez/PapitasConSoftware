from pymongo import MongoClient

mongoUri = 'mongodb+srv://dgonzalezca:dgonzalezcapassword@clusterpapitas.tdnhgxt.mongodb.net/?retryWrites=true&w=majority'

client = MongoClient(mongoUri)
db = client.ClusterPapitas

coleccionUser= db['users']
coleccionProp = db['propietarios']
coleccionPlato = db['platos']
coleccionResena = db['resenas']
coleccionRestaurante = db['restaurantes']

