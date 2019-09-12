import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { fadeInAnimation } from '../../animations/fade-in';

@Component({
  selector: 'search',
  templateUrl: './index.html',
  styleUrls: ['./styles.css'],
  animations: [fadeInAnimation]
})
export class SearchComponent implements OnInit {
  // style for search button
  searchClass = 'dark';
  searchQuery;
  results = [];

  constructor(private movieService: MovieService, private route: ActivatedRoute) {}

  ngOnInit() {
    // fetch url query params (eg. /search?q=data)
    this.route.queryParams
      .subscribe(params => this.searchQuery = params.q);
    // fetch search results
    this.movieService.search(this.searchQuery).subscribe((data) => {
      console.log(data);
      this.results = data;
    });
  }
}
