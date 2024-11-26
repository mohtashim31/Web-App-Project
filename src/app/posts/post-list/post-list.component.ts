import { Component } from '@angular/core';

interface Post {
  title: string;
  content: string;
  date: Date;
}

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  // Define the posts property here
  posts: Post[] = [
    { title: 'Post 1', content: 'Content of post 1', date: new Date() },
    { title: 'Post 2', content: 'Content of post 2', date: new Date() }
  ];
}
