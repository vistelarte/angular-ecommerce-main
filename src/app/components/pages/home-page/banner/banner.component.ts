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
	isDragging:any;
	constructor(private content : BannerService) {
		
	}

    ngOnInit(): void {
		this.content.getData().subscribe((data : any)=>{
			this.data = data;
			console.log(data.mainBannerSlides);
		});
    }
	decode(url:string){
		console.log(url);
		return encodeURI(url);
	}

    homeSlides: OwlOptions = {
		items: 1,
		nav: true,
		margin: 25,
		loop: true,
		dots: false,
		URLhashListener:true,
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