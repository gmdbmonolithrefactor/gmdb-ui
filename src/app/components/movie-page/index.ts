import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'movie-page',
  templateUrl: './index.html',
  styleUrls: ['./styles.css']
})
export class MoviePageComponent implements OnInit {
  /**
   * Movie Page displays all details and comments for a movie.
   */
  movie: Movie;

  constructor() { }

  ngOnInit() {
    this.movie = window.history.state;
  }

}
