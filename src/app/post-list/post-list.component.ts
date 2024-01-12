// src/app/post-list/post-list.component.ts

import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
})
export class PostListComponent implements OnInit {
  posts: any[] = [];
  selectedDate: string = '';

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  // Add this method to your PostListComponent

filterPostsByDate(date: string): void {
    this.blogService.getPostsByDate(date).subscribe(posts => {
      this.posts = posts;
    });
  }
  
}
