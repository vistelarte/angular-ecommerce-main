import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {
    NgbModalConfig,
    ModalDismissReasons,
    NgbModal,
} from '@ng-bootstrap/ng-bootstrap';
import { NotifierService } from 'angular-notifier';
import { BestSellingProductsService } from './best-selling-products.service';
import { CartService } from '../../../cart.service';
import { ModalService } from '../../../modal.service';
import { Product } from 'src/app/product';

@Component({
    selector: 'app-best-selling-products',
    templateUrl: './best-selling-products.component.html',
    styleUrls: ['./best-selling-products.component.scss'],
    providers: [NgbModalConfig, NgbModal],
})
export class BestSellingProductsComponent implements OnInit {
    modalProduct = this.modalViewService.getProduct();
    private readonly notifier: NotifierService;
    closeModal: any;

    public data: any;
    public titleData: any;

    constructor(
        private modalService: NgbModal,
        private content: BestSellingProductsService,
        private cartService: CartService,
        private modalViewService: ModalService,
        notifierService: NotifierService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
        this.content.sectionTitleData().subscribe((titleData: any) => {
            this.titleData = titleData;
            this.titleData = Image;
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

    productsSlides: OwlOptions = {
        nav: true,
        margin: 25,
        loop: false,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='fas fa-chevron-left'></i>",
            "<i class='fas fa-chevron-right'></i>",
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            },
        },
    };
    
}
