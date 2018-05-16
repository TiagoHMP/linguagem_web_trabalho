from app.dominio.service.encryptService import encryptService

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
            "login": self.login,
            "tipoUsuario":self.tipoUsuario
        }

    def validar_usuario(self, usuario):
        decryptedSenha = encryptService.decrypt(usuario.senha)
        if self.login.upper() == usuario.login.upper() and self.senha == decryptedSenha:
            return True
        else:
            return False

    def get_id(self):
        return self.id

    def get_login(self):
        return self.login