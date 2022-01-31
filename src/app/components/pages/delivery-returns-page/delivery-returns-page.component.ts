import { Component, OnInit } from '@angular/core';
import { DeliveryReturnsPageService } from './delivery-returns-page.service';

@Component({
    selector: 'app-delivery-returns-page',
    templateUrl: './delivery-returns-page.component.html',
    styleUrls: ['./delivery-returns-page.component.scss']
})
export class DeliveryReturnsPageComponent implements OnInit {

    public data : any;

	constructor(private content : DeliveryReturnsPageService) {
		this.content.getData().subscribe((data : any)=>{
			this.data = data;
		});
	}

    ngOnInit(): void {
    }

}