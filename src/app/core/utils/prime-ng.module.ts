import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import { NgModule } from '@angular/core';

@NgModule({
  exports: [
    CardModule,
    ButtonModule,
    InputTextModule
  ]
})
export class PrimeNgModule { }
