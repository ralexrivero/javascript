#!/usr/bin/env node

/*
  for of loop can be used to iterate an object although those objects are not iterable
  Using three built-in methods: Object.keys(), Object.values(), and Object.entries()
*/

const car = {
  speed: 180,
  color: 'red',
  wheels: 4,
  doors: 5
};

console.log(Object.keys(car));

console.log(Object.values(car));

for (const key of Object.keys(car)) {
  console.log(`${key}: ${car[key]}`);
}
