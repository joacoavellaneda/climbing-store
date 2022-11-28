import { Component } from '@angular/core';
import { helmet } from './helmet';

@Component({
  selector: 'app-helmet-list',
  templateUrl: './helmet-list.component.html',
  styleUrls: ['./helmet-list.component.scss']
})
export class HelmetListComponent {
 helmets: helmet []=[
  {
    img: "assets/img/petzl_boreo_rojo.jpeg",
    name: "Casco Petz Boreo",
    brand: "Petz",
    price: 24000,
    color: "rojo",
    stock: 5,
    clearance: false,
    quantity:0,

},
{
  img: "assets/img/petzl_boreo_rojo.jpeg",
  name: "Casco Edelrid Zodiac",
  brand: "Edelrid",
  price: 1900,
  color: "blanco",
  stock: 0,
  clearance: false,
  quantity:0,


},
{
  img: "assets/img/petzl_boreo_rojo.jpeg",
  name: "Black Diamond Vision",
  brand: "Black Diamond",
  price: 44000,
  color: "negro y azul",
  stock: 7,
  clearance: true,
  quantity:0,


}
 ]
}
