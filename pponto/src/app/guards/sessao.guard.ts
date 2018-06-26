import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Sessao } from '../entidades/sessao';
import { LocalStorageService } from '../shared/local-storage.service';
import { LoginService } from '../login/login.service';
import { Usuario } from '../entidades/usuario';

@Injectable()
export class SessaoGuard implements CanActivate {

  private sessao: Sessao = new Sessao();

  constructor(
    private localStorageService: LocalStorageService,
    private loginService: LoginService,
    private route: Router
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.sessao.token = this.localStorageService.getToken() || '';
    this.sessao.usuario = this.localStorageService.getUser() || new Usuario();

    if (this.loginService.verificaUsuarioLogado(this.sessao)) {
      return true;
    }

    this.route.navigate(['/login']);
    return false;
  }
}
