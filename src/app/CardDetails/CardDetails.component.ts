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
    constructor(private cardService:ShoppingCardService){}
    ngOnInit(): void {

    }

    



}