#!/usr/bin/env node

// Task 1: Code a Person class
class Person {
  constructor (name = 'Tom', age = 20, energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }

  sleep () {
    this.energy += 10;
  }

  doSomethingFun () {
    this.energy -= 10;
  }
}
// Task 2: Code a Worker class
class Worker extends Person {
  constructor (xp = 0, hourlyWage = 10, name, age, energy) {
    super(name, age, energy);
    this.xp = xp;
    this.hourlyWage = hourlyWage;
  }

  gotToWork () {
    this.xp += 10;
  }
}
// Task 3: Code an intern object, run methods
function intern () {
  const intern01 = new Worker(name = 'Bob', age = 21, energy = 110, xp = 0, hourlyWage = 10);
  intern01.gotToWork();
  console.log(intern01);
}

// Task 4: Code a manager object, methods
function manager () {
  const manager01 = new Worker(name = 'Alice', age = 30, energy = 120, xp = 100, hourlyWage = 30);
  manager01.doSomethingFun();
  console.log(manager01);
}
