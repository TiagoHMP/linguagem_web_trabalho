import { ClienteServiceService } from './../cadastro-cliente/cliente-service.service';
import { MapperService } from './../../shared/mapper.service';
import { CadastrarProjetoService } from './../cadastro-projeto/cadastrar-projeto.service';
import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../../entidades/tarefa';
import { Projeto } from '../../entidades/projeto';
import { Cliente } from '../../entidades/cliente';

@Component({
  selector: 'app-controle-tempo',
  templateUrl: './controle-tempo.component.html',
  styleUrls: ['./controle-tempo.component.css'],
  providers: [CadastrarProjetoService, ClienteServiceService, MapperService]
})
export class ControleTempoComponent implements OnInit {

  tarefas: Array<Tarefa> = new Array();
  clientes: Array<Cliente> = new Array();

  constructor(
    private _clienteService: ClienteServiceService,
    private mapper: MapperService
  ) { }

  ngOnInit() {
    this.buscarTodosClientes();
  }

  criarTarefa() {
    let novaTarefa = new Tarefa();
    this.tarefas.push(novaTarefa);
  }

  removerTarefa(posicao: Tarefa) {
    let index = this.tarefas.indexOf(posicao);
    this.tarefas.splice(index, 1);
  }

  buscarTodosClientes() {
    this._clienteService.buscarTodosClientes()
      .subscribe(
        resp => {
          resp.forEach(item => {
            this.clientes.push(this.mapper.toCliente(item))
          });
        },
        err => { }
      )
  }

}
