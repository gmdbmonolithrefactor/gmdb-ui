import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import {MovieService} from '../../services/movie.service';
import {throwError} from 'rxjs';

@Component({
  selector: 'movie',
  templateUrl: './index.html',
  styleUrls: ['./styles.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: Movie;

  constructor(private movieService: MovieService) { }

  ngOnInit() {}

  getMovie(id: number) {
    this.movieService.get(id).subscribe(
      data => { this.movie = data; },
      error => throwError(error),
      () => console.log('movie loaded')
    );
  }

}
