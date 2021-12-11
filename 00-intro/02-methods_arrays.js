#!/usr/bin/env node

// methods and properties for arrays

var devices = ['laptop', 'phone', 'tv', 'pendrive'];
var cities = ['Montevideo', 'Bogota', 'Tokio', 'Istanbul', 'Paris'];
var sizes = ['small', 'medium', 'large', 'extra large', 'fantastic'];

var len = devices.length;
console.log(len);
len = cities.length;
console.log(len);

var mix = devices.concat(cities);
console.log(mix);

// the opposite to split, join

var plain = devices.join(', ');
console.log(plain);

// pop, removes the last element

console.log(sizes);
popped = sizes.pop();
console.log(popped);
console.log(sizes);
sizes.pop();
console.log(sizes);

// push, add at the end

var moreCities = cities.push('Rio', 'Berlin', 'Stockolmo')
console.log(cities);
console.log(moreCities); // store the number of elements

// shift, removes the first element

cities.shift();
console.log(cities);

// unshift, add an element al the beginning

cities.unshift('Venice')
console.log(cities);

// reverse, reverse sorting

cities.reverse();
console.log(cities);
  