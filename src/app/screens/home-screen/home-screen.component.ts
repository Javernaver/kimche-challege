import { Component, OnInit } from '@angular/core';

import { Country } from '../../core/models/country.model';
import { CountryProviderService } from 'src/app/core/providers/country-provider.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {


  allCountries : Country[] = []
  
  constructor(
    private countryP: CountryProviderService
  ) { 
    
    let countries = this.countryP.getAllCountries();

    countries.subscribe( countries => this.allCountries = countries );
    
  }

  ngOnInit(): void {
  }

}
