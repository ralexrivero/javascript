#!/usr/bin/env node
/**
 * given an odd square matrix of any dimension (n x n)
 * mark crosses in the position of the diagonals
 * Return: matrix with crosses
 */

let matrix = [[' ', ' ', ' ', ' ', ' '],
               [' ', ' ', ' ', ' ', ' '],
               [' ', ' ', ' ', ' ', ' '],
               [' ', ' ', ' ', ' ', ' '],
               [' ', ' ', ' ', ' ', ' ']];

console.log(`Matrix of size ${matrix.length} x ${matrix[0].length}`)
console.log(matrix);

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
        if (i === j || i + j === matrix.length - 1) {
            matrix[i][j] = 'X';
        }
    }
}

console.log(matrix)
