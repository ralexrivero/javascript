#!/usr/bin/env node

const a = true;
const b = false;

console.log(typeof (a));

console.log(a && b);

console.log(a || b);

console.log(!a);

console.log(a == b);

console.log(a === b);

console.log(a != b);

console.log(a !== b);

console.log(a > b);

console.log(a < b);

console.log(a ^ b);
console.log(b ^ a);

console.log(1 > 2);

console.log(1 === 1);

const c = 10;
const d = 10;

console.log(c == d);
console.log(c === d);

const e = 'a';
const f = 'a';

console.log(e == f);
console.log(e === f);

console.log(c === 10);

const score = 8;
console.log('Mid-level skills: ' + (score > 0 && score < 10));

const timeRemaining = 0;
const energy = 10;
const isGameOver = (timeRemaining === 0 || energy === 0);
console.log('Game over: ', isGameOver);

let i;

for (i = 0; i < 10; i++) {
  const evenOrOdd = (i % 2 === 0) ? 'even' : 'odd';
  console.log(`i = ${i} and is ${evenOrOdd}`);
}
