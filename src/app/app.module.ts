import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CalculatorComponent } from './calculator/calculator.component';


@NgModule({
  declarations: [
    CalculatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CalculatorComponent]
})
export class AppModule { }
