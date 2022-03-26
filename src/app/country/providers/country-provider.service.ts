import { Apollo, gql } from 'apollo-angular';
import { Observable, map, of, tap } from 'rxjs';

import { Country } from '../models/country.model';
import { Injectable } from '@angular/core';

const allCountriesGQL = gql`
  query{
      countries {
        name
        native
        capital
        phone
        emoji
        emojiU
        currency
        continent {
          code
          name
        }
        languages {
          code
          name
          native
        }
      }
    }
`;


@Injectable({
  providedIn: 'root'
})
export class CountryProviderService {
 

  constructor(
    private apollo: Apollo
  ) { 
  }


  public getAllCountries(): Observable<Country[]> {

    let countries: Country[] = [];

    this.apollo.watchQuery<any>({
      query: allCountriesGQL
    }).valueChanges
    .subscribe(({data, loading}) => {
      console.log(loading);
      data.countries.forEach((country: Country) => {
        countries.push(country)
      });
      
      //countries.push(data.countries);
      
    });
    // console.log(countries)
    return of(countries)
  }

  public searchCountry(keyword: string): Observable<Country[]> {

    let matches: Country[] = []

    this.getAllCountries()
    
    .subscribe( countries => {
      matches = countries.filter( country => {
        country.name.includes(keyword);
      } ) ;
    } )
    console.log(matches, '123213123')
    return this.getAllCountries().pipe(
      tap( countries => {
        return countries.filter( country => {
          country.name.includes(keyword);
        } ) ;
      }

      )
    )
  }

  
}
