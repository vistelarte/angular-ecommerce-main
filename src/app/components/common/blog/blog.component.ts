import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

    public data : any;
    public data2 : any;

	constructor(private content : BlogService) {
		this.content.getData().subscribe((data : any)=>{
			this.data = data;
		});
		this.content.getData2().subscribe((data2 : any)=>{
			this.data2 = data2;
		});
	}

    ngOnInit(): void {
    }

}