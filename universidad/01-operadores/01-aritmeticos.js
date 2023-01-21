#!/usr/bin/env node

/**
 * operators
 */

// asignment

const x = 1;
const y = 2;

// adition
const z = x + y;
console.log(z);

// subtraction

const a = 15 - 7;
console.log(a);

// multiplication
const b = z * y;
console.log(b);

// exponentiation
const c = 8 ** 2;
console.log(c);

// division
const d = 96 / 4;
console.log(d);

// modulus

const e = 97 % 3;
console.log(e);

// post increment
let f = 100;
let g = 0;

g = f++;
console.log(g);
console.log(f);

// pre increment
f = 100;
g = 0;

g = ++f;
console.log(g);
console.log(f);

// post decrement
let h = 50;
let i = 0;

i = h--;
console.log(i);
console.log(h);

h = 50;
i = 0;

i = --h;
console.log(i);
console.log(h);
