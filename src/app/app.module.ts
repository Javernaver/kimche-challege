import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { GraphqlModule } from './core/graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ScreensModule } from './screens/screens.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphqlModule,
    FormsModule,
    ScreensModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
