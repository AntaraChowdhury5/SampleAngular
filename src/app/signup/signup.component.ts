import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signUpUsers: any[] = [];
  signUpForm: any = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
 
  constructor() { }
  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if (localData != null) {
      this.signUpUsers = JSON.parse(localData);
    }
  }
  signUpUser(value:any) {
    console.log()
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
}
