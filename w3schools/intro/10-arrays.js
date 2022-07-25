#!/usr/bin/env node
/*
  arrays
    arrays uses numbered indexes
*/
const nat = 'Uruguay';
const skills = {
  level: 'Master',
  title: 'Data Scientist',
  skills: ['C', 'Python', 'JavaScript']
};
const soft = ['Resilence', 'Self learning', 'Leadership'];
const arr01 = ['Ronald', 'Alexander', 41, nat, skills, soft];
console.log(arr01[3]);
console.log(arr01);

soft.sort(); // sort method
console.log(soft);
console.log(soft.length); // length property
console.log(typeof (arr01));
console.log(`arr01 is type 'array'?: ${Array.isArray(arr01)}`);
console.log(`isinstanceof: 'Array'?: ${arr01 instanceof Array}`);
