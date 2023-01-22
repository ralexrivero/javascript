#!/usr/bin/env node

function add (a, b) {
  return `Add ${a} + ${b} = ${a + b}`;
}

let res = add(15, 25);
console.log(res);

// first-class function (functions assigned to variables)

const square = function (a) {
  return `Square of ${a} is: ${a ** 2}`;
};

res = square(99);
console.log(res);

