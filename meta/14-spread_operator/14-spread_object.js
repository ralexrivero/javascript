#!/usr/bin/env node

const person = {
  firstName: 'Ronald',
  age: 42,
  occupation: 'Software Engineer'
};

const { firstName, ...rest } = person;

console.log(`Name: ${firstName}`); // Output: "Ronald"
console.log(rest); // Output: {age: 42, occupation: "Software Engineer"}
