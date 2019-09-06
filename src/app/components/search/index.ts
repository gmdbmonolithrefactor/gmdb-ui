import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'search',
  templateUrl: './index.html',
  styleUrls: ['./styles.css']
})
export class SearchComponent implements OnInit {
  // style for search button
  searchClass = 'dark';
  searchQuery;
  results = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.search(this.searchQuery).subscribe((data) => {
      console.log(data);
      this.results = data;
    });
  }

  getResults(query) {
    this.searchQuery = query;
    console.log('QUERY', this.searchQuery);
  }

}
