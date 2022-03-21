import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { faCartShopping, faSignOut } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector:'Navbar-selector',
    templateUrl:'./Navbar.component.html',
    styleUrls:['./Navbar.component.css']
})
export class NavbarComponent implements OnInit{
    constructor(private router:Router){}
    faShoppinCard = faCartShopping
    falogout = faSignOut
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
}