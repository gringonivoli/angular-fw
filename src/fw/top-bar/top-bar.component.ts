import { Component, OnInit } from '@angular/core';
import { FrameworkConfigService } from '../services/framework-config.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'fw-top-bar',
    templateUrl: 'top-bar.component.html',
    styleUrls: ['top-bar.component.scss']
})

export class TopBarComponent implements OnInit {

    constructor(public frameworkConfigService: FrameworkConfigService) { }

    ngOnInit() { }
}
