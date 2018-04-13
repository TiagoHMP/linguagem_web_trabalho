import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class homeComponent implements OnInit {

    @ViewChild('menu') menu: ElementRef;
    menuAberto: boolean = true;

    constructor(
        private route: Router
    ) { }

    ngOnInit() {
    }

    goHome(){        
        this.route.navigate(['home/relatorio']);
    }

    goCadastroCliente(){
        
    }

}
