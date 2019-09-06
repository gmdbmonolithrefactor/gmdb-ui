import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search';
import { LoginComponent } from './components/login';
import { MovieListComponent } from './components/movie-list';
import { LandingPageComponent } from './components/landing-page';
import {MoviePageComponent} from './components/movie-page';

/**
 * ROUTING MODULE
 *
 * This module manages route configuration. The routes array below defines each
 * route. See the documentation to learn about all options available to you:
 * https://angular.io/guide/router#configuration
 */
const routes: Routes = [
  { component: LandingPageComponent, path: ''},
  { component: SearchComponent, path: 'search'},
  { component: LoginComponent, path: 'login'},
  { component: MovieListComponent, path: 'movies'},
  { component: MoviePageComponent, path: 'movies/:id'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
