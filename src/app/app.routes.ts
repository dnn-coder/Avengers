import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from "./components/about/about.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { SharedComponent } from "./components/shared/shared.component";
import { DannyComponent } from './components/danny/danny.component';

const APP_ROUTES:Routes=[
{path: 'home', component: HomeComponent },
{path: 'about', component: AboutComponent },
{path: 'heroes', component: HeroesComponent },
{path: 'shared', component: SharedComponent },
{path: 'danny', component: DannyComponent },
{path: 'danny', component: AboutComponent },
{path: '**', pathMatch: 'full',redirectTo:'home'},
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});
