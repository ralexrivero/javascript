#!/usr/bin/env node
/**
 * increment and decrement oprator
 */

let a = 0;

a++;
a++;
console.log(a);
++a;
console.log(a);
console.log('\n');

let b = 0;
let c = 0;
for (b = 0; b < 10; b++) {
    console.log(b);
}
console.log('final b: ', b, '\n');

for (c = 0; c < 10; ++c) {
    console.log(c);
}
console.log('final c:', c, '\n')