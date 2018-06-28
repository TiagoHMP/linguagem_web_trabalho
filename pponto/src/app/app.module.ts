import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ToastModule } from 'ng2-toastr/ng2-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './config/app.routing';
import { homeComponent } from './home/home.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { LoginService } from './login/login.service';
import { SessaoGuard } from './guards/sessao.guard';
import { AlertService } from './shared/alert.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    homeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ToastModule.forRoot()
  ],
  providers: [
    AuthGuardService,
    LoginService,
    SessaoGuard,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
