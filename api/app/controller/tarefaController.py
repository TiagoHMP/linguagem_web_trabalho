from app import app, request
from app.infraestrutura.repositorio.tarefaRepositorio import tarefaRepositorio as _repositorio


@app.route('/tarefa/nova', methods=['POST'])
def novaTarefa():
    content = request.json
    _repositorio.save(content)
    return "ok"