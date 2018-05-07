from app import app, request, jsonify, abort
from app.dto.responseDTO import Response
from app.infraestrutura.repositorio.usuarioRepositorio import UsuarioRepositorio as _repositorio
import jsonpickle


@app.route('/login', methods=['POST'])
def logar():
    content = request.json
    dados = _repositorio.buscar_usuario(content['login'])
    if dados == False :
        return abort(401)
    else:
        usuario = Response(dados)
        return jsonpickle.encode(usuario.get_data())