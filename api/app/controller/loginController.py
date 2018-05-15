from app import app, request, abort
from app.dto.responseDTO import Response
from app.infraestrutura.repositorio.usuarioRepositorio import UsuarioRepositorio as _repositorio
import jsonpickle


@app.route('/login', methods=['POST'])
def logar():
    content = request.json
    dados = _repositorio.buscar_usuario(content['login'])

    if dados.get_id() == '':
        return abort(401)
    else:
        usuario = Response(dados.get_values())
        return jsonpickle.encode(usuario.get_data())