import { Component} from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page /*implements OnInit*/ 
{
  display = 0;
  memory = 0;
  state = 'number';
  operator = '+';
  decimal = false;
  decimals = 0;
  n1: number;
  n2: number;

  Number(n: number)
  {
    switch (this.state) {
      case 'number':
        if (this.decimal) {
          this.decimals++;
          this.display = this.display + n * Math.pow(10, -this.decimals);
        } else {
          this.display = this.display * 10 + n;
        }
        break;

      case 'operator':
        this.display = n;
        this.state = 'number';
        break;
      
      case 'result':
        this.memory = 0;
        this.display = n;
        this.state = 'number';
        break;
    }
  
  }

  calculate()
  {
    this.display = eval('' + this.memory + '(' + this.display + ')');
    this.memory = 0;
    this.state = 'result';
    this.operator = '+';
    this.decimal = false;
    this.decimals = 0;
  }

  Operator(o: string)
  {
    this.calculate();
    this.operator = o;
    this.memory = this.display;
    this.state = 'operator';
    switch (this.operator) {
      case '+':
        
        break;

      case '-':
        
        break;

      case '*':
        
        break;

      case '/':
        
        break;
    
      default:
        break;
    }
  }

  resetLastNumber()
  {
    this.display = 0;
    this.state = 'number';
    this.decimal = false;
    this.decimals = 0;
  }

  changeSign()
  {
    this.display = this.display * -1;
  }

  setDecimal()
  {
    this.decimal = true;
  }

    result = "";
    constructor() { }
    ngOnInit() {
    }
    btnClicked(btn) {
        console.log('Tab1Page::clickNumber = ' + btn);
        if (btn == "C") {
            this.result = "";
        } else if (btn == "=") {
            this.result = eval(this.result);
        } else if (btn == "squareroot") {
            this.result = Math.sqrt(eval(this.result)) + "";
        } else if (btn == "square") {
            this.result = eval("(" + this.result + ") * ( " + this.result + ")");
        } else if (btn == "reciproc") {
            this.result = eval(1 + "/ (" + this.result + ")");
        } else {
            this.result += btn;
        }
    }


}
