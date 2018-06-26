import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { LoginService } from '../login/login.service'
import { LocalStorageService } from '../shared/local-storage.service';
import { Sessao } from '../entidades/sessao';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private route: Router,
    private loginService: LoginService,
    private localStorageService: LocalStorageService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {


    if (this.loginService.getUsuarioIsAutentidao()) {
      return true;
    }

    this.route.navigate(['/login']);
    return false;
  }

}
