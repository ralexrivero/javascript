#!/usr/bin/env node

/*
bitwise operators
 - & AND (both bits 1)
 - | OR (either bit 1)
 - ~ NOT (inverts all bits)
 - ^ XOR (one bit 1)
 - << LEFT SHIFT
 - >> RIGHT SHIFT
 - >>> UNSIGNED RIGHT SHIFT
*/

const a = 5;
const b = 6;

const c = a & b;
console.log(c);

const d = a | b;
console.log(d);

console.log(~a); // JavaScript uses 32 bit signed numbers

const e  = a ^ b;
console.log(e);
