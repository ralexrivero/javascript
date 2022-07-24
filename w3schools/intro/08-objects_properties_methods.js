#!/usr/bin/env node
/*
  objects, properties and methods
    objects: variables that contains many values
    properties: name:value pairs, or named values
    methods: a function stored in a property
    this: keyword that refers to the object instance
*/

const car = {
  type: 'Tesla',
  model: 'x',
  color: 'red',
  description: function () {
    return `Type: ${this.type}\nModel:${this.model}\nColor:${this.color}\n`
  }
};

console.log(car.type);
console.log(car);
console.log(car.description());
