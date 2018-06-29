import { Usuario } from './../../../../entidades/usuario';
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

  removerUsuario(usuario: Usuario) {
    this.projeto.usuarios = this.removerItem(usuario, this.projeto.usuarios);
  }

  removerCoordenador(usuario: Usuario) {
    this.projeto.coordenadores = this.removerItem(usuario, this.projeto.coordenadores);
  }

  virarUsuario(usuario: Usuario) {
    this.removerCoordenador(usuario);
    this.projeto.usuarios.push(usuario);
  }

  virarCoordenador(usuario: Usuario) {
    this.removerUsuario(usuario);
    this.projeto.coordenadores.push(usuario);
  }

  removerItem(usuario: Usuario, array: Array<Usuario>) {
    return array.filter(user => user.id != usuario.id);
  }

}
