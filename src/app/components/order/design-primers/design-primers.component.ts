import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Primers } from 'src/app/models/primers.model';

@Component({
  selector: 'app-design-primers',
  templateUrl: './design-primers.component.html',
  styleUrls: ['./design-primers.component.css']
})
export class DesignPrimersComponent implements OnInit {

  
  registerForm: FormGroup; 
  nameInput: FormControl;
  forwardSequenceInput: FormControl;
  reverseSequenceInput: FormControl;

  
  constructor() {
    this.nameInput = new FormControl('', Validators.required);
    this.forwardSequenceInput = new FormControl('', Validators.required);
    this.reverseSequenceInput = new FormControl('', Validators.required);


    this.registerForm = new FormGroup({
      name: this.nameInput,
      forwardSequence: this.forwardSequenceInput,
      reverseSequence: this.reverseSequenceInput 
    });
   }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('Form submitted');
    const primersOrder: Primers = this.registerForm.value;
    console.log(primersOrder);
  }

}
