#!/usr/bin/env node

const person = {
  firstName: 'Ronald',
  age: 42,
  occupation: 'Software Engineer'
};

const { firstName, ...rest } = person;

console.log(`Name: ${firstName}`); // Output: "Ronald"
console.log(rest); // Output: {age: 42, occupation: "Software Engineer"}

const car1 = {
  speed: 200,
  color: 'orange'
};

const car2 = { ...car1 };
car1.speed = 201;
console.log(car1.speed, car2.speed);

const fruits1 = ['apples', 'pears'];
const fruits2 = [...fruits1];
fruits1.pop();
console.log(`${fruits1}\n${fruits2}`);
