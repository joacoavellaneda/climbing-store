import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { productCartService } from '../product-cart.service';
import { Product } from '../product-list/product';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {



cartList$: Observable<Product[]>  | undefined;


  constructor(private cart: productCartService){
    this.cartList$ = cart.cartList.asObservable();




  }

  ngOnInit(): void {
  }
  deleteToCart (product: Product): void {
    this.cart.deleteProductoToCart(product);
  }


}
