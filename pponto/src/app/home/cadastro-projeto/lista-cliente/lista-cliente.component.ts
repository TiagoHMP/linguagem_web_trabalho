import { Component, OnInit, Input } from '@angular/core';
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

  ngOnInit() {
    console.log('cliente')
    console.log(this.cliente);
  }

}
