import { Component } from '@angular/core';
import { productCartService } from '../product-cart.service';
import { Product } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class productListComponent {
 products: Product []=[
  {
    img: "assets/img/petzl_boreo_rojo.jpeg",
    name: "Petz Boreo",
    category: "Casco",
    brand: "Petz",
    price: 24000,
    color: "rojo",
    stock: 5,
    clearance: false,
    quantity: 0,


},
{
  img: "assets/img/edelrid_zodiac.jpg",
  name: "Edelrid Zodiac",
  category: "Casco",
  brand: "Edelrid",
  price: 1900,
  color: "blanco",
  stock: 0,
  clearance: false,
  quantity: 0,



},
{
  img: "assets/img/black_diamond.jpg",
  name: "Black Diamond Vision",
  category: "Casco",
  brand: "Black Diamond",
  price: 44000,
  color: "negro y azul",
  stock: 7,
  clearance: true,
  quantity: 0,

},
{
  img: "assets/img/corax-azul.jpeg",
  name: "Petzl CORAX 2021",
  category: "Arneses",
  brand: "Petzl",
  price: 29650,
  color: " azul",
  stock: 10,
  clearance: false,
  quantity: 0,

},
{
  img: "assets/img/selena.jpeg",
  name: "Petzl SELENA 2021 (mujer)",
  category: "Arneses",
  brand: "Petzl",
  price: 34500,
  color: "rosa",
  stock: 3,
  clearance: false,
  quantity: 0,

},
{
  img: "assets/img/arnes_black_diamond.jpg",
  name: "Black Diamond Solution (hombre)",
  category: "Arneses",
  brand: "Black Diamond",
  price: 37500,
  color: "negro",
  stock: 0,
  clearance: true,
  quantity: 0,

},
{
  img: "assets/img/la_sportiva_tarantula.jpg",
  name: "La Sportiva Tarantula velcro",
  category: "Zapatillas",
  brand: "La Sportiva",
  price: 31100,
  color: "verde",
  stock: 10,
  clearance: false,
  quantity: 0,

},
{
  img: "assets/img/teknia-naranja.jpg",
  name: "TEKNIA",
  category: "Zapatillas",
  brand: "TEKNIA",
  price: 22000,
  color: "naranja",
  stock: 0,
  clearance: false,
  quantity: 0,

},
{
  img: "assets/img/la_sportiva_tarantulace_dama.jpg",
  name: "Tarantulace Dama",
  category: "Zapatillas",
  brand: "La Sportiva",
  price: 31000,
  color: "fucsia",
  stock: 7,
  clearance: true,
  quantity: 0,

},

 ];

constructor(private cart: productCartService){}

addToCart(product: Product):void{

  this.cart.addToCart(product);

  product.stock -= product.quantity;// descuenta del stock eso que ya vendiste
  product.quantity = 0;
}
maxReached(m: string){
  alert(m);
}




}
