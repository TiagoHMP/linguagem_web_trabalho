import { Injectable } from '@angular/core';
import { Usuario } from '../entidades/usuario'

@Injectable()
export class LocalStorageService {

  usuario = 'USUARIO';
  token = 'TOKEN'

  constructor(

  ) { }

  setUser(usuario: Usuario) {
    localStorage.setItem(this.usuario, JSON.stringify(usuario));
  }

  getUser(): Usuario {
    return JSON.parse(localStorage.getItem(this.usuario))
  }

  deleteUser() {
    localStorage.clear();
  }

  setToken(token: string) {
    localStorage.setItem(this.token, token);
  }

  getToken(): string {
    return localStorage.getItem(this.token);
  }
}
