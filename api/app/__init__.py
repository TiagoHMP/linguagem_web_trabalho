from flask import  Flask, request, jsonify
from flask_cors import CORS
import peewee


app = Flask(__name__)
CORS(app)
db = peewee.SqliteDatabase('pponto')


from app.controller import loginController


from app.infraestrutura.mapping.usuarioMap import Usuario

try:
    Usuario.create_table()
except peewee.OperationalError:
    print('tabela usuario ja existe')




