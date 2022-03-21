import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { faCartShopping, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { ShoppingCardService } from "src/app/services/ShoppingCard.service";

@Component({
    selector:'Navbar-selector',
    templateUrl:'./Navbar.component.html',
    styleUrls:['./Navbar.component.css']
})
export class NavbarComponent implements OnInit{
    constructor(private router:Router, private cardService:ShoppingCardService){}
    faShoppinCard = faCartShopping
    falogout = faSignOut
    shoppingCard=this.cardService.getItems();
    totalPrice=this.cardService.getTotalPrice();
    ngOnInit(): void {
        
    }

    // kullanıcı çıkışında localstoragei siler ve giriş ekranına yönlendirir.
    logOut(){
        localStorage.clear();
        this.router.navigate(['./SignIn'])
    }

    goHome(){
        this.router.navigate(['./Dashboard'])
    }

    cardDetails(){
        this.router.navigate(['./CardDetails'])
    }

    deleteProduct(title:String){
        console.log(title);
        this.shoppingCard=this.cardService.deleteFromCard(title);
        this.totalPrice=this.cardService.getTotalPrice();
    }

    goDetails(){
        this.router.navigate(['./CardDetails'])
    }
}