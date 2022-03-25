import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  exports: [
    MatToolbarModule,
    MatIconModule
  ],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
