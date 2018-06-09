from app.infraestrutura.mapping.usuarioMap import Usuario
from app.dominio.entidade.usuario import Usuario as UsuarioEntity
from app.dominio.service.encryptService import encryptService



class UsuarioRepositorio:

    def __init__(self):
        pass

    @staticmethod
    def buscar_usuario(user):
        try:
            savedUser = Usuario.get(Usuario.login == user['login'].upper())
            resposta = UsuarioEntity('', user['login'], user['senha'], user['tipoUsuario'])

            if resposta.validar_usuario(savedUser):
                return resposta

            return UsuarioEntity()

        except:
            return UsuarioEntity()


    @staticmethod
    def cadastrar_usuario(user):
        newUser = UsuarioRepositorio.buscar_usuario(user)
        encodeSenha = encryptService.encrypt(user['senha'])

        if newUser.id == '':

            cadastrar = Usuario(
                login = user['login'].upper(),
                senha = encodeSenha,
                tipoUsuario = user['tipoUsuario'].upper()
            )

            cadastrar.save()
        else:
            return UsuarioEntity()