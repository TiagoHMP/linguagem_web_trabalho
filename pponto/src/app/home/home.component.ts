import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class homeComponent implements OnInit {

    @ViewChild('menu') menu: ElementRef;
    @ViewChild('menuItem') menuItem: ElementRef;
    menuAberto: boolean;

    constructor(
        private route: Router
    ) {
        this.menuAberto = !this.detectMobile();
    }

    ngOnInit() {
    }

    goTo(url: string) {
        this.route.navigate([url]);
    }

    toogleMenu() {
        if (this.menuAberto) {
            this.fechaMenu();
            this.menuAberto = false;
        } else {
            this.abreMenu();
            this.menuAberto = true;
        }
    }

    fechaMenu() {
        this.menuItem.nativeElement.style.top = "-500px";
    }

    private abreMenu() {
        this.menuItem.nativeElement.style.top = "0px";
    }

    private detectMobile() {
        if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
        ) {
            return true;
        }
        else {
            return false;
        }
    }

}
