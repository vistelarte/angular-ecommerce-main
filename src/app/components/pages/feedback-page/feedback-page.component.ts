import { Component, OnInit } from '@angular/core';
import { FeedbackPageService } from './feedback-page.service';

@Component({
    selector: 'app-feedback-page',
    templateUrl: './feedback-page.component.html',
    styleUrls: ['./feedback-page.component.scss']
})
export class FeedbackPageComponent implements OnInit {

    public data : any;

	constructor(private content : FeedbackPageService) {
		this.content.getData().subscribe((data : any)=>{
			this.data = data;
		});
	}

    ngOnInit(): void {
    }

}