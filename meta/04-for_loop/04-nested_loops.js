#!/usr/bin/env node

/* nested loops
  nested loops are loops inside loops
  the syntax of nested loops is:

  for (initialization; condition; increment/decrement) {
    for (initialization; condition; increment/decrement) {
      // code block to be executed
    };
    };
*/

const year = [2022, 2023];
const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

for (const x in year) {
  for (const y in month) {
    console.log(`${year[x]} - ${month[y]}`);
  }
}
