import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const BASE_API="http://localhost:3000/products";

@Injectable({
    providedIn:"root"
})
export class ProductService{
    constructor(private http:HttpClient){}

    getProductList(){
        return this.http.get(BASE_API)
    }

    getProductById(id:String){
        return this.http.get(BASE_API+"/"+id);
    }

    filterByMainCategory(filterText:string){
        return this.http.get(BASE_API+"?maincategory="+filterText)
    }

    filterBySubCategory(filterText:string){
        return this.http.get(BASE_API+"?category="+filterText)
    }

    filterByName(filterText:string){
        return this.http.get(BASE_API+"?title_like="+filterText)
    }
}