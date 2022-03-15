import { Component, Input, OnInit } from "@angular/core";


@Component({
    selector:"card-selector",
    templateUrl:"./Card.component.html",
    styleUrls:["./Card.component.css"]
})
export class CardComponent implements OnInit{

    @Input() product:any;
    ngOnInit(): void {
        console.log(this.product);
    }

}