import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment'
import 'rxjs/add/operator/map'

import { Usuario } from '../entidades/usuario';

@Injectable()
export class LoginService {

  private loginUrl = environment.apiUrl + '/login';

  constructor(
    private http: Http
  ) { }

  verificarLogin(usuario: Usuario): Observable<any> {
    return this.http.post(this.loginUrl, usuario)
      .map(resp => resp.json())
  }


}
