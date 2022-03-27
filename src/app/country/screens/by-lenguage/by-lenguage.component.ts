import { Component, OnInit } from '@angular/core';
import { Continent, Language } from '../../models/country.model';

import { CountryProviderService } from '../../providers/country-provider.service';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-by-lenguage',
  templateUrl: './by-lenguage.component.html',
  styleUrls: ['./by-lenguage.component.css']
})
export class ByLenguageComponent implements OnInit {

  
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';

  
  
  languageCountries: Language[] = [];
  
  error: boolean = false;

  term: string = '';

  constructor(
    private countryP: CountryProviderService
  ) { 

    

  }


  search(keyword: string) {

    this.term = keyword;

    this.error = false;
    
    this.countryP.searchCountryLanguage(keyword).subscribe( continents => {
      
      this.languageCountries = continents;
      /* console.log(continents.length);
      (continents.length == 0) ? this.error = true : this.error = false; */

    });
    
    
  }

  ngOnInit(): void {
  }
}
