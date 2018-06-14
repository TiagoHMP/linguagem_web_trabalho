export class Tarefa {
    idCliente: number;
    idProjeto: number;
    horaInicio: string;
    horaFim: string;
    data: Date;

    constructor() {
        this.idCliente = 0;
        this.idProjeto = 0;
        this.horaFim = '0';
        this.horaInicio = '0';
        this.data = null;
    }
}