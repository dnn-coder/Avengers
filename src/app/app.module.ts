import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// routes

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { SharedComponent } from './components/shared/shared.component';
import { DannyComponent } from './components/danny/danny.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { APP_ROUTING } from './app.routes';
import { FooterComponent } from './components/footer/footer.component';
import { PrincipalComponent } from './components/danny/principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    SharedComponent,
    DannyComponent,
    NavbarComponent,
    FooterComponent,
    PrincipalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
