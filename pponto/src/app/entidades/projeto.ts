import { Cliente } from "./cliente";

export class Projeto {
    id: number;
    cliente: Cliente;
    nome: string;
    descricao: string;

    constructor() {
        this.id = 0;
        this.cliente = new Cliente();
        this.nome = '';
        this.descricao = '';
    }
}