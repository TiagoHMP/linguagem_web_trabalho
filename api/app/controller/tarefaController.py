from app import app, request, abort
from app.infraestrutura.repositorio.tarefaRepositorio import tarefaRepositorio as _repositorio


@app.route('/tarefa/nova', methods=['POST'])
def novaTarefa():
    content = request.json
    try:
        _repositorio.save(content)
        return content
    except:
        abort(400)