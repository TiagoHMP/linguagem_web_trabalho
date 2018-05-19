import { Component, OnInit } from '@angular/core';
import { CadastroFuncionarioService } from './cadastro-funcionario.service'
import { Usuario } from '../../entidades/usuario';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css'],
  providers: [CadastroFuncionarioService]
})
export class CadastroFuncionarioComponent {

  user = new Usuario();
  usuario2 = new Usuario(1, 'rafael', '1234', 'M')

  constructor(
    private _CadastroFuncionarioService: CadastroFuncionarioService
  ) { }

  salvarUsuario() {
    if (this.user.login !== '' && this.user.senha !== '') {
      this._CadastroFuncionarioService.salvarFuncionario(this.user).subscribe(
        resp => { alert('Salvo!') },
        erro => { alert('Erro!') }
      )
    } else {
      alert('campos devem estar preenchidos')
    }
  }


}

