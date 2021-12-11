#!/usr/bin/env node

var randNum;

randNum= Math.random();
console.log(randNum);

// random int, greater

randNum = Math.floor(Math.random() * 10);

console.log(randNum);
// rand int, minor

randNum = Math.ceil(Math.random() * 10);
console.log(randNum);

// rand int, round

randNum = Math.round(Math.random() * 10)
console.log(randNum);
