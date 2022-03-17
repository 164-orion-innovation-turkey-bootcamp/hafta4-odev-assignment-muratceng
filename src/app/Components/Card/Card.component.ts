import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";


@Component({
    selector:"card-selector",
    templateUrl:"./Card.component.html",
    styleUrls:["./Card.component.css"]
})
export class CardComponent implements OnInit{

    constructor(private router:Router){}
    @Input() product:any;
    ngOnInit(): void {
        
    }

    goDetails(){
        this.router.navigate(['Product/Details',this.product.id]);
    }

    addToCard(){
        console.log("ekleme",this.product.id);
    }
}