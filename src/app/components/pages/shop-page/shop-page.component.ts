import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {
    NgbModalConfig,
    ModalDismissReasons,
    NgbModal,
} from '@ng-bootstrap/ng-bootstrap';
import { NotifierService } from 'angular-notifier';
import { ShopPageService } from './shop-page.service';
import { CartService } from '../../../cart.service';
import { ModalService } from '../../../modal.service';
import { Product } from 'src/app/product';

@Component({
    selector: 'app-shop-page',
    templateUrl: './shop-page.component.html',
    styleUrls: ['./shop-page.component.scss'],
	providers: [ NgbModalConfig, NgbModal ]
})
export class ShopPageComponent implements OnInit {

    modalProduct = this.modalViewService.getProduct();
    private readonly notifier: NotifierService;
    closeModal: any;

    public data: any;

    constructor(
        private modalService: NgbModal,
        private content: ShopPageService,
        private cartService: CartService,
        private modalViewService: ModalService,
        notifierService: NotifierService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
        this.notifier = notifierService;
    }

    addToCart(product: Product) {
        this.cartService.addToCart(product);
        this.notifier.notify('success', 'Your product added to the cart!');
    }

    addToModal(product: Product) {
        this.modalViewService.addToModal(product);
    }

    triggerModal(content: any) {
        this.modalService
            .open(content, { windowClass: 'productsQuickView', centered: true })
            .result.then(
                (res) => {
                    this.closeModal = `Closed with: ${res}`;
                },
                (res) => {
                    this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
                }
            );
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    ngOnInit(): void {}

    shopGrid: number = 1;

}