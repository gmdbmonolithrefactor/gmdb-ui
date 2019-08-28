import { Component, OnInit } from '@angular/core';
import { Comment } from '../../models/comment';

@Component({
  selector: 'comment-list',
  templateUrl: './index.html',
  styleUrls: ['./styles.css']
})
export class CommentListComponent implements OnInit {
  comments: Comment[];

  // TODO: Connect to comment service
  constructor() { }

  ngOnInit() {
  }

}
