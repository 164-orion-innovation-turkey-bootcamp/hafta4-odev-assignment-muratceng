import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "../models/Product.model";
import { ShoppingCardItem } from "../models/ShoppingCardItem.model";
import { ShoppingCardService } from "../services/ShoppingCard.service";

@Component({
    selector:'CardDetails-selector',
    templateUrl:'./CardDetails.component.html',
    styleUrls:['./CardDetails.component.css']
})
export class CardDetailsComponent implements OnInit{
    products=this.cardService.getItems();   
    totalPrice=this.cardService.getTotalPrice();
    constructor(private cardService:ShoppingCardService, private router:Router){}
    ngOnInit(): void {

    }

    deleteProduct(title:String){
        console.log(title);
        this.products=this.cardService.deleteFromCard(title);
        this.totalPrice=this.cardService.getTotalPrice();
    }

    decreaseQuantity(item:ShoppingCardItem){
        item.quantity--;
        this.products= this.cardService.updateItem(item);
        this.totalPrice=this.cardService.getTotalPrice();
    }

    increaseQuantity(item : ShoppingCardItem){
        item.quantity++;
        this.products= this.cardService.updateItem(item);
        this.totalPrice=this.cardService.getTotalPrice();
    }

    goHome(){
        this.router.navigate(['./Dashboard'])
    }

    goProductDetails(id:Number){
        this.router.navigate(['./ProductDetails',id])
    }

}