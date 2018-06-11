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
    const tempo: Date = new Date();
    const hora = tempo.getHours() > 9 ? tempo.getHours() : `0${tempo.getHours()}`;
    const minuto = tempo.getMinutes() > 9 ? tempo.getMinutes() : `0${tempo.getMinutes()}`;
    const segundos = tempo.getSeconds() > 9 ? tempo.getSeconds() : `0${tempo.getSeconds()}`;
    const horario = `${hora}:${minuto}:${segundos}`;

    if (this.tarefa.horaInicio === '0') {
      this.tarefa.horaInicio = horario;
      this.toogleBotãoIniciar()
    } else {
      this.tarefa.horaFim = horario;
      this.toogleBotãoIniciar();
    }
  }

  ExcluirTarefa() {
    this.removerTarefa.emit(this.tarefa);
  }

  private toogleBotãoIniciar() {
    this.mostarBotaoIniciar = !this.mostarBotaoIniciar;
  }

}
