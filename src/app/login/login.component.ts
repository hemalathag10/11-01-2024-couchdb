import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  myForms: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.myForms = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    if (this.myForms.valid) {
      const credentials = this.myForms.value;

      // Send user credentials to a login endpoint on the server
      const headers = new HttpHeaders({
        'Authorization': 'Basic ' + btoa('admin:admin'),

        'Content-Type': 'application/json'
      });

      this.http.post('http://localhost:5984/demo', credentials, { headers })
        .subscribe(
          (response: any) => {
            console.log('Login successful:', response);
            // Handle success (store authentication token, redirect, etc.)
          },
          error => {
            console.error('Login failed:', error);
            // Handle failure (show error message, redirect, etc.)
          }
        );
    }
  }
}
