import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { CartService } from '../../../cart.service';
import { UserService } from '../../../user.service';
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'app-checkout-page',
    templateUrl: './checkout-page.component.html',
    styleUrls: ['./checkout-page.component.scss'],
})
export class CheckoutPageComponent implements OnInit {

    private readonly notifier: NotifierService;
    private API_URL = environment.API_URL;
    product = this.cartService.getItems();
    total = this.cartService.getTotal();
    isLoggedIn = this.userService.isLoggedIn();
    userData = this.userService.getUser();

    checkoutForm = this.formBuilder.group({
        fullname: ['', Validators.required],
        email: ['', [Validators.required]],
        address: ['', [Validators.required, Validators.minLength(5)]],
        phone: ['', [Validators.required, Validators.minLength(3)]],
    });

    constructor(
        private formBuilder: FormBuilder,
        private cartService: CartService,
        private userService: UserService,
        private http: HttpClient,
        notifierService: NotifierService,
        private router: Router
    ) {
        this.notifier = notifierService;
    }

    ngOnInit(): void {
    }

    onSubmit(): void {
        let checkData = this.checkoutForm.value;
        let checkProducts = this.product;
        const cartProducts = {
            customer: checkData,
            products: checkProducts,
            total: this.total,
            user: this.userData
        };

        // console.log(this.userData)
        let url = `${this.API_URL}/orders`;
        let me = `${this.API_URL}/users/${this.userData.id}`;
        this.http
            .post<any>(url, { products: cartProducts })
            .subscribe((response) => {
                // console.log(response);
                this.notifier.notify('success', 'Your order has been placed!');
            });
        
        this.http
            .get<any>(me, { 
                headers: { 'Authorization': `Bearer ${this.isLoggedIn}` }
             })
            .subscribe((response) => {
                // console.log(response);
                localStorage.setItem('vaxim_users', JSON.stringify(response));
            });

            // console.log(this.userData)
        
        // Process checkout data here
        this.product = this.cartService.clearCart();
        this.checkoutForm.reset();
        this.router.navigate(['/success-order'])
        .then(() => {
            window.location.reload()
        });
    }

}
