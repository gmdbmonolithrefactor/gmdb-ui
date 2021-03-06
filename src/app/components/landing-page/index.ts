import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { fadeInAnimation } from '../../animations/fade-in';

@Component({
  selector: 'landing-page',
  templateUrl: './index.html',
  styleUrls: ['./styles.css'],
  animations: [fadeInAnimation]
})
export class LandingPageComponent implements OnInit {
  // TODO: create a selection of popular movies for carousel?
  popularMovies: Movie[];

  constructor() { }

  ngOnInit() {
  }

}
