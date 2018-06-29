class tarefa:
    id = ''
    usuario: ''
    projeto: ''
    horaInicio: ''
    horaFim: ''
    data: ''


    def __init__(self,id='' ,usuario = '',  projeto = '', horaInicio = '', horaFim = '', data   = ''):
        self.id = id
        self.data = data
        self.usuario = usuario
        self.projeto = projeto
        self.horaFim = horaFim
        self.horaInicio = horaInicio