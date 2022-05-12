#!/usr/bin/env node
/**
 * division
 */

let num1 = Number(prompt('Enter number: ')); // can't be runned on shell
let num2 = Number(prompt('Enter divisor: '));

let result = parseInt(num1 / num2);
let mod = num1 % num2;

console.log(`Result: ${result}\nModulo: ${mod}`);
document.write(`<p>Result: ${result}</p>
                <p>Modulo: ${mod}</p>`); // ` and ${} are used to insert variables into strings
