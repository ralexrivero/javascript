#!/usr/bin/env node
/*
  mix variables
*/

const a = 'Hello';
const b = 5;
const c = 15;

const d = b + c + a;

console.log(d);

const e = a + b + c;
console.log(e); // different order can produce different results when mixing strings and numbers
