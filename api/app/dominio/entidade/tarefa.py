class tarefa:
    idCliente: ''
    idProjeto: ''
    horaInicio: ''
    horaFim: ''
    data: ''


    def __init__(self,idCliente = '', idProjeto = '', horaInicio = '', horaFim = '', data = ''):
        self.data = data
        self.idCliente = idCliente
        self.idProjeto = idProjeto
        self.horaFim = horaFim
        self.horaInicio = horaInicio