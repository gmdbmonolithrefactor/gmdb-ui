import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  public movie;

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getMovie(this.route.snapshot.params.id);
  }

  getMovie(id: number){
    this.movieService.getOneMovie(id).subscribe(
      data => {
        this.movie = data;
      },
      error => throwError(error),
      () => console.log('movie loaded')
    );
  }

}
