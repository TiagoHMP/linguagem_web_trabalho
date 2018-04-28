from flask import  Flask, request, jsonify
import peewee


app = Flask(__name__)
db = peewee.SqliteDatabase('pponto')


from app.controller import loginController


from app.infraestrutura.mapping.usuarioMap import Usuario

try:
    Usuario.create_table()
except peewee.OperationalError:
    print('tabela usuario ja existe')




