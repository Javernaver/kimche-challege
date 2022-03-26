import { CommonModule } from '@angular/common';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FilterBarComponent
  ],
  exports: [
    FilterBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  
  ]
})
export class SharedModule { }
