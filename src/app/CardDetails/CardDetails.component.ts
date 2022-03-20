import { Component, OnInit } from "@angular/core";
import { Product } from "../models/Product.model";
import { ShoppingCardService } from "../services/ShoppingCard.service";

@Component({
    selector:'CardDetails-selector',
    templateUrl:'./CardDetails.component.html',
    styleUrls:['./CardDetails.component.css']
})
export class CardDetailsComponent implements OnInit{
    products=this.cardService.getItems();   
    totalPrice=this.cardService.getTotalPrice();
    constructor(private cardService:ShoppingCardService){}
    ngOnInit(): void {

    }

    deleteProduct(title:String){
        console.log(title);
        this.products=this.cardService.deleteFromCard(title);
        this.totalPrice=this.cardService.getTotalPrice();
    }



}