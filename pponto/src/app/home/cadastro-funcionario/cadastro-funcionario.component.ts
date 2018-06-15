import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { CadastroFuncionarioService } from './cadastro-funcionario.service'
import { Usuario } from '../../entidades/usuario';
import { AlertService } from '../../shared/alert.service'

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css'],
  providers: [CadastroFuncionarioService, AlertService]
})
export class CadastroFuncionarioComponent {

  user = new Usuario();
  usuario2 = new Usuario(1, 'rafael', '1234', 'M')

  constructor(
    private _CadastroFuncionarioService: CadastroFuncionarioService,
    private _alert: AlertService
  ) { }

  salvarUsuario() {
    if (this.user.login !== '' && this.user.senha !== '') {
      this._CadastroFuncionarioService.salvarFuncionario(this.user).subscribe(
        resp => {
          this._alert.sucess('Sucesso', 'Funcionario salvo com sucesso');
        },
        erro => {
          this._alert.erro('Erro', 'Erro ao salvar');
        }
      )
    } else {
      alert('campos devem estar preenchidos')
    }
  }

}

