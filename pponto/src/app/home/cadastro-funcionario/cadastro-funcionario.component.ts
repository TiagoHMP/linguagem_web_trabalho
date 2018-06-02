import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { CadastroFuncionarioService } from './cadastro-funcionario.service'
import { Usuario } from '../../entidades/usuario';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

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
    private _CadastroFuncionarioService: CadastroFuncionarioService,
    private toastr: ToastsManager,
    private vcr: ViewContainerRef
  ) {
    this.toastr.setRootViewContainerRef(this.vcr);
  }

  salvarUsuario() {
    if (this.user.login !== '' && this.user.senha !== '') {
      this._CadastroFuncionarioService.salvarFuncionario(this.user).subscribe(
        resp => {
          this.toastr.success('contato salvo', 'SUCESSO')
        },
        erro => {
          this.toastr.error('erro ao cadastrar', 'ERRO')
        }
      )
    } else {
      alert('campos devem estar preenchidos')
    }
  }

}

