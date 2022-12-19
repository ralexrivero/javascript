#!/usr/bin/env node

// let a = 1;
// let b = 2;

try {
  console.log(a + b);
} catch (err) {
  console.log(err);
  console.log('There was an error');
  console.log('The error was saved in the error log');
}

console.log('The program does not stop');
