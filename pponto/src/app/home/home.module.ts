import { NgModule } from '@angular/core';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { ControleTempoComponent } from './controle-tempo/controle-tempo.component';
import { FormsModule } from '@angular/forms';
import { NovaTarefaComponent } from './controle-tempo/nova-tarefa/nova-tarefa.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    CadastroClienteComponent,
    CadastroFuncionarioComponent,
    RelatorioComponent,
    ControleTempoComponent,
    NovaTarefaComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: []
})

export class HomeModule { }
