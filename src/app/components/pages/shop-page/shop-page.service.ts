import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ShopPageService {
    private API_URL= environment.API_URL;

    constructor(private http:HttpClient) {}

    getData(type?: number,category?: number){
        let filter = '';
        if(type){
            filter +='&type='+type;
        }
        if(category){
            filter +='&category='+category;
        }
        let url = `${this.API_URL}/products?_sort=id:DESC${filter}`;
        return this.http.get(url);
    }
}