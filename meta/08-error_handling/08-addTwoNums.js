#!/usr/bin/env node

function addTwoNums(x, y) {
  try {
    if (typeof(x) != 'number' || typeof(y) != 'number') {
      throw new ReferenceError('All the values must be numbers!');
    } else {
      return x + y;
    }
  } catch (err) {
    console.log('Error:', err);
  }
}

const a = addTwoNums(1, 2);
console.log(a);

const b = addTwoNums('5', 5);
console.log(b);

const c = addTwoNums(33, 'b');
console.log(c);
