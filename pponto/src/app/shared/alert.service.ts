import { Injectable } from '@angular/core';
import swal from 'sweetalert2'

@Injectable()
export class AlertService {

  constructor() { }

  erro(title: string, message: string) {
    swal({
      type: 'error',
      title: title,
      text: message
    });
  }

  sucess(title: string, message: string) {
    swal({
      type: 'success',
      title: title,
      text: message
    })
  }

}
