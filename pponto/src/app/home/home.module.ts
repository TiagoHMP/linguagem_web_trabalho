import { NgModule } from '@angular/core';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { ControleTempoComponent } from './controle-tempo/controle-tempo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CadastroClienteComponent,
    CadastroFuncionarioComponent,
    RelatorioComponent,
    ControleTempoComponent,
  ],
  imports: [
    FormsModule
  ],
  providers: []
})

export class HomeModule { }
