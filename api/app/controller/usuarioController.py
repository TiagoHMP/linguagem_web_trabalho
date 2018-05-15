from app import app, request
from ..infraestrutura.repositorio.usuarioRepositorio import UsuarioRepositorio as _repositorio


@app.route('/usuario/novo', methods=['POST'])
def novo_usuario():
    content = request.json
    _repositorio.cadastrar_usuario(content)
    return "ok"