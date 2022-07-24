#!/usr/bin/env node
/*
  string methods
*/

const str1 = 'Hello World and good bye World';
const str2 = str1.replace(/World/g, 'JavaScript'); // global regex to replace all the matches
const str3 = str1.replace('World', 'JavaScript'); // only first match
console.log(str2);
console.log(str3);
const str4 = str1.replace(/world/ig, 'JS'); // case insensitive and all matches
console.log(str4);
