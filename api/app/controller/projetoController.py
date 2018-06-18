from app import app, request, abort
from app.dto.responseDTO import Response
import jsonpickle


@app.route('/projeto/novo', methods=['POST'])
def novoProjeto():
    content = request.json
    dados = _repositorio.buscar_usuario(content)

    if dados.get_login() == '':
        return abort(401)
    else:
        usuario = Response(dados.get_values())
        return jsonpickle.encode(usuario.get_data())