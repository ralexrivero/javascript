#!/usr/bin/env node

/*
  SyntaxError can't be catched using try/catch
*/

try {
  var a 'there is no asignment orperator here';
} catch {
  console.log('Syntax Error');
}