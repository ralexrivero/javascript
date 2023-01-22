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
