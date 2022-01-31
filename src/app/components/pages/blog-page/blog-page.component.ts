import { Component, OnInit } from '@angular/core';
import { BlogPageService } from './blog-page.service';

@Component({
    selector: 'app-blog-page',
    templateUrl: './blog-page.component.html',
    styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {

    public data : any;

	constructor(private content : BlogPageService) {
		this.content.getData().subscribe((data : any)=>{
			this.data = data;
		});
	}

    ngOnInit(): void {
    }

    blogGrid: number = 1;

}