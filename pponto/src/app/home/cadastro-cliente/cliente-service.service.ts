import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { environment } from '../../../environments/environment';

@Injectable()
export class ClienteServiceService {

  url = environment.apiUrl + '/cliente'

  constructor(
    private http: Http
  ) { }

  salvarCliente(cliente) {
    return this.http.post(this.url + '/novo', cliente);
  }

}
