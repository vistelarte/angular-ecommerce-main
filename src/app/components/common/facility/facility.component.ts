import { Component, OnInit } from '@angular/core';
import { FacilityService } from './facility.service';

@Component({
    selector: 'app-facility',
    templateUrl: './facility.component.html',
    styleUrls: ['./facility.component.scss']
})
export class FacilityComponent implements OnInit {

    public data : any;

	constructor(private content : FacilityService) {
		this.content.getData().subscribe((data : any)=>{
			this.data = data;
		});
	}

    ngOnInit(): void {
    }

}