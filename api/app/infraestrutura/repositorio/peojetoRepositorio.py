from app.infraestrutura.mapping.projetoMap import projetoMap
from app.infraestrutura.mapping.clienteMap import cliente as clienteMap
from app.infraestrutura.mapping.usuarioMap import Usuario as usuarioMap
from app.infraestrutura.mapping.usuarioProjetoMap import usuarioProjetoMap
from app.dominio.entidade.projeto import projeto as ProjetoEntity
from app import db

class projetoRepositorio():

    def __init__(self):
        pass

    @staticmethod
    def saveProject(projeto):
        newCliente = clienteMap.get(clienteMap.id == projeto['cliente']['id'])
        usuarios = projeto['usuarios']
        coordenadores = projeto['coordenadores']

        newProject = projetoMap(
            cliente=newCliente,
            nome=projeto['nome'],
            descricao=projeto['descricao'],
        )
        newProject.save()

        projectId = projetoMap.select().order_by(projetoMap.id.desc()).get()
        for usuario in usuarios:
            newUsuario = usuarioMap.get(usuarioMap.id == usuario['id'])
            savedProject = projetoMap.get(projetoMap.id == projectId)
            newUsuarioProjeto = usuarioProjetoMap(
                usuario=newUsuario,
                projeto=savedProject,
                funcao='U'
            )
            newUsuarioProjeto.save()

        for usuario in coordenadores:
            newUsuario = usuarioMap.get(usuarioMap.id == usuario['id'])
            savedProject = projetoMap.get(projetoMap.id == projectId)
            newUsuarioProjeto = usuarioProjetoMap(
                usuario=newUsuario,
                projeto=savedProject,
                funcao='C'
            )
            newUsuarioProjeto.save()

        return projeto



    @staticmethod
    @db.atomic()
    def getProjetoPorIdCliente(idCliente):
        id = int(idCliente)
        projetos = list(projetoMap.select().where(projetoMap.cliente == id))
        retorno = []
        for projeto in projetos:
            cliente = projeto.cliente.getValues()
            newProjeto = ProjetoEntity(projeto.id, cliente ,projeto.nome, projeto.descricao).getResponseValues()
            retorno.append(newProjeto);

        return retorno