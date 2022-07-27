import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { LoginUserService } from 'src/app/services/login-user.service';
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
  
  
  constructor(
    private userService: LoginUserService
  ) {
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
    let user: User = this.registerForm.value;
    user.status = "PENDING";
    this.userService.saveNewUser(user).subscribe();
  }

}
