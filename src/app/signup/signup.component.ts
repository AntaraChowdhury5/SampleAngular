import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { CompareDirective } from '../compare.directive';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [CompareDirective]
})

export class SignupComponent {
  signupForm!: FormGroup;
  signUpUsers: any[] = [];
  isChk=false;
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.signupForm =this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    },
    { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(FormGroup: FormGroup) {
    const password = FormGroup.get('password');
    const confirmPassword = FormGroup.get('confirmPassword');
    console.log(password?.value,confirmPassword?.value);
    if (password?.value!== confirmPassword?.value) {
      confirmPassword?.setErrors({ passwordMismatch: true });
    } else {
     confirmPassword?.setErrors(null)
    }
  }

  submitForm() {
    //this.isSubmitClicked = true;

    if (this.signupForm.valid) {

      const signUpEmail = this.signupForm.get('email')?.value;

      const signUpPassword = this.signupForm.get('password')?.value;

      localStorage.setItem('email', signUpEmail);

      localStorage.setItem('password',signUpPassword);
    }
  }
  }