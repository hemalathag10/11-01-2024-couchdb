// src/app/add-post/add-post.component.ts

import { Component } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
})
export class AddPostComponent {
  newPost: any = {};

  constructor(private blogService: BlogService) {}

  addPost(): void {
    this.blogService.addPost(this.newPost).subscribe(response => {
      console.log(`New post added with ID: ${response.id}`);
      // You can handle UI updates or navigation here
    });
  }
}
