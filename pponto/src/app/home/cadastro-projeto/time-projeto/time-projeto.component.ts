import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../../../entidades/usuario';
import { Projeto } from '../../../entidades/projeto';
import { CadastroFuncionarioService } from '../../cadastro-funcionario/cadastro-funcionario.service';

@Component({
  selector: 'app-time-projeto',
  templateUrl: './time-projeto.component.html',
  styleUrls: ['./time-projeto.component.css'],
  providers: [CadastroFuncionarioService]
})
export class TimeProjetoComponent implements OnInit {

  @Input() projeto: Projeto
  usuariosEncontrados: Array<Usuario> = new Array<Usuario>();
  constructor(
    private funcionarioService: CadastroFuncionarioService,
  ) { }

  ngOnInit() { }

  buscarUsuario(nome: string) {
    this.funcionarioService.buscarFuncionario(nome)
      .subscribe(
        resp => {
          this.usuariosEncontrados = resp;
        },
        err => { }
      );
  }

}
