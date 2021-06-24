import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  reactiveForm: any =  FormGroup ;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 

  constructor(private router :Router) { }

  ngOnInit(): void {

    this.reactiveForm  = new FormGroup({
      'fname' : new FormControl('', Validators.required),
      'lname' : new FormControl('', Validators.required),
      'email' : new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      'phone' : new FormControl('', [
        Validators.required,
        Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'school' : new FormControl(null, [Validators.required, Validators.minLength(10)])
    });
  }

  OnSubmit() {
    this.reactiveForm.reset();
    this.router.navigate(['studentdetails'])
  }

  get fname() {
    return this.reactiveForm.get('fname');
  }
  get lname() {
    return this.reactiveForm.get('lname');
  }
  get email() {
    return this.reactiveForm.get('email');
  }
  get phone() {
    return this.reactiveForm.get('phone');
  }
  get school() {
    return this.reactiveForm.get('school');
  }


}
