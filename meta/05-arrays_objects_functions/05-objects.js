#!/usr/bin/env node

const assistantManager = {
  movement: 3,
  socialSkills: 30,
  streetSmarts: 30,
  helth: 40
};

/* dot operator
   is used to access object properties
  and used to access object methods
*/

assistantManager.seniority = 5;

console.log(assistantManager);

function Animal () {
  this.eat = function () {
    console.log('The animal is eating');
  };
}

function Mammal () {
  this.walk = function () {
    console.log('The mammal is walking');
  };
}

Mammal.prototype = new Animal();

const dog = new Mammal();

dog.walk();
dog.eat();

dog.name = 'Snooky';
dog.age = 7;
dog.weight = 12;
dog.color = 'brown';

console.log(dog);
