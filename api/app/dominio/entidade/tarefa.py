class tarefa:
    id = ''
    cliente: ''
    usuario: ''
    projeto: ''
    horaInicio: ''
    horaFim: ''
    data: ''


    def __init__(self,id='' ,cliente = '', usuario = '', projeto = '', horaInicio = '', horaFim = '', data   = ''):
        self.id = id
        self.data = data
        self.idCliente = cliente
        self.usuario = usuario
        self.idProjeto = projeto
        self.horaFim = horaFim
        self.horaInicio = horaInicio