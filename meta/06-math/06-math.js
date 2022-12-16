#!/usr/bin/env node

// random
const decimal = Math.random();
console.log(decimal);

// nearest integer, rounded upwards
const rounded = Math.ceil(Math.random() * 10);
console.log(rounded);

console.log(Math.ceil(2.01)); // round to 3

// nearest integer, rounded downwards
console.log(Math.floor(2.99)); // round to 2

// nearest integer, rounded to nearest

console.log(Math.round(2.49)); // round to 2

console.log(Math.round(2.5)); // round to 3

/*
Math cheetsheet
Math.random() - returns a random number between 0 and 1
Math.ceil() - rounds a number up to the nearest integer
Math.floor() - rounds a number down to the nearest integer
Math.round() - rounds a number to the nearest integer
Math.max() - returns the largest of zero or more numbers
Math.min() - returns the smallest of zero or more numbers
Math.pow() - returns the base to the exponent power, that is, baseexponent
Math.sqrt() - returns the square root of a number
Math.abs() - returns the absolute value of a number
Math.log() - returns the natural logarithm (base e) of a number
Math.sin() - returns the sine of a number
Math.cos() - returns the cosine of a number
Math.tan() - returns the tangent of a number
Math.asin() - returns the arcsine of a number
Math.acos() - returns the arccosine of a number
Math.atan() - returns the arctangent of a number
Math.atan2() - returns the arctangent of the quotient of its arguments
Math.PI - returns π
Math.E - returns Euler's number
Math.LN2 - returns the natural logarithm of 2
Math.LN10 - returns the natural logarithm of 10
Math.LOG2E - returns base 2 logarithm of E
Math.LOG10E - returns base 10 logarithm of E
Math.SQRT1_2 - returns the square root of 1/2
Math.SQRT2 - returns the square root of 2
*/
