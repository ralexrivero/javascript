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

function printArr (arr = []) {
  for (let x = 0; x < arr.length; x++) {
    console.log(`${x}: ${arr[x]}`);
  }
}

const myLanguages = ['Python', 'C', 'JavaScript', 'TypeScript', 'SQL', 'VBA'];

printArr(myLanguages);

function letterFinder (word, match) {
  let i = 0;
  for (const x in word) {
    if (word[x] === match) {
      return console.log(`letter : ${match} matches at index: ${i} in word: ${word}`);
    } else {
      i++;
    }
  }
}

letterFinder('Abracadabra', 'r');
letterFinder('Abracadabra', 'c');
