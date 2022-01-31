import { Component, OnInit } from '@angular/core';
import { GalleryPageService } from './gallery-page.service';

@Component({
    selector: 'app-gallery-page',
    templateUrl: './gallery-page.component.html',
    styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent implements OnInit {

    public data : any;

	constructor(private content : GalleryPageService) {
		this.content.getData().subscribe((data : any)=>{
			this.data = data;
		});
	}

    ngOnInit(): void {
    }

}