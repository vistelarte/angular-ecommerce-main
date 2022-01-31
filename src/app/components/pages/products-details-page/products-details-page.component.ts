import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { CartService } from '../../../cart.service';
import { Product } from 'src/app/product';
import { environment } from '../../../../../src/environments/environment';

@Component({
    selector: 'app-products-details-page',
    templateUrl: './products-details-page.component.html',
    styleUrls: ['./products-details-page.component.scss'],
})
export class ProductsDetailsPageComponent implements OnInit {
    private readonly notifier: NotifierService;
    private API_URL = environment.API_URL;
    public slug: any;
    public data: any;

    constructor(
        private route: ActivatedRoute,
        private http: HttpClient,
        private cartService: CartService,
        notifierService: NotifierService
    ) {
        this.route.params.subscribe((param: any) => {
            let url = `${this.API_URL}/products?slug=${param.slug}`;
            let ddd = this.http.get(url);
            ddd.subscribe((res) => {
                this.data = res;
                // console.log(res)
            });
        });
        this.notifier = notifierService;
    }

    ngOnInit(): void {}

    addToCart(product: Product, quantity: number) {
        this.cartService.addToCart(product, quantity);
        this.notifier.notify('success', 'Your product added to the cart!');
    }

    productsSlides: OwlOptions = {
        items: 1,
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='fas fa-chevron-left'></i>",
            "<i class='fas fa-chevron-right'></i>",
        ],
    };

    // Input Counter
    inputnumber = 1;
    plus() {
        this.inputnumber = this.inputnumber + 1;
    }
    minus() {
        this.inputnumber != 1;
        {
            this.inputnumber = this.inputnumber - 1;
        }
    }

    counter(i: number) {
        return new Array(i);
    }
}
