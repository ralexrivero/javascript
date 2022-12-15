#!/usr/bin/env node

/* switch
    Switch statements are used to execute code based on a condition.
    The condition is evaluated once and the value of the expression is compared with the values of each case.
    If there is a match, the associated block of code is executed.
    If there is no match, the default code block is executed.
*/

const place = 'first';

switch (place) {
  case 'first':
    console.log('Gold');
    break;
  case 'second':
    console.log('Silver');
    break;
  case 'third':
    console.log('Bronze');
    break;
  default:
    console.log('No medal awarded');
}
