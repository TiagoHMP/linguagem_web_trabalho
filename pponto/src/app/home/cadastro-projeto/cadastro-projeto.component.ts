import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../entidades/cliente';
import { Projeto } from '../../entidades/projeto';
import { ClienteServiceService } from '../cadastro-cliente/cliente-service.service';
import { CadastrarProjetoService } from './cadastrar-projeto.service';

@Component({
  selector: 'app-cadastro-projeto',
  templateUrl: './cadastro-projeto.component.html',
  styleUrls: ['./cadastro-projeto.component.css'],
  providers: [ClienteServiceService, CadastrarProjetoService]
})
export class CadastroProjetoComponent implements OnInit {

  clientes = new Array<Cliente>();
  projeto = new Projeto()

  constructor(
    private _clienteService: ClienteServiceService,
    private _projetoService: CadastrarProjetoService
  ) { }

  ngOnInit() {

  }



  buscarCliente(nome: string) {
    this._clienteService.buscarClientesPorNome(nome).subscribe(
      resp => {
        this.clientes = resp;
      },
      err => { }
    )
  }

  salvarProjeto() {
    this._projetoService.salvarProjeto(this.projeto).subscribe(
      resp => { console.log(resp) },
      err => { }
    );
  }
}
