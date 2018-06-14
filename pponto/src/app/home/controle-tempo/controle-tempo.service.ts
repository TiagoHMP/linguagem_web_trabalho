import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { environment } from '../../../environments/environment';
import { Tarefa } from '../../entidades/tarefa';

@Injectable()
export class ControleTempoService {

  url = environment.apiUrl + '/tarefa'

  constructor(
    private http: Http
  ) { }

  salvarTarefa(tarefa: Tarefa) {
    return this.http.post(`${this.url}/nova`, tarefa);
  }
}
