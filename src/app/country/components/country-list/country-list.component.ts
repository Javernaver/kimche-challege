import { Component, Input, OnInit } from '@angular/core';

import { Country } from '../../models/country.model';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  @Input()
  countries: Country[] | null = []

  constructor(
    
  ) { 

    
  }

  ngOnInit(): void {
  }

}
