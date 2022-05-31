import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './components/angular-material.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RatingsBarModule } from './components/ratings-bar/ratings-bar.module';
import { HeaderModule } from './components/header/header.module';



@NgModule({
  declarations: [
    AppComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatToolbarModule,
    RatingsBarModule,
    HeaderModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
