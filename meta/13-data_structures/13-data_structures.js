#!/usr/bin/env node

console.log('------------------arrays-------------------');

const fruits = ['kiwi', 'mango', 'apple', 'pear'];

function appendIndex (fruit, index) {
  console.log(`${index}. ${fruit}`);
}

fruits.forEach(appendIndex);

console.log('');

const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach(function (veggie, index) {
  console.log(`${index}. ${veggie}`);
});

const nums = [0, 10, 20, 30, 40, 50];

const greaterThan20 = nums.filter(function (num) {
  return num > 20 && num < 50;
});

console.log(greaterThan20);

const nums2 = [1, 2, 3, 4, 5];
const evenNumbers = nums2.filter(number => number % 2 === 0);
console.log(evenNumbers);

const oddNumbers = nums2.filter(number => number % 2 === 1);
console.log(oddNumbers);

const tenPercet = nums.map(function (num) {
  return num / 10;
});

console.log(tenPercet);

console.log('------------------objects------------------');

// convert an object to an array

const result = [];
const drone = {
  speed: 100,
  color: 'yellow',
  weight: 20
};

const droneKeys = Object.keys(drone);
droneKeys.forEach(function (key) {
  result.push(key, drone[key]);
});

console.log(result);

console.log('------------------maps---------------------');

const bestBoxers = new Map();
bestBoxers.set(1, 'The Champion');
bestBoxers.set(2, 'The Runner-up');
bestBoxers.set(3, 'The Third place');
bestBoxers.set(4, 'Honor place');

console.log(bestBoxers);

// use get method to get a specific value

console.log(bestBoxers.get(1));

console.log('------------------set----------------------');

// set is a collection of unique values

const repetitiveFruits = ['apple', 'pear', 'pear', 'apple', 'plum', 'apple'];
console.log(repetitiveFruits);
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);
