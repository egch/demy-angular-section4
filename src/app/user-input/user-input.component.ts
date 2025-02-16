import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  //TS inferring the data
  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredDuration = signal('10');
  enteredExpectedReturn = signal('5');

  constructor(private investmentService: InvestmentService){}

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
       //+ is to convert string into number
       initialInvestment: +this.enteredInitialInvestment(),
       duration: +this.enteredDuration(),
       expectedReturn: +this.enteredExpectedReturn(),
       annualInvestment: +this.enteredAnnualInvestment()

    });
    //reset the form
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredDuration.set('10');
    this.enteredExpectedReturn.set('5');
  }
}
