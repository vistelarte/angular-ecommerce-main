import { Component, OnInit } from '@angular/core';
import { TopHeaderService } from './top-header.service';

@Component({
    selector: 'app-top-header',
    templateUrl: './top-header.component.html',
    styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {
  
	public data : any;

	constructor(private content : TopHeaderService) {
		this.content.getData().subscribe((data : any)=>{
			this.data = data;
		});
	}

    ngOnInit(): void {
    }

}