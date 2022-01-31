import { Component, OnInit } from '@angular/core';
import { FaqPageService } from './faq-page.service';

@Component({
    selector: 'app-faq-page',
    templateUrl: './faq-page.component.html',
    styleUrls: ['./faq-page.component.scss']
})
export class FaqPageComponent implements OnInit {

    public data : any;

	constructor(private content : FaqPageService) {
		this.content.getData().subscribe((data : any)=>{
			this.data = data;
		});
	}

    ngOnInit(): void {
    }

}