
class projeto():
    id = ''
    cliente = ''
    nome = ''
    descricao = ''

    def __init__(self, id, cliente, nome, descricao):
        self.id = id,
        self.nome = nome,
        self.cliente = cliente,
        self.descricao = descricao


    def getValues(self):
        return {
            "id": self.id,
            "cliente": self.cliente.getValues(),
            "nome": self.nome,
            "descricao": self.descricao,
        }