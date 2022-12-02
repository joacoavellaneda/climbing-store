import { NgModule } from "@angular/core";
import { Routes, RouterModule} from '@angular/router';
import { ClimbingAboutComponent } from "./climbing-about/climbing-about.component";
import { ClimbingproductsComponent } from "./climbing-products/climbing-products.component";



const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'

  },
  {
    path: 'products',
    component: ClimbingproductsComponent

  },
  {
    path: 'about',
    component: ClimbingAboutComponent

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule{

}
