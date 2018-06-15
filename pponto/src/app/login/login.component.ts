import { LocalStorageService } from './../shared/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model'
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Usuario } from '../entidades/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService, LocalStorageService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  usuario: Usuario

  constructor(
    private formBuilder: FormBuilder,
    private _loginService: LoginService,
    private _localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    this.formValidateRules();

  }

  logar() {
    this.createUserAnSetFormValues();
    this._loginService.verificarLogin(this.usuario)
      .subscribe(
        resp => {
          console.log(resp);
          this._localStorageService.setUser(resp.data);
        },
        err => {
          console.log('erro');
        }
      )
  }

  private formValidateRules() {
    this.loginForm = this.formBuilder.group({
      login: [null, Validators.required],
      senha: [null, Validators.required]
    });
  }

  private createUserAnSetFormValues() {
    this.usuario = new Usuario();
    this.usuario.login = this.loginForm.controls['login'].value
    this.usuario.senha = this.loginForm.controls['senha'].value
  }

}
