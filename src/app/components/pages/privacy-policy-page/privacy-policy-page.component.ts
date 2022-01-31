import { Component, OnInit } from '@angular/core';
import { PrivacyPolicyPageService } from './privacy-policy-page.service';

@Component({
    selector: 'app-privacy-policy-page',
    templateUrl: './privacy-policy-page.component.html',
    styleUrls: ['./privacy-policy-page.component.scss']
})
export class PrivacyPolicyPageComponent implements OnInit {

    public data : any;

	constructor(private content : PrivacyPolicyPageService) {
		this.content.getData().subscribe((data : any)=>{
			this.data = data;
		});
	}

    ngOnInit(): void {
    }

}