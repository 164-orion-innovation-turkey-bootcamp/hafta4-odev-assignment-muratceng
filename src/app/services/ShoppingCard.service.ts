import { Injectable } from "@angular/core";
import { Product } from "../models/Product.model";

@Injectable({
    providedIn:"root"
})
export class ShoppingCardService{

    products:Product[] = this.localStorageInfo() ? this.getLocalStorage() : [];

    addToCard(product:Product){
        this.products.push(product);
        this.AddLocalStorage();
        console.log(this.products);
    } 
    
    getItems(){
        console.log(this.products);
        return this.products;

    }

    clearCart(){
        this.products=[];
        return this.products;
    }

    AddLocalStorage(){
        localStorage.setItem('shoppingCard',JSON.stringify(this.products))
    }
    
    // Local storageden currentUseri çeker eğer yoksa boş objeye eşitler.
    getLocalStorage(){
        return JSON.parse(localStorage.getItem('shoppingCard') || '{}') 
    }

    // getLocalStorage() den gelen objede name propertysi varsa true yoksa false döner.
    localStorageInfo(){
        return this.getLocalStorage().hasOwnProperty("0")==true
    }
}
