import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../entidades/cliente';
import { Projeto } from '../../entidades/projeto';
import { ClienteServiceService } from '../cadastro-cliente/cliente-service.service';
import { CadastrarProjetoService } from './cadastrar-projeto.service';
import { AlertService } from '../../shared/alert.service';

@Component({
  selector: 'app-cadastro-projeto',
  templateUrl: './cadastro-projeto.component.html',
  styleUrls: ['./cadastro-projeto.component.css'],
  providers: [ClienteServiceService, CadastrarProjetoService, AlertService]
})
export class CadastroProjetoComponent implements OnInit {

  clientes = new Array<Cliente>();
  projeto = new Projeto()

  constructor(
    private _clienteService: ClienteServiceService,
    private _projetoService: CadastrarProjetoService,
    private _alert: AlertService
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
      resp => {
        this._alert.sucess('Sucesso', 'Projeto salvo com sucesso')
        this.projeto = new Projeto();
      },
      err => {
        this._alert.erro('Erro', 'Erro ao salvar o projeto, verifique sua conexão com a internet')
      }
    );
  }

}
