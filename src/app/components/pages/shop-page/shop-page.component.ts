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
import { ActivatedRoute } from '@angular/router';

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
    type = 0;
    category = 0;
    public data: any;
    public message: string | undefined;
    constructor(
        private modalService: NgbModal,
        private content: ShopPageService,
        private cartService: CartService,
        private modalViewService: ModalService,
        notifierService: NotifierService,
        private route: ActivatedRoute
    ) {
        this.route.queryParams
        .subscribe(params => {
          this.type = parseInt(params.type);
          this.category = parseInt(params.category);
          this.content.getData( this.type,this.category).subscribe((data: any) => {
            this.data = this.shuffle(data);

        });
        }
      );
     
        this.notifier = notifierService;
    }
    
    shuffle(array: any) {
        let currentIndex = array.length,  randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }


    addToCart(product: Product) {
        this.message = encodeURIComponent("Hola, me gustaria consultar por este producto: " + window.location.href + '/' + product.slug);
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
