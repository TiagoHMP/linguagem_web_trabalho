export class Tarefa {
    cliente: string;
    projeto: string;
    horaInicio: string;
    horaFim: string;
    data: Date;

    constructor() {
        this.horaFim = '0';
        this.horaInicio = '0';
    }
}