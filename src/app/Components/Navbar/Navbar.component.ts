import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector:'Navbar-selector',
    templateUrl:'./Navbar.component.html',
    styleUrls:['./Navbar.component.css']
})
export class NavbarComponent implements OnInit{
    constructor(private router:Router){}
    ngOnInit(): void {
        
    }

    // kullanıcı çıkışında localstoragei siler ve giriş ekranına yönlendirir.
    logOut(){
        localStorage.clear();
        this.router.navigate(['./SignIn'])
    }
}