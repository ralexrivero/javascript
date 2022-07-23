#!/usr/bin/env node

/*
    Constant objects and arrays
    A constant object is an object that cannot be changed after it is created.
    The elements of a constant array can be changed, but the array itself cannot be changed
*/
const cars = ['Ford', 'Volvo', 'BMW'];
cars.push('Honda');
cars.push('Tesla');
console.log(cars);

const car = {
    model: 'Tesla',
    year: '2022',
    color: 'black',
    doors: 4,
    wheels: 4
}

car.owner = 'Ronald';
car.color = 'grey';

console.log(car);
