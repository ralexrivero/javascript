#!/usr/bin/env node

/*
  class keyword + first letter capitalized class name
*/
class Train {
  constructor (color, lightsOn) {
    this.color = color;
    this.lightsOn = lightsOn;
  }

  toggleLights () {
    this.lightsOn = !this.lightsOn;
  }

  lightStatus () {
    console.log(`Lights on? ${this.lightsOn}`);
  }

  getSelf () {
    console.log(this);
  }

  getPrototype () {
    const proto = Object.getPrototypeOf(this);
    console.log(proto);
  }
}

class HighSpeedTrain extends Train {
  constructor (passengers, highSpeedOn, color, lightsOn) {
    super(color, lightsOn);
    this.passengers = passengers;
    this.lightsOn = lightsOn;
  }

  toggleHighSpeed () {
    this.highSpeedOn = !this.highSpeedOn;
    console.log(`High speed status: ${this.highSpeedOn}`);
  }

  toggleLights () {
    super.toggleLights();
    super.lightStatus();
    console.log('Lights are 100% operational');
  }
}

const firstTrain = new Train('red', false);
console.log(firstTrain);
const secondTrain = new Train('blue', false);

secondTrain.lightStatus();
secondTrain.toggleLights();
secondTrain.lightStatus();
secondTrain.getSelf();
secondTrain.getPrototype();

const firstHighSpeedTrain = new HighSpeedTrain(100, false, 'blue', false);
firstHighSpeedTrain.toggleLights();
firstHighSpeedTrain.lightStatus();
