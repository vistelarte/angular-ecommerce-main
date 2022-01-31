import { Component, OnInit } from '@angular/core';
import { CollectionAdsService } from './collection-ads.service';

@Component({
    selector: 'app-collection-ads',
    templateUrl: './collection-ads.component.html',
    styleUrls: ['./collection-ads.component.scss']
})
export class CollectionAdsComponent implements OnInit {

    public data : any;

	constructor(private content : CollectionAdsService) {
		this.content.getData().subscribe((data : any)=>{
			this.data = data;
		});
	}

    ngOnInit(): void {
    }

}