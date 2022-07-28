import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-page',
  templateUrl: './calculator-page.component.html',
  styleUrls: ['./calculator-page.component.css']
})
export class CalculatorPageComponent implements OnInit {

  sequence: string;
  temperature: number;
  percentaje: number;
  sequenceArray: string[]

  constructor() {
    this.sequence="",
    this.temperature=0,
    this.percentaje=0,
    this.sequenceArray=[]
   }

  ngOnInit(): void {
  }

  calculateCG(){
    this.sequenceArray = Array.from(this.sequence.toUpperCase());
    let count = 0;
    for(let i = 0; i < this.sequenceArray.length; i++ ){
      if(this.sequenceArray[i] === "C" || this.sequenceArray[i] === "G"){
        count = count +1;
      }
    }
    this.percentaje = count/this.sequenceArray.length;
  }

  calculateTemperature() {
    this.sequenceArray = Array.from(this.sequence.toUpperCase());
    let countAT = 0;
    let countCG = 0;
    for(let i = 0; i < this.sequenceArray.length; i++ ){
      if(this.sequenceArray[i] === "A" || this.sequenceArray[i] === "T"){
        countAT = countAT +1;
      } else {
        countCG = countCG +1;
      }
    }
    this.temperature = (countCG*4 + countAT*2) - 5;
  }

  validSequence(): Boolean{
    let result = true;
    this.sequenceArray = Array.from(this.sequence.toUpperCase());
    for(let i = 0; i < this.sequenceArray.length; i++ ){
      console.log(this.sequenceArray)
      if(this.sequenceArray[i] != "C" && 
      this.sequenceArray[i] != "G" && 
      this.sequenceArray[i] != "T" && 
      this.sequenceArray[i] != "A"){
        result = false;
        break;
      }
    }
    return result;
  }

}
