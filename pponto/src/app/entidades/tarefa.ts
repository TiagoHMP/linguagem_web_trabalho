import { Usuario } from './usuario';
import { Projeto } from "./projeto";

export class Tarefa {
    usuario: Usuario;
    projeto: Projeto;
    horaInicio: string;
    horaFim: string;
    data: Date;

    constructor() {
        this.usuario = new Usuario();
        this.projeto = new Projeto();
        this.horaFim = '0';
        this.horaInicio = '0';
        this.data = null;
    }
}