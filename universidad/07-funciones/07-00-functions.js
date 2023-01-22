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

const nums = [2, 4, 6, 8, 10, 100];
const double = nums.map(function (num) {
  return num * 2;
});

console.log(double);

// self invoking functions, can't be reutilized

(function () {
  console.log('Self invoking function');
})();

(function (a, b) {
  console.log(`${a} * ${b} = ${a * b}`);
})(8, 12);
