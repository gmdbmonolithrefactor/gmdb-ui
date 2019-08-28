import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../../models/comment';

@Component({
  selector: 'comment-detail',
  templateUrl: './index.html',
  styleUrls: ['./styles.css']
})
export class CommentDetailComponent implements OnInit {
  @Input() comment: Comment;

  constructor() { }

  ngOnInit() {
  }

}
