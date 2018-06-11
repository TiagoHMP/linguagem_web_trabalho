from app import app, request
from app.infraestrutura.repositorio.clienteRepositorio import clienteRepositorio as _repositorio


@app.route('/cliente/novo', methods=['POST'])
def novo_cliente():
    content = request.json
    _repositorio.cadastrar(content)
    return "ok"