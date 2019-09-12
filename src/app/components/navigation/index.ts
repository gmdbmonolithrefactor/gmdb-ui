import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './index.html',
  styleUrls: ['./styles.css']
})
export class NavigationComponent implements OnInit {
  loggedIn = false;
  searchClass = 'warning';
  searchQuery;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  /**
   * Search form handler
   * @event
   * @param query, search form data
   */
  handleQuery(query) {
    this.searchQuery = query;
    this.router.navigate(['search'], { queryParams: { q:  query } });
  }

}
