#!/usr/bin/env node

function arrAdd (arr) {
  let total = 0;
  arr.forEach((number) => {
    total += number;
  });

  return total;
}

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arrAdd(myNums));
