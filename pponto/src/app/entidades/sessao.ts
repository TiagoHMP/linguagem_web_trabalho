import { Usuario } from "./usuario";

export class Sessao {
    usuario: Usuario;
    token: string;


    constructor(usuario?: Usuario, token?: string) {
        this.usuario = usuario || new Usuario();
        this.token = token || '';
    }
}