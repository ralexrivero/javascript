#!/usr/bin/env node
/**
 * Given an array moves the array N times to the left
 * @n: number of times to move the array
 * @array: array to be moved
 * Return: the moved array
 */

let fruits = ["Apple", "Orange", "Banana", "Pear", "Kiwi"]

console.log("original array:\n",fruits);

function left(n, array) {
    for (let i = 0; i < n; i++) {
        array.push(array.shift()); // shift removes and return element [0], slice all to the left
    } // push adds to the end of the array
    return array;
}

console.log(left(2, fruits));
