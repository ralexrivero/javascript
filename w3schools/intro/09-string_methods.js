#!/usr/bin/env node
/*
  string methods
  strings are immutable, string methods always returns a new string
*/

const str1 = 'Hello World and good bye World';
const str2 = str1.replace(/World/g, 'JavaScript'); // global regex to replace all the matches
const str3 = str1.replace('World', 'JavaScript'); // only first match
console.log(str2);
console.log(str3);
const str4 = str1.replace(/world/ig, 'JS'); // case insensitive and all matches
console.log(str4);

const a = 'Ronald';
const b = 'Alexander';
const c = 'Rivero';
const d = 'Espindola';
const e = a.concat(' ', b, ' ', c, ' ', d);
console.log(e);
console.log(a);
console.log(e.indexOf('Alexander')); // indexOf doesn't accept regex
console.log(e.indexOf('R'));
console.log(e.lastIndexOf('R'));
console.log(e.search(/e/i)); // search method accepts regex
console.log(e.search('E'));
const f = 'The rain in SPAIN stays mainly in the plain'
const g = f.match(/ain/gi); // use regex and will return an array object of matching items
console.log(g);
console.log(`g is typeof ${typeof (g)}`);
console.log(g[1]);

