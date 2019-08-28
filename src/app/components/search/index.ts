import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './index.html',
  styleUrls: ['./styles.css']
})
export class SearchComponent implements OnInit {
  searchClass = 'dark';

  constructor() { }

  ngOnInit() {
  }

}
