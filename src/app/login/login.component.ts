import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  signUpUsers: any[] = [];
  signUpForm:any = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  logInForm:any={
    email:'',
    password:''
  }
  constructor() { }

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if (localData != null) {
      this.signUpUsers = JSON.parse(localData);
    }
  }
  signUpUser(value: any) {
    console.log(value)
    this.signUpUsers.push(this.signUpForm);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signUpUsers));
    this.signUpForm = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }
  logInUser(value: any) {
    console.log(value)
    const isUserExist = this.signUpUsers.find(m => m.email == this.logInForm.email && m.password == this.logInForm.password);
    if (isUserExist) {
      alert("User Login Successfully....")
    }
    else {
      alert("Wrong Credential!")
    }
  }
}
