from app.infraestrutura.mapping.projetoMap import projetoMap
from app.infraestrutura.mapping.clienteMap import cliente as clienteMap
from app.infraestrutura.mapping.usuarioMap import Usuario as usuarioMap
from app.infraestrutura.mapping.usuarioProjetoMap import usuarioProjetoMap
from app.dominio.entidade.projeto import projeto as ProjetoEntity

class projetoRepositorio():

    def __init__(self):
        pass

    @staticmethod
    def saveProject(projeto):
        newCliente = clienteMap.get(clienteMap.id == projeto['cliente']['id'])
        usuarios = projeto['usuarios']

        newProject = projetoMap(
            cliente=newCliente,
            nome=projeto['nome'],
            descricao=projeto['descricao'],
        )
        newProject.save()

        for usuario in usuarios:
            newUsuario = usuarioMap.get(usuarioMap.id == usuario['id'])
            newProjeto = usuarioProjetoMap(
                usuario=newUsuario,
                projeto=newProjeto
            )
            newProjeto.save()

        return projeto



    @staticmethod
    def getProjetoPorIdCliente(idCliente):
        id = int(idCliente)
        projetos = list(projetoMap.select().where(projetoMap.cliente == id))
        retorno = []
        for projeto in projetos:
            cliente = projeto.cliente.getValues()
            newProjeto = ProjetoEntity(projeto.id, cliente ,projeto.nome, projeto.descricao).getResponseValues()
            retorno.append(newProjeto);

        return retorno