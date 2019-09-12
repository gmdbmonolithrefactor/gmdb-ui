import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'breadcrumbs',
  templateUrl: './index.html',
  styleUrls: ['./styles.css']
})
export class BreadcrumbsComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  gotoPrevious() {
    this.location.back();
  }
}
