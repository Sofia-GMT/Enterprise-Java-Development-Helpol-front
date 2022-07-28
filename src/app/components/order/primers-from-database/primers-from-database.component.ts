import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Order } from 'src/app/models/order.model';
import { Primers } from 'src/app/models/primers.model';
import { CrudService } from 'src/app/services/crud.service';
import { PrimersService } from 'src/app/services/primers.service';

@Component({
  selector: 'app-primers-from-database',
  templateUrl: './primers-from-database.component.html',
  styleUrls: ['./primers-from-database.component.css']
})
export class PrimersFromDatabaseComponent implements OnInit {


  primersList: Primers[]

  registerForm: FormGroup;
  primersIdInput: FormControl;
  concentrationInput: FormControl;

  @Input()
  userId: number;

  
  
  constructor(
    private primerService: PrimersService,
    private crudService: CrudService

  ) {
    
    this.primersList = [];
    this.userId=0;



    this.primersIdInput = new FormControl('', Validators.required);
    this.concentrationInput = new FormControl(''); // la concentración es opcional


    this.registerForm = new FormGroup({
      primersId: this.primersIdInput,
      concentration: this.concentrationInput
    });
  }

  ngOnInit(): void {
    this.primerService.getAllPrimers().subscribe(
      dataResult => { 
        this.primersList=dataResult;
        console.log(this.primersList);
      }
    )
  }

  onSubmit(){
    const order: Order = this.registerForm.value;
    order.userId = this.userId;
    console.log(order);
    this.crudService.createOrder(this.userId, order).subscribe();
  }





}
