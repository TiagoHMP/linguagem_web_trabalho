from app.infraestrutura.mapping.usuarioMap import Usuario

class UsuarioRepositorio:

    def __init__(self):
        pass

    def buscar_usuario(id):
        return Usuario.get(Usuario.id == id)
