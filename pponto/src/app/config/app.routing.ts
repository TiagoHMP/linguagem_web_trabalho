import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from '../login/login.component';
import { ControleTempoComponent } from '../home/controle-tempo/controle-tempo.component';
import { RelatorioComponent } from '../home/relatorio/relatorio.component';
import { CadastroClienteComponent } from '../home/cadastro-cliente/cadastro-cliente.component';
import { CadastroFuncionarioComponent } from '../home/cadastro-funcionario/cadastro-funcionario.component';
import { homeComponent } from './../home/home.component';
import { CadastroProjetoComponent } from '../home/cadastro-projeto/cadastro-projeto.component';
import { AuthGuardService } from '../guards/auth-guard.service';
import { SessaoGuard } from '../guards/sessao.guard';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: 'home',
        component: homeComponent,
        children: [
            { path: 'controle-horas', component: ControleTempoComponent, canActivate: [SessaoGuard] },
            { path: 'relatorio', component: RelatorioComponent, canActivate: [SessaoGuard] },
            { path: 'cadastro-cliente', component: CadastroClienteComponent, canActivate: [SessaoGuard] },
            { path: 'cadastro-funcionario', component: CadastroFuncionarioComponent, canActivate: [SessaoGuard] },
            { path: 'cadastro-projeto', component: CadastroProjetoComponent, canActivate: [SessaoGuard] },
            { path: '', redirectTo: 'controle-horas', pathMatch: 'full' },
            { path: '**', redirectTo: 'controle-horas', pathMatch: 'full' },
        ],
        canActivate: [SessaoGuard]
    },
    { path: '', component: LoginComponent },
    { path: '**', component: LoginComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
