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
    menuAberto: boolean = false;

    constructor(
        private route: Router
    ) { }

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

    private abreMenu() {
        this.menu.nativeElement.style.height = "auto";
        this.menuItem.nativeElement.style.display = "inline";
    }

    fechaMenu() {
        this.menu.nativeElement.style.height = "50px";
        this.menuItem.nativeElement.style.display = "none";
    }
}
