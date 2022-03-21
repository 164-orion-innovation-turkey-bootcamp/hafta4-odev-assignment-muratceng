import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ShoppingCardService } from "src/app/services/ShoppingCard.service";


@Component({
    selector:"card-selector",
    templateUrl:"./Card.component.html",
    styleUrls:["./Card.component.css"]
})
export class CardComponent implements OnInit{

    constructor(private router:Router,private cardService:ShoppingCardService){}
    @Input() product:any;
    showMessage =false;
    ngOnInit(): void {
        
    }

    goDetails(){
        this.router.navigate(['Product/Details',this.product.id]);
    }

    addToCard(){
        let tmp={
            title : this.product.title,
            price:this.product.price,
            quantity:1,
            id:this.product.id
        }
        this.cardService.addToCard(tmp);
        this.showMessage=true;
        this.messageTimer();
    }

    messageTimer(){
        setTimeout(() => {
            this.showMessage=false;
        },1000);
    }
}