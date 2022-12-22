#!/usr/bin/env node

/*
  Classes
*/

class Car {
  constructor (color, speed) {
    this.color = color;
    this.speed = speed;
  }

  turboOn () {
    console.log(`the ${this.color} car is turbo on!`);
  }
}

const car1 = new Car('blue', 175);

car1.turboOn();

const car2 = new Car('red', 180);

car2.turboOn();
