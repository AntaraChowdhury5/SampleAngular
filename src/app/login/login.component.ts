import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  signUpUsers: any[] = [];
  
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
 
  // logInUser(value: any) {
  //   console.log(value)
  //   const isUserExist = this.signUpUsers.find(m => m.email == this.logInForm.email && m.password == this.logInForm.password);
  //   if (isUserExist) {
  //     alert("User Login Successfully....")
  //   }
  //   else {
  //     alert("Wrong Credential!")
  //   }
  // }
  logInUser(value: any) {
  //this.isSubmitClicked = true;

    if(this.logInForm.invalid){

      return;

    }

    const signInEmail = this.logInForm.get('email')?.value;

    const signInPassword = this.logInForm.get('password')?.value;

    const storedEmail = localStorage.getItem('email');

    const storedPassword = localStorage.getItem('password')

    if (signInEmail === storedEmail && signInPassword === storedPassword) {

     console.log("Authentication sucesss")

    } else {

      this.logInForm.controls['password'].setErrors({ incorrectCredentials: true });

      console.log('Authentication failed');

    }

}
}
