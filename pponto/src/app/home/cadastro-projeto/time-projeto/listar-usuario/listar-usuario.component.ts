import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../../../../entidades/usuario';
import { Projeto } from '../../../../entidades/projeto';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  @Input() projeto: Projeto
  @Input() usuarios: Array<Usuario>
  constructor() { }

  ngOnInit() {
    this.usuarios = this.usuarios || new Array<Usuario>();
  }

  adicionarCoordenador(usuario: Usuario) {
    let contemUsuario = this.verificaSeContemUsuario(usuario, this.projeto.usuarios);
    if (contemUsuario) {
      this.projeto.usuarios = this.removeItem(usuario, this.projeto.usuarios);
    }

    let contemCoordenador = this.verificaSeContemUsuario(usuario, this.projeto.coordenadores);
    if (!contemCoordenador) {
      this.projeto.coordenadores.push(usuario);
    }

  }

  adicionarUsuario(usuario) {
    let contemCoordenador = this.verificaSeContemUsuario(usuario, this.projeto.coordenadores);
    if (contemCoordenador) {
      this.projeto.coordenadores = this.removeItem(usuario, this.projeto.coordenadores);
    }

    let contemUsuario = this.verificaSeContemUsuario(usuario, this.projeto.usuarios);
    if (!contemUsuario) {
      this.projeto.usuarios.push(usuario);
    }

  }

  private verificaSeContemUsuario(usuario: Usuario, array: Array<Usuario>) {
    return array.find(user => user.id === usuario.id) ? true : false;
  }

  private removeItem(usuario: Usuario, array: Array<Usuario>) {
    return array.filter(user => user.id != usuario.id);
  }




}
