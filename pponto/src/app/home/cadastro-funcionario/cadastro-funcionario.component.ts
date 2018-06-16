import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { CadastroFuncionarioService } from './cadastro-funcionario.service'
import { Usuario } from '../../entidades/usuario';
import { AlertService } from '../../shared/alert.service'
import { TipoUsuarioEnum } from '../../shared/enum/tiposUsuario'

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css'],
  providers: [CadastroFuncionarioService, AlertService]
})
export class CadastroFuncionarioComponent {
  enum = TipoUsuarioEnum
  user = new Usuario();

  constructor(
    private _CadastroFuncionarioService: CadastroFuncionarioService,
    private _alert: AlertService
  ) { }

  salvarUsuario() {
    if (this.user.login !== '' && this.user.senha !== '') {
      this._CadastroFuncionarioService.salvarFuncionario(this.user).subscribe(
        resp => {
          this._alert.sucess('Sucesso', 'Funcionario salvo com sucesso');
          this.limparCampos();
        },
        erro => {
          this._alert.erro('Erro', 'Erro ao salvar');
        }
      )
    } else {
      alert('campos devem estar preenchidos')
    }
  }

  limparCampos() {
    this.user = new Usuario();
  }

}

