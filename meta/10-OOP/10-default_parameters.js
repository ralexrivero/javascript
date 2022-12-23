#!/usr/bin/env node

/*
  default parameters
*/

class DefaultParameters {
  constructor (num1 = 1, num2 = 2, num3 = 3, string1 = 'Result', bool1 = true) {
    this.num1 = num1;
    this.num2 = num2;
    this.num3 = num3;
    this.string1 = string1;
    this.bool1 = bool1;
  }

  calculate () {
    if (this.bool1) {
      return console.log(this.string1, this.num1 + this.num2 + this.num3);
    }
    return console.log('The value of bool1 is incorrect');
  }
}

const useParams = new DefaultParameters();
useParams.calculate();

const userParams1 = new DefaultParameters(10, 20, 30, 'The result is', false);
userParams1.calculate();
userParams1.bool1 = true;
userParams1.calculate();
