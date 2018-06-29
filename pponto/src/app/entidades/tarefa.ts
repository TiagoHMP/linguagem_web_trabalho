import { Usuario } from './usuario';
import { Projeto } from "./projeto";

export class Tarefa {
    usuario: Usuario;
    projeto: Projeto;
    horaInicio: string;
    horaFim: string;
    data: Date;
    tempoTrabalhado: string;

    constructor(usuario?: Usuario, projeto?: Projeto, horaFim?: string, horaInicio?: string, data?: Date, tempoTrabalhado?: string) {
        this.usuario = usuario || new Usuario();
        this.projeto = projeto || new Projeto();
        this.horaFim = horaFim || '0';
        this.horaInicio = horaInicio || '0';
        this.data = data || null;
        this.tempoTrabalhado = tempoTrabalhado || '';
    }
}