import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelmetListComponent } from './helmet-list/helmet-list.component';
import { FormsModule } from '@angular/forms';
import { ClimbingAboutComponent } from './climbing-about/climbing-about.component';

import { CartComponent } from './cart/cart.component';
import { ClimbingHelmetsComponent } from './climbing-helmets/climbing-helmets.component';
import { AppRoutingModule } from './app-routing.module';
import { InputIntegerComponent } from './input-integer/input-integer.component';






@NgModule({
  declarations: [
    AppComponent,
    HelmetListComponent,
    ClimbingAboutComponent,

    CartComponent,
    ClimbingHelmetsComponent,
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
