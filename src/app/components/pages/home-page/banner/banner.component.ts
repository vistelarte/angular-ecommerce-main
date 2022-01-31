import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BannerService } from './banner.service';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

    public data : any;

	constructor(private content : BannerService) {
		this.content.getData().subscribe((data : any)=>{
			this.data = data;
		});
	}

    ngOnInit(): void {
    }

    homeSlides: OwlOptions = {
		items: 1,
		nav: true,
		margin: 25,
		loop: true,
		dots: false,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		autoplay: true,
		autoplayHoverPause: true,
		navText: [
			"<i class='fas fa-long-arrow-alt-left'></i>",
			"<i class='fas fa-long-arrow-alt-right'></i>",
		]
    }

}