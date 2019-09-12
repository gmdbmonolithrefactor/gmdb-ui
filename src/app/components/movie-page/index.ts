import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { fadeInAnimation } from '../../animations/fade-in';

@Component({
  selector: 'movie-page',
  templateUrl: './index.html',
  styleUrls: ['./styles.css'],
  animations: [fadeInAnimation]
})
export class MoviePageComponent implements OnInit {
  /**
   * Movie Page displays all details and comments for a movie.
   */
  movie: Movie;

  constructor() { }

  ngOnInit() {
    // state comes from routerLink parameters on the template
    this.movie = window.history.state;
  }
}
