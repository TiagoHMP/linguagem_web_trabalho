import { Component, OnInit, Input } from '@angular/core';
import { Tarefa } from '../../../entidades/tarefa';

@Component({
  selector: 'app-item-relatorio',
  templateUrl: './item-relatorio.component.html',
  styleUrls: ['./item-relatorio.component.css']
})
export class ItemRelatorioComponent implements OnInit {

  @Input() tarefas: Array<Tarefa> = new Array<Tarefa>();
  constructor() { }

  ngOnInit() { }
}
