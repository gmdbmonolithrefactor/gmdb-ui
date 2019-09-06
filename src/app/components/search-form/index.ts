import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'search-form',
  templateUrl: './index.html',
  styleUrls: ['./styles.css']
})
export class SearchFormComponent implements OnInit {
  // styling for buttons
  @Input() customClass: string;
  @Input() customButtonType: string;

  // search results
  @Output() query = new EventEmitter();
  searchForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      query: ['', Validators.required]
    });
  }

  handleQuery() {
    this.query.emit(this.searchForm.controls.query.value);
    this.router.navigate(['search']);
  }

}
