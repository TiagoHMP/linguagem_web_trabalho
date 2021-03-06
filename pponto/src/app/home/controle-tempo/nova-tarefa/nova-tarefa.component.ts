import { LocalStorageService } from './../../../shared/local-storage.service';
import { Cliente } from './../../../entidades/cliente';
import { Projeto } from './../../../entidades/projeto';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tarefa } from '../../../entidades/tarefa';
import { ControleTempoService } from '../controle-tempo.service';
import { CadastrarProjetoService } from '../../cadastro-projeto/cadastrar-projeto.service';
import { MapperService } from '../../../shared/mapper.service';


@Component({
  selector: 'app-nova-tarefa',
  templateUrl: './nova-tarefa.component.html',
  styleUrls: ['./nova-tarefa.component.css'],
  providers: [ControleTempoService, CadastrarProjetoService, LocalStorageService]
})

export class NovaTarefaComponent implements OnInit {

  mostarBotaoIniciar = true;
  @Input() tarefa: Tarefa;
  @Input() clientes: Array<Cliente>;
  @Output() removerTarefa = new EventEmitter<Tarefa>();
  projetos: Array<Projeto> = new Array();
  cliente: Cliente;

  constructor(
    private _controleTempoService: ControleTempoService,
    private _projetoService: CadastrarProjetoService,
    private mapper: MapperService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.cliente = this.clientes[0];
    this.tarefa.usuario = this.localStorageService.getUser();
  }

  marcarTempo() {
    this.tarefa.data = new Date();
    const hora = this.tarefa.data.getHours() > 9 ? this.tarefa.data.getHours() : `0${this.tarefa.data.getHours()}`;
    const minuto = this.tarefa.data.getMinutes() > 9 ? this.tarefa.data.getMinutes() : `0${this.tarefa.data.getMinutes()}`;
    const segundos = this.tarefa.data.getSeconds() > 9 ? this.tarefa.data.getSeconds() : `0${this.tarefa.data.getSeconds()}`;
    const horario = `${hora}:${minuto}:${segundos}`;

    if (this.tarefa.horaInicio === '0') {
      this.tarefa.horaInicio = horario;
      this.toogleBotãoIniciar()
    } else {
      this.tarefa.horaFim = horario;
      this.toogleBotãoIniciar();
      this.salvarTarefa();
    }
  }

  excluirTarefa() {
    this.removerTarefa.emit(this.tarefa);
  }

  zerarTimer() {
    this.tarefa.horaInicio = '0';
    this.tarefa.horaFim = '0'
  }

  buscarProjetos(id) {
    this.buscarProjetoPorIdCliente(id);
  }

  buscarProjetoPorIdCliente(id: string) {
    this.projetos = [];
    this._projetoService.buscarProjetoPorIdCliente(id)
      .subscribe(resp => {
        resp.forEach(item => {
          this.projetos.push(this.mapper.toProject(item));
        });
      },
        err => {

        }
      )
  }

  inserePojeto(idProjeto) {
    this.tarefa.projeto = this.projetos.filter(projeto => projeto.id === parseInt(idProjeto))[0];
  }

  private insereCliente(idCliente) {
    this.cliente = this.clientes.filter(cliente => cliente.id === idCliente)[0];
  }

  private salvarTarefa() {
    debugger
    this._controleTempoService.salvarTarefa(this.tarefa).subscribe(
      resp => { alert('salvo') },
      err => { alert('erro') }
    );
  }

  private toogleBotãoIniciar() {
    this.mostarBotaoIniciar = !this.mostarBotaoIniciar;
  }

}
