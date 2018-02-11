import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it("should add two and three and get five as a result", () => {

    var component = new CalculatorComponent();
 
    component.buildNumber('2');
    component.selectOperator('+');
    component.buildNumber('3');
    
    var result = component.calculateResult()
    console.log(result); 
    // Assert
    expect(result).toBe(5);
});
  
    it("should substract seven and three and get four as a result", () => {

    var component = new CalculatorComponent();
 
    component.buildNumber('7');
    component.selectOperator('-');
    component.buildNumber('3');
    
    var result = component.calculateResult()
    console.log(result); 
    // Assert
    expect(result).toBe(4);
});
});
