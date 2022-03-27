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
  

  term: string = '';

  constructor(
    private countryP: CountryProviderService
  ) { 

    
  }


  search(keyword: string) {

    this.term = keyword;

    this.countryP.searchCountryLanguage(keyword).subscribe( lenguageCountries => {
      
      this.languageCountries = lenguageCountries;


    });
    
    
  }

  ngOnInit(): void {
  }
}
