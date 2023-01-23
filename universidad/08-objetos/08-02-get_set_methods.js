#!/usr/bin/env node

const person = {
  firstName: 'Ronald',
  sureName: 'Rivero',
  country: 'Uruguay',
  gender: 'Male',
  age: 42,
  email: 'ralexrivero@gmail.com',
  languages: ['C', 'Python', 'JavaScript', 'SQL'],
  stack: ['node', 'Django'],
  get fullName () {
    return `${this.firstName} ${this.sureName}`;
  }
};

console.log(person);
console.log(person.fullName);

// get
