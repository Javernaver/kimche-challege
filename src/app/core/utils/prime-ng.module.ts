import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { NgModule } from '@angular/core';

@NgModule({
  exports: [
    CardModule,
    ButtonModule
  ]
})
export class PrimeNgModule { }
