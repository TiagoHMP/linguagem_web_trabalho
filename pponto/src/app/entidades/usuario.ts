export class Usuario {
    id: number;
    login: string;
    senha: string;
    tipoUsuario: string;
    matricula: string;

    constructor(id?: number, login?: string, senha?: string) {
        this.id = id || null;
        this.login = login || '';
        this.senha = senha || '';
        this.tipoUsuario = 'U';
        this.matricula = '';
    }
}