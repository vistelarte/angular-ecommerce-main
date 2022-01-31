import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FeedbackService } from './feedback.service';

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

    public data : any;

	constructor(private content : FeedbackService) {
		this.content.getData().subscribe((data : any)=>{
			this.data = data;
		});
	}

    ngOnInit(): void {
    }

    feedbackSlides: OwlOptions = {
		items: 1,
		nav: true,
		loop: true,
		margin: 25,
		dots: false,
		autoplay: true,
		autoplayHoverPause: true,
		navText: [
			"<i class='fas fa-chevron-left'></i>",
			"<i class='fas fa-chevron-right'></i>",
		]
    }

}