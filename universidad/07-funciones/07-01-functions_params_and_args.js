#!/usr/bin/env node

function subtract (a = 10, b = 8) {
  return `${a} - ${b} = ${a - b}`;
}

let res = 0;

res = subtract();
console.log(res);

res = subtract(150, 98);
console.log(res);

res = subtract(8);
console.log(res);

function addition (a, b, c) {
  return `${a} + ${b} + ${c} = ${a + b + c}`;
}

res = addition(1, 2, 3);
console.log(res);

res = addition(2, 7);
console.log(res);

function multiply () {
  return `${arguments[0]} * ${arguments[1]} = ${arguments[0] * arguments[1]}`;
}

res = multiply(13, 14);
console.log(res);
