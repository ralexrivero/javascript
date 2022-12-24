#!/usr/bin/env node

/*
  for in loop is an unrealiable way to iterate an object, because it iterates over all properties of the object,
  includin their prototype
  for of loop is the reliable way to iterate an object, because iterates over properties and values of the object,
  iterates over an object only when using the Object.keys() method
*/

const car = {
  engine: true,
  steering: true,
  speed: 'slow'
};

const sportsCar = Object.create(car);
sportsCar.speed = 'fast';
console.log('The sportCar object: ', sportsCar);

console.log('-------for-in is unreliable-------');
for (const prop in sportsCar) {
  console.log(prop);
}

console.log('-------for-of is reliable---------');
for (const prop of Object.keys(sportsCar)) {
  console.log(`${prop}: ${sportsCar[prop]}`);
}
