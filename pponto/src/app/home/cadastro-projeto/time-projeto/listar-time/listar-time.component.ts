import { Component, OnInit, Input } from '@angular/core';
import { Projeto } from '../../../../entidades/projeto';

@Component({
  selector: 'app-listar-time',
  templateUrl: './listar-time.component.html',
  styleUrls: ['./listar-time.component.css']
})
export class ListarTimeComponent implements OnInit {

  @Input() projeto: Projeto

  constructor() { }

  ngOnInit() { }

}
