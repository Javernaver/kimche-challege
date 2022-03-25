import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CountryModule } from './country/country.module';
import { FormsModule } from '@angular/forms';
import { GraphqlModule } from './core/graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './core/utils/material.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphqlModule,
    FormsModule,
    CountryModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
