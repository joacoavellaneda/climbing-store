import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { productListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { ClimbingAboutComponent } from './climbing-about/climbing-about.component';

import { CartComponent } from './cart/cart.component';
import { ClimbingproductsComponent } from './climbing-products/climbing-products.component';
import { AppRoutingModule } from './app-routing.module';
import { InputIntegerComponent } from './input-integer/input-integer.component';






@NgModule({
  declarations: [
    AppComponent,
    productListComponent,
    ClimbingAboutComponent,

    CartComponent,
    ClimbingproductsComponent,
    InputIntegerComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
