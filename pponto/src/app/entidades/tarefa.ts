import { Cliente } from "./cliente";
import { Projeto } from "./projeto";

export class Tarefa {
    cliente: Cliente;
    projeto: Projeto;
    horaInicio: string;
    horaFim: string;
    data: Date;

    constructor() {
        this.cliente = new Cliente();
        this.projeto = new Projeto();
        this.horaFim = '0';
        this.horaInicio = '0';
        this.data = null;
    }
}