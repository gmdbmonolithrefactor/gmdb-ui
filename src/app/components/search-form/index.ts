import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'search-form',
  templateUrl: './index.html',
  styleUrls: ['./styles.css']
})
export class SearchFormComponent implements OnInit {
  @Input() customClass: string;
  @Input() customButtonType: string;

  constructor() { }

  ngOnInit() {
  }

}
