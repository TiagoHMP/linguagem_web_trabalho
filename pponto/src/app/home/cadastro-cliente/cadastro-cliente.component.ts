import { Component, OnInit } from '@angular/core';
import { ClienteServiceService } from './cliente-service.service';
import { Cliente } from '../../entidades/cliente';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css'],
  providers: [ClienteServiceService]
})
export class CadastroClienteComponent implements OnInit {

  cliente = new Cliente();
  constructor(
    private _service: ClienteServiceService
  ) { }

  ngOnInit() {
  }


  cadastrar() {
    console.log(this.cliente);
    this._service.salvarCliente(this.cliente).subscribe(
      resp => { alert('salvou') },
      err => { alert('erro') }
    );
  }

}
