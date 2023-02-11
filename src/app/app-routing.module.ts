import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuditsComponent } from './components/audits/audits.component';


const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:"audits"
  },
  {
    path:"audits",
    component: AuditsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
