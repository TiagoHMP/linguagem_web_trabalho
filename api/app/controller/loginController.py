from app import app, request, abort
from app.dto.responseDTO import Response
from app.infraestrutura.repositorio.usuarioRepositorio import UsuarioRepositorio as _repositorio
import jsonpickle


@app.route('/login', methods=['POST'])
def logar():
    content = request.json
    dados = _repositorio.buscar_usuario(content)

    if dados['usuario'].get_login() == '':
        return abort(401)
    else:
        resposta = Response(dados)
        return jsonpickle.encode(resposta.get_data(), unpicklable=False)


@app.route('/login/verificar', methods=['POST'])
def verificarUsuarioLogado():
    content = request.json
    response = _repositorio.verificarUsuarioLogado(content)
    if(response['id'] != ''):
        return jsonpickle.encode(response, unpicklable=False)

    return abort(401)


