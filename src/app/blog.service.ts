// src/app/blog.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = 'http://localhost:5984/demo';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addPost(post: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, post);
  }
  // Update your BlogService with this method

getPostsByDate(date: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${date}`);
  }
  
}
