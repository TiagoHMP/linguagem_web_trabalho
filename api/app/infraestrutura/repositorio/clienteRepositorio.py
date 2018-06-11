from app.infraestrutura.mapping.cliente import cliente as clienteMap

class clienteRepositorio():

    def __init__(self):
        pass

    @staticmethod
    def cadastrar(cliente):
        novoCliente = clienteMap(
            nome = cliente['nome'],
            apelido = cliente['apelido'],
            cnpj = cliente['cnpj']
        )

        novoCliente.save()
