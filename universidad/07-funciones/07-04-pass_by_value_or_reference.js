#!/usr/bin/env node

// primitive types only are passed by value

const x = 10;

function changeValue (num) {
  num += 10;
  console.log(num);
  return num;
}

changeValue(x);
console.log(`x value afeter pass to function: ${x}`);

// complex types are passed to functions as references

const person = {
  firstName: 'Ronald',
  secondName: 'Alexander'
};

function changeObject (obj) {
  obj.firstName = 'Rony';
  obj.secondName = 'Alex';
}

console.log(person);
changeObject(person);
console.log(person);
