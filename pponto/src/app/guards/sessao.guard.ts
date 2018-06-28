import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Sessao } from '../entidades/sessao';
import { LocalStorageService } from '../shared/local-storage.service';
import { LoginService } from '../login/login.service';
import { Usuario } from '../entidades/usuario';
import { AlertService } from '../shared/alert.service';

@Injectable()
export class SessaoGuard implements CanActivate {

  private sessao: Sessao = new Sessao();

  constructor(
    private localStorageService: LocalStorageService,
    private loginService: LoginService,
    private route: Router,
    private notificarionService: AlertService
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.sessao.token = this.localStorageService.getToken() || '';
    this.sessao.usuario = this.localStorageService.getUser() || new Usuario();

    return new Promise((resolve, reject) => {
      this.loginService.verificaUsuarioLogado(this.sessao)
        .subscribe(
          resp => {
            if (!resp) {
              this.route.navigate(['/login'])
            }
            resolve(resp);
          },
          err => {
            this.notificarionService.erro('Erro', 'Verifique a conexão com a internet');
          })
    })
    // return false;
  }
}
