import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Product } from "../../models/Product.model";
import { ProductService } from "../../services/ProductService.service";
import { UserService } from "../../services/UserService.service";

@Component({
    selector: 'dashboard-selector',
    templateUrl: './Dashboard.component.html',
    styleUrls: ['./Dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    constructor(private router: Router, private userService: UserService, private productService: ProductService) { }

    currentUser: any = undefined;
    productList: any;
    searchForm!: FormGroup;
    faSearch = faSearch;
    categories = [{ mainCategory:"Electronic", subCategories: ['Television', 'Laptop', 'Playstation'] },
    { mainCategory:"HomeandFurniture",  subCategories:['Furniture', 'Dinner set', 'Lamp'] },
    { mainCategory:"Cosmetic", subCategories: ['Shampoo', 'Perfume', 'Lipgloss'] },
    { mainCategory:"Sport", subCategories: ['Bike', 'Skateboard', 'Dumbbell'] },
    { mainCategory:"Clothes", subCategories: ['Jacket', 'Pants', 'T-shirt'] }]

    ngOnInit(): void {
        //kullanıcı girişi varsa currentUser a eşitler yoksa giriş ekranına yönlendirir.
        if (this.userService.isLogIn()) {
            let tmp = this.userService.getLocalStorage();
            this.currentUser = tmp;
        } else {
            this.router.navigate(['./SignIn'])
        }
        this.productService.getProductList().subscribe((res) => {
            res as Product[];
            this.productList = res;
        })

        this.createForm();
    }

    createForm() {
        this.searchForm = new FormGroup({
            search: new FormControl(null, [Validators.required])
        })
    }


    onSubmit() {
        console.log(this.searchForm.get('search')?.value);
        this.filterByName(this.searchForm.get('search')?.value);
    }

    GoDetails() {
        this.router.navigate(['./CardDetails'])
    }

    filterMainCategory(filterText:string){
        this.productService.filterByMainCategory(filterText).subscribe((res)=>{
            this.productList = res as Product[];
        })
    }

    filterSubCategory(filterText:string){
        this.productService.filterBySubCategory(filterText).subscribe((res)=>{
            this.productList = res as Product[];
        })
    }

    filterByName(filterText:string){
        this.productService.filterByName(filterText).subscribe((res)=>{
            this.productList = res as Product[];
        })    
    }
}