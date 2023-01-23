#!/usr/bin/env node

// complex objects has methods and properties

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
