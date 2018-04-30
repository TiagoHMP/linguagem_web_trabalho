from app import app, request, jsonify
from app.dto.responseDTO import Response
from app.infraestrutura.repositorio.usuarioRepositorio import UsuarioRepositorio as _repositorio
from app.dominio.entidade.usuario import Usuario
import jsonpickle


@app.route('/login', methods=['GET'])
def logar():
    dados = _repositorio.buscar_usuario(1)
    usuario = Response(Usuario(dados.id, dados.login, dados.senha))
    return jsonpickle.encode(usuario.get_data())






