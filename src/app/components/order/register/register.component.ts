import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { CustomValidator } from 'src/app/utils/custom-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup; 
  nameInput: FormControl;
  idInstitutionInput: FormControl;
  passwordInput: FormControl;
  passwordConfirmationInput: FormControl;
  
  
  constructor() {
    this.nameInput = new FormControl('', [Validators.required, CustomValidator.noDigits]);
    this.idInstitutionInput = new FormControl('', [Validators.required]);
    this.passwordInput = new FormControl('', [Validators.required, CustomValidator.minPasswordLength(6)]);
    this.passwordConfirmationInput = new FormControl('');


    this.registerForm = new FormGroup({
      name: this.nameInput,
      idInstitution: this.idInstitutionInput,
      password: this.passwordInput,
      passwordConfirmation: this.passwordConfirmationInput,
    }, CustomValidator.passwordMatch);
   }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('Form submitted');
    const user: User = this.registerForm.value;
    console.log(user);
  }

}
