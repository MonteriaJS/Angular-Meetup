import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routers } from './routers'


import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routers
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
