#!/usr/bin/env node

/*
  If statements are used to execute code if a condition is true.
*/

const result = 50;
if (result > 45) {
  console.log('You passed the test!');
} else {
  console.log("You failed the test! Don't worry, you can try again.");
}

const food = 'hot';

if (food === 'hot') {
  console.log('The food is hot!');
} else if (food === 'cold') {
  console.log('The food is cold!');
} else {
  console.log('The food is neither hot nor cold!');
}

const age = 65;
let message = '';

if (age >= 65) {
  message = 'You get your income from your pension';
} else if (age >= 18) {
  message = 'Each month you get a salary';
} else if (age < 18) {
  message = 'You get an allowance';
} else {
  message = 'The value of your age is not numerical';
}

console.log(message);
