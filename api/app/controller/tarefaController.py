from app import app, request, abort
from app.infraestrutura.repositorio.tarefaRepositorio import tarefaRepositorio as _repositorio
import jsonpickle


@app.route('/tarefa/nova', methods=['POST'])
def novaTarefa():
    content = request.json
    try:
        _repositorio.save(content)
        return jsonpickle.encode(content, unpicklable=False)
    except:
        abort(400)


@app.route('/tarefa/buscar', methods=['POST'])
def buscarTarefasPorData():
    content = request.json
    try:
        resposta = _repositorio.getTarefaPorData(content)
        return jsonpickle.encode(resposta, unpicklable=False)
    except:
        abort(400)