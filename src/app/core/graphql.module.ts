import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache } from "@apollo/client/core";

import { HttpClientModule } from '@angular/common/http';
import { HttpLink } from "apollo-angular/http";
import { NgModule } from '@angular/core';
import { environment } from '../../environments/environment.prod';

const uri = environment.graphqlURL;

export const createApollo = (httpLink: HttpLink): ApolloClientOptions<any> => {

  return {
    link: httpLink.create({uri}),
    cache: new InMemoryCache()
  };
}

@NgModule({
  providers:[
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    }
  ],

  declarations: [],
  imports: [
    ApolloModule,
    

  ]
})
export class GraphqlModule { }
