import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class NewArrivalProductsService {
    private API_URL= environment.API_URL;

    constructor(private http:HttpClient) {}

    getData(){
        let url = `${this.API_URL}/products?newArrival=true&_sort=id:DESC`;
        return this.http.get(url);
    }

    sectionTitleData(){
        let url = `${this.API_URL}/new-arrival-products`;
        return this.http.get(url);
    }

}