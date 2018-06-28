from app import app, request
from ..infraestrutura.repositorio.usuarioRepositorio import UsuarioRepositorio as _repositorio
import jsonpickle


@app.route('/usuario/novo', methods=['POST'])
def novo_usuario():
    content = request.json
    _repositorio.cadastrar_usuario(content)
    return "ok"

@app.route('/usuario/', methods=['GET'])
def buscarUsuarioPornome():
    content = request.args.get('nome');
    retorno = _repositorio.buscarUsuarioPorNome(content)
    return jsonpickle.encode(retorno, unpicklable=False)