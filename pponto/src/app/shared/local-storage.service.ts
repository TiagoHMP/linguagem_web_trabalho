import { Injectable } from '@angular/core';
import { Usuario } from '../entidades/usuario'

@Injectable()
export class LocalStorageService {

  usuario = 'Usuario';

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
}
