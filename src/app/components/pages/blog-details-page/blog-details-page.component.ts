import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../src/environments/environment';

@Component({
	selector: 'app-blog-details-page',
	templateUrl: './blog-details-page.component.html',
	styleUrls: ['./blog-details-page.component.scss']
})
export class BlogDetailsPageComponent implements OnInit {

    private API_URL= environment.API_URL;
    public slug: any;
    public data : any;
	
    constructor(private route: ActivatedRoute, private http:HttpClient ) {
        this.route.params.subscribe((param : any)=>{
            let url = `${this.API_URL}/blog-posts?slug=${param.slug}`;
            let ddd = this.http.get(url)
            ddd.subscribe(res => {
                this.data = res
				// console.log(res)
            })
        });
    }

	ngOnInit(): void {
	}

}