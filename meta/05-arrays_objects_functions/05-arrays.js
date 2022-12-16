#!/usr/bin/env node

/* arrays
    arrays are a special type of object
    used to store multiple values in a single variable
    arrays are written with square brackets
    items are separated by commas
    accessed by index number
    indexes start at 0
    indexes can be negative
    indexes can be used to change array values
    arrays can be nested
    arrays can be used to store objects
    arrays can be used to store functions
*/

// create an array

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

console.log(cars);

console.log(cars[1]);

// array methods

// add to the end of an array

cars.push('BMW');
console.log(cars);

// add to the front of an array

cars.unshift('Mazda');

console.log(cars);

// remove from the end of an array

cars.pop();

console.log(cars);

// remove from the front of an array

cars.shift();

console.log(cars);

// remove from a specific index

cars.splice(1, 1);

console.log(cars);

// reverse an array

cars.reverse();

console.log(cars);

// sort an array

cars.sort();

console.log(cars);

// sort an array in reverse

cars.sort().reverse();

console.log(cars);

// find the index of a value

console.log(cars.indexOf('Honda'));

// create an array of numbers

const numbers = [1, 2, 3, 4, 5];

// create a variable to hold the sum

let sum = 0;

// loop through the array

numbers.forEach((number) => {
  sum += number;
});

console.log(sum);
