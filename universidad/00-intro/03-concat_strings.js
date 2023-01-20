#!/usr/bin/env node

const firstName = 'Ronald';
const surname = 'Rivero';

// concat strings

const fullName = firstName + ' ' + surname;

console.log(fullName);

// concat string and number

const x = 'a';
const n = 7;

console.log(x + n);

// string context
// evaluation from left to right

console.log(2 + 4 + 'hello'); // add 2 and 4 = 6 as number then concats the result to the string
console.log('hello' + 2 + 4); // concat string, 2 and 4 as strings
console.log('hello' + (2 + 4)); // 2 and for as numbers
