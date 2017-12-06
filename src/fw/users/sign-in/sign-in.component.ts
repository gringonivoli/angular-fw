import { Component, OnInit } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'fw-sign-in',
    templateUrl: 'sign-in.component.html',
    styleUrls: ['sign-in.component.scss']
})

export class SignInComponent implements OnInit {

    formError: string;
    submitting: false;

    constructor() { }

    ngOnInit() { }
}
