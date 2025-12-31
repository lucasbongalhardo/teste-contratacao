import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParkAdministrationComponent } from './Components/park-administration.component';

const routes: Routes = [
  { path: '', component: ParkAdministrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
