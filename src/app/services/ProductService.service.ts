import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})
export class ProductService{
    constructor(private http:HttpClient){}

    getProductList(){
        return this.http.get("http://localhost:3000/products")
    }
}