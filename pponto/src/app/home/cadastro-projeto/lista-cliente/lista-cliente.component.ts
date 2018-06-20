import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Cliente } from '../../../entidades/cliente';
import { Projeto } from '../../../entidades/projeto';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {

  @Input() cliente: Cliente
  @Input() projeto: Projeto
  constructor() { }

  ngOnInit() { }

  adicionarCliente() {
    this.projeto.cliente = this.cliente;
  }

  verificaSelecionado(): boolean {
    return this.projeto.cliente.apelido.match(this.cliente.apelido) ? true : false;
  }

}
