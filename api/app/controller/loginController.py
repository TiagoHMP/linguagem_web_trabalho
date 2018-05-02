from app import app, request, jsonify
from app.dto.responseDTO import Response
from app.infraestrutura.repositorio.usuarioRepositorio import UsuarioRepositorio as _repositorio
import jsonpickle


@app.route('/login', methods=['POST'])
def logar():
    content = request.json
    dados = _repositorio.buscar_usuario(content['id'])
    if(dados['id'] > 0):
        usuario = Response(dados)
        return jsonpickle.encode(usuario.get_data())
    return Response("usuario invalido ou inexistente")

