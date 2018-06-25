import { LocalStorageService } from './../shared/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model'
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Usuario } from '../entidades/usuario';
import { AlertService } from '../shared/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LocalStorageService, AlertService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  usuario: Usuario;

  constructor(
    private formBuilder: FormBuilder,
    private _loginService: LoginService,
    private _localStorageService: LocalStorageService,
    private _alert: AlertService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formValidateRules();

  }

  logar() {
    this.createUserAndSetFormValues();
    this._loginService.verificarLogin(this.usuario)
      .subscribe(
        resp => {
          console.log(resp);
          this._localStorageService.setUser(resp.data.usuario);
          this._localStorageService.setToken(resp.data.token);
          this._loginService.setUserAutenticado();
          this.router.navigate(['home/controle-horas'])
        },
        err => {
          this._alert.erro('Erro ao logar', 'Problema ao efetuar o login, verifique se os dados estão corretos')
          this._loginService.setUserNotAutenticado();
        }
      )
  }

  private formValidateRules() {
    this.loginForm = this.formBuilder.group({
      login: [null, Validators.required],
      senha: [null, Validators.required]
    });
  }

  private createUserAndSetFormValues() {
    this.usuario = new Usuario();
    this.usuario.login = this.loginForm.controls['login'].value
    this.usuario.senha = this.loginForm.controls['senha'].value
  }

}
