#!/usr/bin/env node
// variables

let usrName = 'John';
let age = 30;

console.log(usrName);
console.log('var type ' + typeof(usrName));

// casting

let ageStr = age.toString();
console.log('var type ' + typeof(ageStr));

let ageNum = Number(ageStr)
console.log('var type ' + typeof(ageNum));

ageStr = '30.9';
console.log('var type ' + typeof(ageStr));

ageNum = Number(ageStr);
console.log('var type ' + ageNum + ' ' + typeof(ageNum));

ageNum = parseInt(ageStr);
console.log('var type ' + ageNum + ' ' + typeof(ageNum));

let numFlt = parseFloat(ageStr);
console.log('var type ' + numFlt + ' ' + typeof(numFlt));
