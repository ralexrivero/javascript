#!/usr/bin/env node

function additionVariadic () {
  let total = 0;
  let numbers = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'number') {
      numbers++;
      total += arguments[i];
    }
  }
  return `Numbers passed: ${numbers}, total: ${total}`;
}

let res = additionVariadic(1, 3, 6, 9, 21);
console.log(res);

res = additionVariadic(1, 'a', 18, 45, 'x', '', 'n', 'string', [1, 2, 3], undefined, null, true, false);
console.log(res);
