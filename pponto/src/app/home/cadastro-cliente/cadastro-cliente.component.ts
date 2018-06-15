import { Component, OnInit } from '@angular/core';
import { ClienteServiceService } from './cliente-service.service';
import { Cliente } from '../../entidades/cliente';
import { AlertService } from '../../shared/alert.service'

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css'],
  providers: [ClienteServiceService, AlertService]
})
export class CadastroClienteComponent implements OnInit {

  cliente = new Cliente();
  constructor(
    private _service: ClienteServiceService,
    private _alert: AlertService
  ) { }

  ngOnInit() {
  }


  cadastrar() {
    console.log(this.cliente);
    this._service.salvarCliente(this.cliente).subscribe(
      resp => {
        this._alert.sucess('Sucesso', 'Cliente salvo com sucesso');
      },
      err => {
        this._alert.erro('ERRO', 'Erro ao salvar');
      }
    );
  }

}
