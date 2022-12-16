#!/usr/bin/env node

/* for loop
  for loop is used to iterate over a block of code a number of times
  the syntax of for loop is:
  for (initialization; condition; increment/decrement) {
    // code block to be executed
  };
*/


for (let i = 10; i >= 0; i--) {
  console.log(i);
}

for (let i = 10; i >= 0; i--) {
  setTimeout(() => {
    console.log(i);
  }, 1000 *(10 - i));
}