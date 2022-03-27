import { Apollo, TypedDocumentNode, gql } from 'apollo-angular';
import { Continent, Country, Language } from '../models/country.model';
import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';

// GQL QUERIES


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
      code
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

  // realiza las queries a GraphQL con apollo
  public apolloQuery(query: TypedDocumentNode<unknown, unknown>) {

    return this.apollo.watchQuery<any>({

      query: query

    }).valueChanges

  }

  // obtiene todos los paises
  public getAllCountries(): Observable<Country[]> {

    let countries: Country[] = [];

    
    this.apolloQuery(allCountriesGQL)
    .subscribe(({data, loading}) => {

      console.log(loading);
      
      // añadir los paises a lista auxiliar para retornarla como observable
      data.countries.forEach((country: Country) => {
        countries.push(country)
      });
      

    });
    
    return of(countries)
  }

  // obtiene todos los continentes y sus paises
  public getAllContinents(): Observable<Continent[]> {

    let continents: Continent[] = [];

    this.apollo.watchQuery<any>({

      query: allContinentsGQL

    }).valueChanges
    .subscribe(({data, loading}) => {

      console.log(loading);

      data.continents.forEach((continent: Continent) => {

        // añadir los continentes a lista auxiliar para retornarla como observable
        continents.push(continent)
      });
      
      //countries.push(data.countries);
      
    });
    // console.log(countries)
    return of(continents)
  }

 
  // busca un pais o paises agrupando los contientes
  public searchCountryContinent(keyword: string = ''): Observable<Continent[]> {

    
    let results: Continent[] = []
 
    // obtener los continentes desde graphQL
    this.apolloQuery(allContinentsGQL)
    .subscribe(({data, loading}) => {

      //console.log(loading);
      // recorrer los contienentes
      data.continents.forEach((continent: Continent) => {

          let countries: Country[] = [];

          // recorrer los paises de los continentes para agregarlos a los resultados si coinciden
          continent.countries.forEach( country => {
              if (country.name.toLowerCase().includes(keyword.toLowerCase()) || country.native.toLowerCase().includes(keyword.toLowerCase()) ){
                countries.push(country)
              }
          } );

          // se se encontraron coincidencias crear objeto tipo continente y añadirlos a los resultados retornados com observable
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


  // buscar pais o paises agrupando por lenguaje
  public searchCountryLanguage(keyword: string = ''): Observable<Language[]> {

    if (!keyword) {
      return of([])
    }

    let results: Language[] = []

    // obtener los lenguajes desde graphQL
    this.apolloQuery(allLanguagesGQL)
    .subscribe(({data}) => { 
    
      // recorrer los lenguajes
      data.languages.forEach((language: Language) => {

          let countries: Country[] = [];
          
          // obtener los paises desde graphQL
          this.apolloQuery(allCountriesGQL)
          .subscribe(({data}) => {
            
            // recorrer los paises
            data.countries.forEach((country: Country) => {
              
              // recorrer los lenguajes de cada pais buscando coincidencias de el lenguaje actual y el pais buscado para agregar a lista de paises
              country.languages.forEach( lang => {
                    if (lang.name == language.name && (country.name.toLowerCase().includes(keyword.toLowerCase()) || country.native.toLowerCase().includes(keyword.toLowerCase()) )){
                      countries.push(country)
                    }
              });
      
                
            });

            // si se encontraron paises coincidentes crear objeto de lenguaje modificado con el listado de todos los paises coincidentes
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
    
    // retornar obsevable con los lenguajes y listado de paises coincidentes que hablen ese lenguaje
    return of(results)
  }

}
