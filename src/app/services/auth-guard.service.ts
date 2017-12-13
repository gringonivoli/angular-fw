import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(
        private router: Router,
        private userService: UserService
    ) { }

    canActivate(): boolean {
        console.log(`AuthGuard#canActivate called ${this.userService.isAuthenticated}`);
        if (!this.userService.isAuthenticated) {
            console.log('No Auth!');
            this.router.navigate(['/signing']);
        }
        return this.userService.isAuthenticated;
    }

    canActivateChild(): boolean {
        return this.canActivate();
    }
}
