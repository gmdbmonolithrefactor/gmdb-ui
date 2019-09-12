import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'search-form',
  templateUrl: './index.html',
  styleUrls: ['./styles.css']
})
export class SearchFormComponent implements OnInit {
  // styling for buttons
  @Input() customClass: string;
  @Input() customButtonType: string;
  @Input() searchQueryInput;

  /* EMIT SEARCH EVENT.
   * When the search is submitted, this.handleQuery() will emit the form
   * value to parent component.
   * Review this template for example of child implementation.
   * Review navigation/index.html for example of parent implementation.
   */
  @Output() searchInput = new EventEmitter();
  searchForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      query: ['', Validators.required]
    });
  }

  /**
   * Search form Handler
   * @event
   * @desc emits search form data for parent components to receive.
   */
  handleQuery() {
    this.searchInput.emit(this.searchForm.controls.query.value);
  }

}
