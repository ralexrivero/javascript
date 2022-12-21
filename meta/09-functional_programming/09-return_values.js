#!/usr/bin/env node

console.log('hello'); // return undefined

function doubleIt (num) {
  return num * 2;
}

function objectMaker (val) {
  return {
    prop: val
  };
}

const x = objectMaker(doubleIt(100));

console.log(`type of ${JSON.stringify(x)} is ${typeof (x)}`);
