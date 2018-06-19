class Cliente:
    id = ''
    nome = ''
    apelido = ''
    cnpj = ''


    def __init__(self, id = '',nome = '', apelido = '', cnpj = ''):
        self.id = id
        self.nome = nome
        self.apelido = apelido
        self.cnpj = cnpj

    def getValues(self):
        return {
            "id": self.id,
            "nome": self.nome,
            "apelido": self.apelido,
            "cnpj": self.cnpj
        }
