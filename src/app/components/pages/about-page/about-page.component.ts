import { Component, OnInit } from '@angular/core';
import { AboutPageService } from './about-page.service';

@Component({
    selector: 'app-about-page',
    templateUrl: './about-page.component.html',
    styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

    public data : any;

	constructor(private content : AboutPageService) {
		this.content.getData().subscribe((data : any)=>{
			this.data = data;
		});
	}

    ngOnInit(): void {
    }

}