import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Usuario } from '../../entidades/usuario';
import { environment } from '../../../environments/environment';


@Injectable()
export class CadastroFuncionarioService {

  url = environment.apiUrl + '/usuario'

  constructor(
    private http: Http
  ) { }

  salvarFuncionario(usuario: Usuario) {
    return this.http.post(this.url + '/novo', usuario);
  }

  buscarFuncionario(nome: string) {
    return this.http.get(`${this.url}/?nome=${nome}`)
      .map(resp => resp.json());
  }


}
