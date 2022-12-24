#!/usr/bin/env node

// Task 1
const dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy () {
  for (const item of dairy) {
    console.log(item);
  }
}

logDairy();

// Task 2
const animal = {
  canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan () {
  for (const prop of Object.keys(bird)) {
    console.log(`${prop}: ${bird[prop]}`);
  }
}

birdCan();

// Task 3

function animalCan () {
  for (const prop in bird) {
    console.log(`${prop}: ${bird[prop]}`);
  }
}

animalCan();
