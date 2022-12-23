#!/usr/bin/env node

/*
  destructuring is a way to extract values from objects and arrays and bind them to variables
*/

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 42
};

const { firstName, lastName, age } = person;

console.log(firstName);
console.log(lastName);
console.log(age);

const shelve = ['Art', 'Biology', ['Science', 'Chemistry']];

const [one, two, [three, four]] = shelve;

console.log(shelve);
console.log(one);
console.log(two);
console.log(three);
console.log(four);

const example = {
  colors: ['gray', 'white', 'purple'],
  size: 'small',
  price: 75
};

const { colors, size, price } = example;
console.log(colors);
console.log(size);
console.log(price);

const { colors: [color1, color2, color3], size: size1, price: price1 } = example;

console.log(color1);
console.log(color2);
console.log(color3);
console.log(size1);
console.log(price1);
