import { Cliente } from "./cliente";
import { Usuario } from "./usuario";

export class Projeto {
    id: number;
    cliente: Cliente;
    usuarios: Array<Usuario>
    coordenadores: Array<Usuario>
    nome: string;
    descricao: string;

    constructor() {
        this.id = 0;
        this.cliente = new Cliente();
        this.nome = '';
        this.descricao = '';
        this.usuarios = new Array<Usuario>();
        this.coordenadores = new Array<Usuario>();
    }
}