import { RouterModule, Routes } from '@angular/router';

import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: '', redirectTo: '/' , pathMatch: 'full'},
  {
    path: '', component: HomeScreenComponent
  },
  {path: '**', redirectTo: '/'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
