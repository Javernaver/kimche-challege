import { Component, OnInit } from '@angular/core';
import { Continent, Country } from '../../models/country.model';

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

  
  
  countriesContinent: Continent[] = [];
  
  error: boolean = false;

  term: string = '';

  constructor(
    private countryP: CountryProviderService
  ) { 

    this.countryP.searchCountryContinent(this.term).subscribe( continent => {
      
      this.countriesContinent = continent;

    })

  }


  search(keyword: string) {

    this.term = keyword;

    this.error = false;
    
    this.countryP.searchCountryContinent(keyword).subscribe( continents => {
      
      this.countriesContinent = continents;
      /* console.log(continents.length);
      (continents.length == 0) ? this.error = true : this.error = false; */

    });
    
    
  }

  ngOnInit(): void {

   
   
    
  }

}
