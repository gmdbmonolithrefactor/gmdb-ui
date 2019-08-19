import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';

const routes: Routes = [
  {
    path: 'movie/details/:id',
    component: MovieDetailsComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
