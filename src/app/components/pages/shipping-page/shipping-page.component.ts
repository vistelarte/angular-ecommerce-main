import { Component, OnInit } from '@angular/core';
import { ShippingPageService } from './shipping-page.service';

@Component({
    selector: 'app-shipping-page',
    templateUrl: './shipping-page.component.html',
    styleUrls: ['./shipping-page.component.scss']
})
export class ShippingPageComponent implements OnInit {

    public data : any;

	constructor(private content : ShippingPageService) {
		this.content.getData().subscribe((data : any)=>{
			this.data = data;
		});
	}

    ngOnInit(): void {
    }

}