import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient,HttpHeaders }from '@angular/common/http';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
})
export class RegistrationComponent {
myForm:FormGroup;

constructor(private fb: FormBuilder,private http:HttpClient)
{
  this.myForm=this.fb.group({
    name:['',Validators.required],
    password:['',Validators.required],

   
  });
}


onSubmit() {
  if (this.myForm.valid) {
    const formData = this.myForm.value;

    // Add user credentials
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('admin:admin'),
      'Content-Type': 'application/json',
    });

    // Send data to CouchDB with headers
    this.http.post('http://localhost:5984/demo', formData, { headers })
      .subscribe(
        response => {
          console.log('Data stored successfully:', response);
        },
        error => {
          console.error('Error storing data:', error);
        }
      );
  }
}


}