import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './product-list/product';



 //maneja la logica del carrito
 //observable, contiene los datos


@Injectable({
  providedIn: 'root'
})

export class productCartService {

  private _cartList: Product [] = [];
  cartList: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  @Output() product: EventEmitter<Product> = new EventEmitter();


  constructor() { }

  addToCart(product: Product) {
    let item: Product = this._cartList.find((v1)=> v1.name == product.name)!;//va a buscar alguno de la lista que tenga el mismo nombre
    if(!item){
      this._cartList.push({...product});//clona el objeto cuando no lo encuentra

    }else{
      item.quantity += product.quantity;
    }

    console.log(this._cartList);
    this.cartList.next(this._cartList);// equivale al emitt de eventos

  }
  deleteProductoToCart(product: any): void {
    this._cartList.splice(product);
    this.product.emit(product);
  }


}
