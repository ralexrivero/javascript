#!/usr/bin/env node

/*
            Animal
          /        \
         /          \
       Cat          Bird
      /   \           \
HouseCat   Tiger      Parrot

*/

class Animal {
  constructor (color = 'yellow', energy = 3) {
    this.color = color;
    this.energy = energy;
  }

  isActive () {
    this.energy === 0 ? this.sleep() : this.energy--;
    console.log(`Energy is decreasing, currently at: ${this.energy}`);
  }

  sleep () {
    this.energy += 5;
    console.log(`Sleeping now, energy is increasing at: ${this.energy}`);
  }

  getColor () {
    console.log(`Color: ${this.color}`);
  }
}

class Cat extends Animal {
  constructor (sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
    super(color, energy);
    this.canJumpHigh = canJumpHigh;
    this.canClimbTrees = canClimbTrees;
    this.sound = sound;
  }

  makeSound () {
    console.log(`Cat says: ${this.sound}`);
  }
}

class HouseCat extends Cat {
  constructor (houseCatSound = 'meow', sound, canJumpHigh, canClimbTrees, color, energy) {
    super(sound, canJumpHigh, canClimbTrees, color, energy);
    this.houseCatSound = houseCatSound;
  }

  makeSound (option) {
    if (option) {
      super.makeSound();
    }
    console.log(this.houseCatSound);
  }
}

class Tiger extends Cat {
  constructor (tigerSound = 'Roar!', sound, canJumpHigh, canClimbTrees, color, energy) {
    super(sound, canJumpHigh, canClimbTrees, color, energy);
    this.tigerSound = tigerSound;
  }

  makeSound (option) {
    if (option) {
      super.makeSound();
    }
    console.log(this.tigerSound);
  }
}

class Bird extends Animal {
  constructor (sound, canFly, color, energy) {
    super(color, energy);
    this.sound = sound;
    this.canFly = canFly;
  }

  makeSound () {
    console.log(`The bird says: ${this.sound}`);
  }
}

class Parrot extends Bird {
  constructor (canTalk = false, sound, canFly, color, energy) {
    super(sound, canFly, color, energy);
    this.canTalk = canTalk;
  }

  makeSound (option) {
    if (option) {
      super.makeSound();
    }
    if (this.canTalk) {
      console.log('I am a talking parrot');
    }
  }
}

const polly = new Parrot(true);
const rio = new Parrot(false);

polly.makeSound();
rio.makeSound();

console.log(`color: ${polly.color} and energy: ${polly.energy}`);
polly.isActive();
polly.isActive();
polly.isActive();
polly.isActive();

const penguin = new Bird('shriek', false, 'black and white', 3);
// sound, canFly, color, energy

penguin.getColor();
penguin.makeSound();
penguin.isActive();
penguin.isActive();
penguin.isActive();
penguin.isActive();
