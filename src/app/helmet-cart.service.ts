import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Helmet } from './helmet-list/helmet';



 //maneja la logica del carrito
 //observable, contiene los datos


@Injectable({
  providedIn: 'root'
})

export class HelmetCartService {

  private _cartList: Helmet [] = [];
  cartList: BehaviorSubject<Helmet[]> = new BehaviorSubject<Helmet[]>([]);



  constructor() { }

  addToCart(helmet: Helmet) {
    let item: Helmet = this._cartList.find((v1)=> v1.name == helmet.name)!;//va a buscar alguno de la lista que tenga el mismo nombre
    if(!item){
      this._cartList.push({...helmet});//clona el objeto cuando no lo encuentra

    }else{
      item.quantity += helmet.quantity;
    }

    console.log(this._cartList);
    this.cartList.next(this._cartList);// equivale al emitt de eventos

  }


}
