#!/usr/bin/env node

/*
  OOP
*/

let purchase1 = {};

purchase1 = {
  price: 100,
  stateTax: 1.2,
  totalPrice: function () {
    const total = this.price * this.stateTax;
    console.log(total);
  }
};

purchase1.totalPrice();
