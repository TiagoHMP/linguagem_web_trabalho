from app import app, request
from app.infraestrutura.repositorio.peojetoRepositorio import projetoRepositorio
import jsonpickle


@app.route('/projeto/salvar', methods=['POST'])
def novoProjeto():
    content = request.json
    response = projetoRepositorio.saveProject(content)
    return jsonpickle.encode(response)


@app.route('/projeto/busca-projeto-por-cliente/', methods=['GET'])
def buscarProjetoPorCliente():
    content = request.args.get('idCliente')
    response = projetoRepositorio.getProjetoPorIdCliente(content)
    return jsonpickle.encode(response)

