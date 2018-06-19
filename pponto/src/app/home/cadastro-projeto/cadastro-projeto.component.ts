import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../entidades/cliente';
import { Projeto } from '../../entidades/projeto';
import { ClienteServiceService } from '../cadastro-cliente/cliente-service.service';

@Component({
  selector: 'app-cadastro-projeto',
  templateUrl: './cadastro-projeto.component.html',
  styleUrls: ['./cadastro-projeto.component.css'],
  providers: [ClienteServiceService]
})
export class CadastroProjetoComponent implements OnInit {

  clientes = new Array<Cliente>();
  projeto = new Projeto()

  constructor(
    private _clienteService: ClienteServiceService
  ) { }

  ngOnInit() {

  }

  buscarCliente(nome: string) {
    console.log(nome)
    this._clienteService.buscarClientesPorNome(nome).subscribe(
      resp => {
        this.clientes = resp;
      },
      err => { }
    )
  }

}
