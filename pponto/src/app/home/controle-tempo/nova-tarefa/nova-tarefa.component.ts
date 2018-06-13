import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tarefa } from '../../../entidades/tarefa';


@Component({
  selector: 'app-nova-tarefa',
  templateUrl: './nova-tarefa.component.html',
  styleUrls: ['./nova-tarefa.component.css']
})
export class NovaTarefaComponent implements OnInit {

  mostarBotaoIniciar = true;
  @Input() tarefa: Tarefa;
  @Output() removerTarefa = new EventEmitter<Tarefa>();


  constructor() { }

  ngOnInit() {
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
    }
  }

  excluirTarefa() {
    this.removerTarefa.emit(this.tarefa);
  }

  zerarTimer() {
    this.tarefa.horaInicio = '0';
    this.tarefa.horaFim = '0'
  }

  private toogleBotãoIniciar() {
    this.mostarBotaoIniciar = !this.mostarBotaoIniciar;
  }

}
