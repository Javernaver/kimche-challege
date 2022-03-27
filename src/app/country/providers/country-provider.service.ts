import { Apollo, gql } from 'apollo-angular';
import { Continent, Country, Language } from '../models/country.model';
import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';

const allCountriesGQL = gql`
  query{
      countries {
        name
        native
        capital
        phone
        emoji
        currency
        languages {
          code
          name
          native
        }
      }
    }
`;

const allContinentsGQL = gql`
  query{
    continents{
      name
      countries {
        name
        code
        native
        phone
        capital
        currency
        emoji
        languages {
          name
          native
        }
        
      }
    }
  }
`;

const allLanguagesGQL = gql`
  query{
    languages{
      code
      name
      native
    }
  }
`

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
      

    });
    
    return of(countries)
  }


  public getAllContinents(): Observable<Continent[]> {

    let continents: Continent[] = [];

    this.apollo.watchQuery<any>({

      query: allContinentsGQL

    }).valueChanges
    .subscribe(({data, loading}) => {

      console.log(loading);

      data.continents.forEach((continent: Continent
        ) => {
        continents.push(continent)
      });
      
      //countries.push(data.countries);
      
    });
    // console.log(countries)
    return of(continents)
  }

 

  public searchCountryContinent(keyword: string): Observable<Continent[]> {

    let results: Continent[] = []


    this.apollo.watchQuery<any>({

      query: allContinentsGQL

    }).valueChanges
    .subscribe(({data, loading}) => {

      //console.log(loading);

      data.continents.forEach((continent: Continent
        ) => {

          let countries: Country[] = [];

          continent.countries.forEach( country => {
              if (country.name.toLowerCase().includes(keyword.toLowerCase()) || country.native.toLowerCase().includes(keyword.toLowerCase()) ){
                countries.push(country)
              }
          } );

          if (countries.length > 0) {

            let contin: Continent = {
              code: continent.code,
              name: continent.name,
              countries: countries
            };
  
            results.push(contin);
          }
      });
      
    });

    return of(results)
  }


  public searchCountryLanguage(keyword: string): Observable<Language[]> {

    if (!keyword) {
      return of([])
    }

    let results: Language[] = []


    this.apollo.watchQuery<any>({

      query: allLanguagesGQL

    }).valueChanges
    .subscribe(({data}) => { 
    
      

      data.languages.forEach((language: Language) => {

          let countries: Country[] = [];

          this.apollo.watchQuery<any>({

            query: allCountriesGQL
      
          }).valueChanges
          .subscribe(({data}) => {
      
            data.countries.forEach((country: Country) => {

              country.languages.forEach( lang => {
                    if (lang.name == language.name && (country.name.toLowerCase().includes(keyword.toLowerCase()) || country.native.toLowerCase().includes(keyword.toLowerCase()) )){
                      countries.push(country)
                    }
              });
      
                
            });

            if (countries.length > 0) {

              let langu: Language = {
                code: language.code,
                name: language.name,
                countries: countries,
                native: language.native
              };
      
              results.push(langu);
            }
        
          });
      
      });
      
    });
    
    return of(results)
  }

}
