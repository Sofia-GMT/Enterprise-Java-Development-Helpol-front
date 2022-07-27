import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Primers } from 'src/app/models/primers.model';
import { PrimersService } from 'src/app/services/primers.service';

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

  
  constructor(
    private primersService: PrimersService
  ) {
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
    const primers: Primers = this.registerForm.value;
    this.primersService.saveNewPair(primers).subscribe();
  }

}
