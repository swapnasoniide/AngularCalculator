import {Component, OnInit} from '@angular/core';
// This component is to perform arithematic operations
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {


  operation: string[] = ['', '', ''];
  display = '';
  activeBuildingNumber = '';

  CalculatorComponent() {
  }

  // method to build user entered operands and operator
  buildNumber(num: string): void {
    this.activeBuildingNumber += num;
    // if operator is defined, set second variable
    if (this.operation[1].length) {
      this.operation[2] = this.activeBuildingNumber;
    } else {
      this.operation[0] = this.activeBuildingNumber;
    }

    this.renderDisplay();

  }

  // render display
  renderDisplay(): void {
    this.display = this.operation.join(' ');
  }

  // select operator if not then display error
  selectOperator(operator: string): void {
    if (!this.operation[0].length) {
      this.display = 'Enter number before operation';
      return;
    }
    this.operation[1] = operator;
    this.activeBuildingNumber = '';
    this.renderDisplay();
  }

  // display the result
  showResult(): void {
    if (this.confirmInputs()) {
      const val = this.calculateResult();

      this.display = '' + val;

      this.resetOperation();
    }
  }

  // clear previous operands and operator
  resetOperation(): void {
    this.operation = ['', '', ''];
    this.activeBuildingNumber = '';
  }

  // display error
  displayError(): void {
    this.display = 'Error!';
  }

  // validate input
  confirmInputs(): boolean {
    if (!this.operation[0].length) {
      // this.displayError();
      this.display = 'Enter First Number';
      return false;
    } else if (!this.operation[1].length) {
      // this.displayError();
      this.display = 'Enter Operator';
      return false;
    } else if (!this.operation[2].length) {
      // this.displayError();
      this.display = 'Enter Second Number';
      return false;
    }
    return true;
  }

  // calculate result by performing operation on operands
  calculateResult(): number {
    switch (this.operation[1]) {
      case '*':
        return parseFloat(this.operation[0]) * parseFloat(this.operation[2]);
      case '+':
        return parseFloat(this.operation[0]) + parseFloat(this.operation[2]);
      case '-':
        return parseFloat(this.operation[0]) - parseFloat(this.operation[2]);
      case '/':
        return parseFloat(this.operation[0]) / parseFloat(this.operation[2]);
    }
  }

  // reset display
  clear(): void {
    this.resetOperation();
    this.display = '';
  }

}
