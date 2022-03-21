import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/User.model';
import { UserService } from 'src/app/services/UserService.service';
import { Product } from '../../models/Product.model';
import { ProductService } from '../../services/ProductService.service';
import { ShoppingCardService } from '../../services/ShoppingCard.service';

@Component({
  selector: 'product-details-selector',
  templateUrl: './ProductDetails.component.html',
  styleUrls: ['./ProductDetails.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;
  currentImage!: String;
  currentUser !: User;
  showMessage = false;
  constructor(private productService: ProductService, private route: Router, private router: ActivatedRoute, private cardService: ShoppingCardService, private userService: UserService) { }

  ngOnInit(): void {
    this.productService.getProductById(this.router.snapshot.params['id']).subscribe((res) => {

      this.product = res as Product
    },(err)=>{
      this.route.navigate(['./Dashboard']);
    })

    //kullanıcı girişi varsa currentUser a eşitler yoksa giriş ekranına yönlendirir.
    if (this.userService.isLogIn()) {
      this.currentUser = this.userService.getLocalStorage();
    } else {
      this.route.navigate(['./SignIn'])
    }
  }

  addToCard() {
    let tmp = {
      title: this.product.title,
      price: this.product.price,
      quantity: 1,
      id: this.product.id
    }
    this.cardService.addToCard(tmp);
    this.showMessage = true;
    this.messageTimer();
  }

  messageTimer() {
    setTimeout(() => {
      this.showMessage = false;
    }, 1000);
  }

}
