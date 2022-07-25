#!/usr/bin/env node
/*
  Math
*/

/*
  Constants
*/

const myPi = Math.PI;
console.log(myPi);

console.log(Math.E); // Euler
console.log(Math.PI); // PI
console.log(Math.SQRT2); // square root of 2
console.log(Math.SQRT1_2); // square root of 1/2
console.log(Math.LN2); // natural logarithm of 2
console.log(Math.LN10); // natural logarithm of 10
console.log(Math.LOG2E); // base 2 logarithm of E
console.log(Math.LOG10E); // base 10 logarithm of E

/*
  methods
*/

const x = 7.314;

console.log(Math.round(x)); // nearest integer
console.log(Math.ceil(x)); // nearest up integer
console.log(Math.floor(x)); // nearest down integer
console.log(Math.trunc(x)); // integer part of x

/*
  sign: returns if negative, positive or null
*/

const y = 7;
const z = 0;
const w = -7;
console.log(`${y} is ${Math.sign(y)}\n${z} is ${Math.sign(z)}\n${w} is ${Math.sign(w)}`);

/*
  random
*/

const myRand1 = Math.random();
console.log(myRand1);

const myRandInt = Math.floor(Math.random() * 10); // combined to get integer random numbers from 0 to 9, * 11 to 0 to 10
console.log(myRandInt);
