class Usuario:
    id = ''
    login = ''
    senha = ''
    tipoUsuario = ''

    def __init__(self, id='', login='', senha='', tipo=''):
        self.id = id
        self.login = login
        self.senha = senha
        self.tipoUsuario = tipo

    def get_values(self):
        return{
            "id":self.id,
            "login": self.login
        }


    def validar_usuario(self, usuario):
        if self.login == usuario.login.upper() and self.senha == usuario.senha:
            return True
        else:
            return False