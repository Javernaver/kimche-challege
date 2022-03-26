import { Component, OnInit } from '@angular/core';

import { Country } from '../../models/country.model';
import { CountryProviderService } from '../../providers/country-provider.service';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-by-continent',
  templateUrl: './by-continent.component.html',
  styleUrls: ['./by-continent.component.css']
})
export class ByContinentComponent implements OnInit {


  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';

  
  countries$ = this.countryP.getAllCountries();
  allCountries : Country[] = []
  
  constructor(
    private countryP: CountryProviderService
  ) { 
    
    

    this.countries$.subscribe( countries => {
      
      this.allCountries = countries
      
      
    })
  }

  ngOnInit(): void {

   
    console.log(this.allCountries, 'asdasdads') 
  }

}
