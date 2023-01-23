#!/usr/bin/env node

// literal objects without inheritance from prototype Object

console.log('\nLiteral object **************************************************************************\n');

const person = {
  // properties
  firstName: 'Ronald',
  secondName: 'Alexander',
  surName: 'Rivero',
  email: 'ralexrivero@gmail.com',
  phone: '+598 093 776 930',
  age: 42,
  // methods
  fullName: function () {
    return `Full name: ${this.firstName} ${this.secondName} ${this.surName}`;
  }
};

console.log(person);
console.log('email: ' + person.email);
console.log(person.fullName());

// Create an object that inherits properties and methods from prototype Object

console.log('\nPrototype Object **************************************************************************\n');
const car = new Object();
console.log(car);

car.brand = 'Tesla';
car.model = 'M3';
car.year = 2023;
car.seats = 7;
car.color = 'blue';
car.engineStatus = true;
car.start = function () {
  this.engineStatus = true;
  return `start engine on ${this.brand} ${this.model}: status ${this.engineStatus}`;
};
car.off = function () {
  this.engineStatus = false;
  return `${this.brand} ${this.model} engine is off`;
};

console.log(car.start());

console.log(car);
console.log(car.off());
console.log(car);
console.log(car.start());
console.log(car);

// access using brackets
console.log(car['color']);

// for in
console.log('\nfor in:\n');
for (const prop in car) {
  console.log(`${prop}: ${car[prop]}`);
}
