import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment'
import 'rxjs/add/operator/map'

import { Usuario } from '../entidades/usuario';
import { Sessao } from '../entidades/sessao';

@Injectable()
export class LoginService {

  usuarioAutenticado: boolean = false;
  private loginUrl = environment.apiUrl + '/login';

  constructor(
    private http: Http
  ) { }

  setUserAutenticado() {
    this.usuarioAutenticado = true;
  }

  setUserNotAutenticado() {
    this.usuarioAutenticado = false;
  }

  getUsuarioIsAutentidao(): boolean {
    return this.usuarioAutenticado;
  }

  verificarLogin(usuario: Usuario): Observable<any> {
    return this.http.post(this.loginUrl, usuario)
      .map(resp => resp.json())
  }

  verificaUsuarioLogado(sessao: Sessao) {
    return this.http.post(this.loginUrl + '/verificar', sessao)
      .map(resp => resp.json())
  }


}
