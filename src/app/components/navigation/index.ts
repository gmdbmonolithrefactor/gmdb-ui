import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './index.html',
  styleUrls: ['./styles.css']
})
export class NavigationComponent implements OnInit {
  loggedIn = false;
  searchClass = 'warning';

  constructor() { }

  ngOnInit() {
  }

}
