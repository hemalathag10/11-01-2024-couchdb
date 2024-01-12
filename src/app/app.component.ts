import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Welcome to the Angular CouchDB Blog</h1>
      <app-add-post></app-add-post>
      <app-post-list></app-post-list>
    </div>
  `,
  styles: []
})
export class AppComponent {
}
