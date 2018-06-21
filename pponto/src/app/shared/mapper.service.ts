import { Cliente } from './../entidades/cliente';
import { Projeto } from './../entidades/projeto';
import { Injectable } from '@angular/core';

@Injectable()
export class MapperService {

  constructor() { }

  toProject(objeto) {
    let projeto = Object.assign(new Projeto(), objeto);
    projeto.cliente = Object.assign(new Cliente(), objeto.cliente);
    return projeto;
  }

  toCliente(objeto) {
    return Object.assign(new Cliente(), objeto.__data__);
  }

}
