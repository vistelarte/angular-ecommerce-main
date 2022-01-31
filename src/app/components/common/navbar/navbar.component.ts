import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../../cart.service';
import { NavbarService } from './navbar.service';
import { UserService } from '../../../user.service';
import { NotifierService } from 'angular-notifier';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

    isLoggedIn = this.userService.isLoggedIn();
    cartProducts = this.cartService.getItems();
    private readonly notifier: NotifierService;
    public data: any;
    
    constructor(
        public router: Router,
        private userService: UserService,
        notifierService: NotifierService,
        private navbar: NavbarService,
        private cartService: CartService
    ) {
        this.navbar.getData().subscribe((data: any) => {
            this.data = data;
        });
        this.notifier = notifierService;
    }

    ngOnInit(): void {}

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    logOutUser(){
        this.userService.logOut()
        this.notifier.notify('success', 'Logout successful.');
        this.router.navigate(['/'])
        .then(() => {
            window.location.reload()
        })
    }
    
}
