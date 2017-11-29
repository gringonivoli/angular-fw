import { Component, OnInit, Input } from '@angular/core';
import { MenuItem, MenuService } from '../../services/menu.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'fw-popup-menu',
    templateUrl: 'popup-menu.component.html',
    styleUrls: ['popup-menu.component.scss']
})

export class PopupMenuComponent implements OnInit {

    @Input()
    menu: Array<MenuItem>;

    constructor(public menuService: MenuService) { }

    ngOnInit() { }
}
