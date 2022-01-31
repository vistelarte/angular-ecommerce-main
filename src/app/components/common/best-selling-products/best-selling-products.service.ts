import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BestSellingProductsService {
    private API_URL= environment.API_URL;

    constructor(private http:HttpClient) {}

    getData(){
        let url = `${this.API_URL}/products?bestSelling=true&_sort=id:DESC`;
        return this.http.get(url);
    }

    sectionTitleData(){
        let url = `${this.API_URL}/best-selling-products`;
        return this.http.get(url);
    }

    // Input Counter
    inputnumber = 1;
    plus() {
        this.inputnumber = this.inputnumber + 1;
    }
    minus() {
        this.inputnumber != 1;
        {
            this.inputnumber = this.inputnumber - 1;
        }
    }
}