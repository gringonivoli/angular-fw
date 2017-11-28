import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'fw-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.scss']
})

export class MenuComponent implements OnInit {

    constructor(
        public menuService: MenuService
    ) { }

    ngOnInit() { }
}
