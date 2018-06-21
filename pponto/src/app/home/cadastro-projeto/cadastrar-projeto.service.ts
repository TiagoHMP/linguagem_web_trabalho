import { Projeto } from './../../entidades/projeto';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map'

@Injectable()
export class CadastrarProjetoService {

  url = environment.apiUrl + '/projeto'

  constructor(
    private http: Http
  ) { }

  salvarProjeto(projeto: Projeto) {
    return this.http.post(this.url + '/salvar', projeto)
      .map(resp => resp.json())
  }

  buscarProjetoPorIdCliente(id: string) {
    return this.http.get(`${this.url}/busca-projeto-por-cliente/?idCliente=${id}`)
      .map(
        resp => resp.json()
      );
  }

}
