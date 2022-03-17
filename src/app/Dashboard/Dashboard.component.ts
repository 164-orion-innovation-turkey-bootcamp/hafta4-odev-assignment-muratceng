import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "../models/Product.model";
import { ProductService } from "../services/ProductService.service";
import { UserService } from "../services/UserService.service";

@Component({
    selector:'dashboard-selector',
    templateUrl:'./Dashboard.component.html',
    styleUrls:['./Dashboard.component.css']
})
export class DashboardComponent implements OnInit{
    constructor(private router:Router,private userService:UserService,private productService:ProductService) {}

    currentUser:any =undefined;
    productList:any;



   
    
    
    ngOnInit(): void {
        //kullanıcı girişi varsa currentUser a eşitler yoksa giriş ekranına yönlendirir.
        if(this.userService.isLogIn()){
            let tmp = this.userService.getLocalStorage();
            this.currentUser=tmp;
        }else{
            this.router.navigate(['./SignIn'])
        }
        this.productService.getProductList().subscribe((res)=>{
            res as Product[];
            this.productList=res;
        })
    }

}