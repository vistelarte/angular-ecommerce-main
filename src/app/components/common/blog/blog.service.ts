import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BlogService {
    private API_URL= environment.API_URL;

    constructor(private http:HttpClient) {}

    getData(){
        let url = `${this.API_URL}/blog`;
        return this.http.get(url);
    }
    getData2(){
        let url = `${this.API_URL}/blog-posts?_sort=id:DESC`;
        return this.http.get(url);
    }
}