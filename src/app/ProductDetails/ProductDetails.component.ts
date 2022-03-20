import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../models/Product.model';
import { ProductService } from '../services/ProductService.service';
import { ShoppingCardService } from '../services/ShoppingCard.service';

@Component({
  selector: 'product-details-selector',
  templateUrl: './ProductDetails.component.html',
  styleUrls: ['./ProductDetails.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product!:Product;
  currentImage!:String;
  constructor(private productService:ProductService,private router:ActivatedRoute,private cardService:ShoppingCardService) { }

  ngOnInit(): void {
    this.productService.getProductById(this.router.snapshot.params['id']).subscribe((res)=>{
      
      this.product=res as Product
    })
  }

  addToCard(){
    this.cardService.addToCard(this.product);
  }

  
    

}
