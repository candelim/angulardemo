import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


import { RouterModule, Routes } from '@angular/router';
import { CoordinatesComponent } from './coordinates/coordinates.component';



const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'coordinates', component: CoordinatesComponent },
];
  

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoordinatesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
