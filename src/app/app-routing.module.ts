import { RouterModule, Routes } from '@angular/router';

import { ByContinentComponent } from './country/screens/by-continent/by-continent.component';
import { ByLenguageComponent } from './country/screens/by-lenguage/by-lenguage.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: '', redirectTo: '/' , pathMatch: 'full'},
  {
    path: '', component: ByContinentComponent
  },
  {
    path: 'lenguage', component: ByLenguageComponent
  },
  {path: '**', redirectTo: '/'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
