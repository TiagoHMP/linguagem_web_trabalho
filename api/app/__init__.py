from flask import  Flask, request, jsonify, abort
from flask_cors import CORS
import peewee



app = Flask(__name__)
CORS(app)
db = peewee.SqliteDatabase('pponto')


from app.controller import loginController
from app.controller import usuarioController
from app.controller import clienteController
from app.controller import tarefaController
from app.controller import projetoController

from app.infraestrutura.mapping.usuarioMap import Usuario
from app.infraestrutura.mapping.clienteMap import cliente
from app.infraestrutura.mapping.tarefaMap import tarefa
from app.infraestrutura.mapping.projetoMap import projetoMap

try:
    Usuario.create_table()
    cliente.create_table()
    tarefa.create_table()
    projetoMap.create_table()

except peewee.OperationalError:
    print('tabelas ja existe')

from .infraestrutura.repositorio.usuarioRepositorio import UsuarioRepositorio
UsuarioRepositorio.criarAdmin()