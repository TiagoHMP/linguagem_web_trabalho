import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../../entidades/tarefa';

@Component({
  selector: 'app-controle-tempo',
  templateUrl: './controle-tempo.component.html',
  styleUrls: ['./controle-tempo.component.css']
})
export class ControleTempoComponent implements OnInit {

  tarefas: Array<Tarefa> = new Array();

  constructor() { }

  ngOnInit() {
  }

  criarTarefa() {
    let novaTarefa = new Tarefa();
    this.tarefas.push(novaTarefa);
  }

  removerTarefa(posicao: Tarefa) {
    let index = this.tarefas.indexOf(posicao);
    this.tarefas.splice(index, 1);
  }

}
