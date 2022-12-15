#!/usr/bin/env node

/* switch
    Switch statements are used to execute code based on a condition.
    The condition is evaluated once and the value of the expression is compared with the values of each case.
    If there is a match, the associated block of code is executed.
    If there is no match, the default code block is executed.
*/

const place = 'morning';

switch (place) {
  case 'morning':
    console.log('Gold');
    break;
  case 'afternoon':
    console.log('Silver');
    break;
  case 'night':
    console.log('Bronze');
    break;
  default:
    console.log('No medal awarded');
}

let day = 'SUNDAY';
let activities = {};

day = day.toLowerCase();

switch (day) {
  case 'monday':
    activities = { morning: 'JavaScript', afternoon: 'React', night: 'English' };
    break;
  case 'tuesday':
    activities = { morning: 'English', afternoon: 'Python', night: 'English' };
    break;
  case 'wednesday':
    activities = { morning: 'English', afternoon: 'JavaScript', night: 'React' };
    break;
  case 'thursday':
    activities = { morning: 'Machine Learning', afternoon: 'Python', night: 'English' };
    break;
  case 'friday':
    activities = { morning: 'Python', afternoon: 'Machine Learning', night: 'English' };
    break;
  case 'saturday':
    activities = { morning: 'JavaScript', afternoon: 'Python', night: 'English' };
    break;
  case 'sunday':
    activities = { morning: 'English', afternoon: 'Python', night: 'Django' };
    break;
}

console.log(activities);
console.log(typeof (activities));
