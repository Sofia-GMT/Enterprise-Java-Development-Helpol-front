import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primers-from-database',
  templateUrl: './primers-from-database.component.html',
  styleUrls: ['./primers-from-database.component.css']
})
export class PrimersFromDatabaseComponent implements OnInit {

  registerForm: FormGroup; 
  nameInput: FormControl;
  forwardSequenceInput: FormControl;
  reverseSequenceInput: FormControl;

  
  
  constructor() { }

  ngOnInit(): void {
  }

}
