import { Component, OnInit } from '@angular/core';
import { ControleTempoService } from '../controle-tempo/controle-tempo.service';
import { Tarefa } from '../../entidades/tarefa';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css'],
  providers: [ControleTempoService]
})
export class RelatorioComponent implements OnInit {

  dataInicio: any;
  dataFim: any
  tarefas: Array<Tarefa> = new Array<Tarefa>();
  constructor(
    private controleTempService: ControleTempoService
  ) { }

  ngOnInit() {
  }

  buscarTarefas() {
    let dataInicio = this.dataInicio ? new Date(this.dataInicio) : new Date();
    let dataFim = this.dataFim ? this.formataDataFinal(this.dataFim) : new Date();
    let datas = { inicio: dataInicio, fim: dataFim };
    this.buscarTarefaPorData(datas);
  }

  buscarTarefaPorData(data) {
    this.controleTempService.buscarTarefaPorData(data)
      .subscribe(
        resp => {
          this.tarefas = resp;
          this.formatTarefasDados()
          this.insereTempoTrabalhadonaTarefa();
        },
        err => { }
      )
  }

  private formatTarefasDados() {
    let newArray = []
    this.tarefas.forEach(tarefa => {
      tarefa.projeto.cliente = tarefa.projeto.cliente[0].__data__;
      tarefa.projeto.id = tarefa.projeto.id[0];
      tarefa.projeto.nome = tarefa.projeto.nome[0];
      newArray.push(new Tarefa(tarefa.usuario, tarefa.projeto, tarefa.horaFim, tarefa.horaInicio, tarefa.data, '0'));
    })
    this.tarefas = newArray;
  }

  private formataDataFinal(data: string) {
    let newData = data.split('-');
    return new Date(parseInt(newData[0]), parseInt(newData[1]), parseInt(newData[2]), 23, 59, 59);
  }

  private insereTempoTrabalhadonaTarefa() {
    this.tarefas.forEach(tarefa => {
      tarefa.tempoTrabalhado = this.calculaHoraTrabalhada(tarefa.horaInicio, tarefa.horaFim);
    });
  }

  private calculaHoraTrabalhada(inicio: string, fim: string) {
    let horasInicio = inicio.split(':');
    let horasInicioEmSegundos = this.converterHorasEmSegundos(parseInt(horasInicio[0]));
    let minutosInicioEmSegundo = this.converterMinutosEmSegundo(parseInt(horasInicio[1]));
    let tempoInicial = horasInicioEmSegundos + minutosInicioEmSegundo + parseInt(horasInicio[2]);

    let horasFim = fim.split(':');
    let horasFinalEmSegundos = this.converterHorasEmSegundos(parseInt(horasFim[0]))
    let minutosFinalEmSegundos = this.converterMinutosEmSegundo(parseInt(horasFim[1]))
    let tempoFinal = horasFinalEmSegundos + minutosFinalEmSegundos + parseInt(horasFim[2]);

    let tempoTrabalhado = tempoFinal - tempoInicial;

    return this.getTempoTrabalhado(tempoTrabalhado);
  }

  private converterHorasEmSegundos(horas: number) {
    return (horas * 60) * 60
  }

  private converterMinutosEmSegundo(minutos: number) {
    return minutos * 60
  }

  private getTempoTrabalhado(tempo: number) {
    let data = new Date(0, 0, 0, 0, 0, tempo);
    let horas = data.getHours() < 10 ? '0' + data.getHours() : data.getHours();
    let minutos = data.getMinutes() < 10 ? '0' + data.getMinutes() : data.getMinutes();
    let segundos = data.getSeconds() < 10 ? '0' + data.getSeconds() : data.getSeconds();
    return `${horas}:${minutos}:${segundos}`;
  }

}
