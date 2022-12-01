import { Component } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HelmetCartService } from '../helmet-cart.service';
import { Helmet } from '../helmet-list/helmet';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

cartList$: Observable<Helmet[]>;

  constructor(private cart: HelmetCartService){
    this.cartList$ = cart.cartList.asObservable();


  }
}
