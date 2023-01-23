#!/usr/bin/env node

const cat = {
  name: 'Tom',
  age: 7,
  color: 'Brown',
  owner: 'John',
  tag: 'kitty'
};

console.log(cat);

// delete property
delete cat.tag;
console.log('\n');
console.log(cat);
