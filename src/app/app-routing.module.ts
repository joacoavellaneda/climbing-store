import { NgModule } from "@angular/core";
import { Routes, RouterModule} from '@angular/router';
import { ClimbingAboutComponent } from "./climbing-about/climbing-about.component";
import { ClimbingHelmetsComponent } from "./climbing-helmets/climbing-helmets.component";



const routes: Routes = [
  {
    path: '',
    redirectTo: 'helmets',
    pathMatch: 'full'

  },
  {
    path: 'helmets',
    component: ClimbingHelmetsComponent

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
