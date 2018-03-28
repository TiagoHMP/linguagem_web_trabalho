import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from '../login/login.component';
import { ControleTempoComponent } from '../home/controle-tempo/controle-tempo.component';
import { RelatorioComponent } from '../home/relatorio/relatorio.component';
import { CadastroClienteComponent } from '../home/cadastro-cliente/cadastro-cliente.component';
import { CadastroFuncionarioComponent } from '../home/cadastro-funcionario/cadastro-funcionario.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: ControleTempoComponent },
    { path: 'home/relatorio', component: RelatorioComponent },
    { path: 'home/cadastro-cliente', component: CadastroClienteComponent },
    { path: 'home/cadastro-funcionario', component: CadastroFuncionarioComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
