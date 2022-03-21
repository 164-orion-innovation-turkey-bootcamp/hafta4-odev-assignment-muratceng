import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Order } from "../models/Order.model";

@Injectable({
    providedIn:"root"
})
export class OrderService{
    constructor(private http:HttpClient){}

    addOrder(order:any){
        return this.http.post("http://localhost:3000/orders",order)
    }
}