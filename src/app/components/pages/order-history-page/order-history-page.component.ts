import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../user.service';
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'app-order-history-page',
    templateUrl: './order-history-page.component.html',
    styleUrls: ['./order-history-page.component.scss']
})
export class OrderHistoryPageComponent implements OnInit {

    private API_URL = environment.API_URL;
    isLoggedIn = this.userService.isLoggedIn();
    userData = this.userService.getUser();
    userOrders: any
    
    constructor(
        private userService: UserService,
        private http: HttpClient,
        private route: ActivatedRoute
    ) { 
        this.route.params.subscribe(() => {
            let url = `${this.API_URL}/orders?users_permissions_user_in=${this.userData.id}`;
            let ddd = this.http.get(url);
            ddd.subscribe((res) => {
                this.userOrders = res;
                // console.log(res)
            });
        });
    }

    ngOnInit(): void {
    }

}