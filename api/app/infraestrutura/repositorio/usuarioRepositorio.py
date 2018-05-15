from app.infraestrutura.mapping.usuarioMap import Usuario
from app.dominio.entidade.usuario import Usuario as UsuarioEntity


class UsuarioRepositorio:

    def __init__(self):
        pass

    @staticmethod
    def buscar_usuario(user):

        try:
            user = Usuario.get(Usuario.login == user.upper())
            resposta = UsuarioEntity(user.id, user.login, user.senha, user.tipoUsuario)

            if resposta.validar_usuario(user):
                return resposta

            return UsuarioEntity()

        except:
            return UsuarioEntity()

    @staticmethod
    def cadastrar_usuario(user):
        newUser = UsuarioRepositorio.buscar_usuario(user)

        if newUser.id == '':

            cadastrar = Usuario(
                login = user['login'].upper(),
                senha = user['senha'],
                tipoUsuario = user['tipoUsuario'].upper()
            )

            cadastrar.save()
        else:
            return UsuarioEntity()