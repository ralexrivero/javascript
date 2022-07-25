#!/usr/bin/env node
/*
  date type
*/

/*
  four ways to create a new Date() object
  - new Date()
  - new Date(year, month, day, hours, minutes, seconds, milliseconds)
  - new Date(milliseconds)
  - new Date(date string)
*/

const myDate = new Date(); // current date and time
console.log(myDate);

const myDate2 = new Date(1980, 9, 24, 9, 11, 57, 99); // create a new object with a specific date and time
console.log(myDate2);

const myDate3 = new Date(1980, 9); // minimum specification allowed
console.log(myDate3);

const myDate4 = new Date(0); // stores dates as milliseconds since January 01, 1970, 00:00:00 UTC (Universal Time Coordinated)
console.log(myDate4);

const myDate5 = new Date(1.66e12); // zero time plus the given number as a parameter
console.log(myDate5);

const myDate6 = new Date(-1.3e12); // pass a negative number for previous to zero time
console.log(myDate6);

const myDate7 = new Date();
console.log(myDate7.toUTCString()); // toUTCString method converts a date to UTC string format (a date display standard)

const myDate8 = new Date();
console.log(myDate8.toISOString()); // to ISO date format

const myDate9 = new Date();
console.log(myDate9.toDateString()); // more readable format

const myDate10 = new Date('2015-03-21'); // can be affected by the time zone
console.log(myDate10);
console.log(myDate10.toDateString());

const myDate11 = new Date('2012'); // can be affected by the time zone
console.log(myDate11);

const myDate12 = new Date('2012-10-25T10:00:00Z'); // T separetes date and time, Z means UTC time
console.log(myDate12);

/*
  convert to milliseconds
*/

const myDate13 = new Date();
const myDateMsec = Date.parse(myDate13);
console.log(myDateMsec);

/*
  Get Date methods
  - getFullYear() year as four digit number
  - getMonth() month as number (0 - 11) January is month 0
  - getDate() day as a number (1 - 31)
  - getHours() hours (0 - 23)
  - getMinutes()
  - getSeconds()
  - getMilliseconds() (0 - 999)
  - getTime() milliseconds from zero (1970, 1, 1, 00:00:00)
  - getDay() weekday (0-6) Sunday is day 0
  - Date.now() get time ECMAScript 5
*/

// get the time from zero time

const myGet1 = new Date();
console.log(myGet1.getTime());

console.log(myGet1.getFullYear());
console.log(myGet1.getMonth());
console.log(myGet1.getDay());

/*
  Get UTC Date methods
  - getUTCDate()
  - getUTCDay()
  - getUTCDay()
  - getUTCFullYear()
  - getUTCHours()
  - getUTCMilliseconds()
  - getUTCMinutes()
  - getUTCMonth()
  - getUTCSeconds()
*/

/*
  Set Date methods
  - setFullYear() optionally month and day
  - setMonth() (0 - 11)
  - setDate() set day (0-31)
  - setHours() (0 - 23)
  - setMinutes() (0 - 59)
  - setSeconds() (0 - 59)
  - setMilliseconds() (0 - 999)
  - setTime() set in milliseconds from January 1, 1970
*/

const mySet1 = new Date();
mySet1.setFullYear(2012);
console.log(mySet1);
