import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from '../login/login.component';
import { ControleTempoComponent } from '../home/controle-tempo/controle-tempo.component';
import { RelatorioComponent } from '../home/relatorio/relatorio.component';
import { CadastroClienteComponent } from '../home/cadastro-cliente/cadastro-cliente.component';
import { CadastroFuncionarioComponent } from '../home/cadastro-funcionario/cadastro-funcionario.component';
import { homeComponent } from './../home/home.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: 'home',
        component: homeComponent,
        children: [
            { path: '*', component: RelatorioComponent },
            { path: 'relatorio', component: RelatorioComponent },
            { path: 'cadastro-cliente', component: CadastroClienteComponent },
            { path: 'cadastro-funcionario', component: CadastroFuncionarioComponent }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
