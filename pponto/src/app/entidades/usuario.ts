export class Usuario {
    id: number;
    login: string;
    senha: string;
    tipoUsuario: string;

    constructor(id?: number, login?: string, senha?: string, tipoUsuario?: string) {
        this.id = id || null;
        this.login = login || '';
        this.senha = senha || '';
        this.tipoUsuario = tipoUsuario || '';
    }
}