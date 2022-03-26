import { ByContinentComponent } from './screens/by-continent/by-continent.component';
import { ByLenguageComponent } from './screens/by-lenguage/by-lenguage.component';
import { CommonModule } from '@angular/common';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../core/utils/material.module';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from '../core/utils/prime-ng.module';
import { RouterModule } from '@angular/router';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ByContinentComponent, 
    ByLenguageComponent, 
    SearchInputComponent, 
    CountryCardComponent, 
    CountryListComponent, 
  ],
  exports: [ 
    ByContinentComponent, 
    ByLenguageComponent, 
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    SharedModule,
    PrimeNgModule,
    FormsModule,
    FlexLayoutModule
  ]
})
export class CountryModule { }
