from app import app, request
from app.infraestrutura.repositorio.clienteRepositorio import clienteRepositorio as _repositorio
import jsonpickle

@app.route('/cliente/novo', methods=['POST'])
def novo_cliente():
    content = request.json
    _repositorio.cadastrar(content)
    return "ok"


@app.route('/cliente/todos', methods=['GET'])
def buscarTodosClientes():
    return jsonpickle.encode( _repositorio.buscarTodosClientes())


@app.route('/cliente/buscarpornome', methods=['POST'])
def bucarClientePorNome():
    content = request.json
    retorno = _repositorio.buscaClientePorNome(content['nome'])
    return jsonpickle.encode(retorno)
