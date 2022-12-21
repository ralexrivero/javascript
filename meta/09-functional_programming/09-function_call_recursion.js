#!/usr/bin/env node

function recursiveFunction (num) {
  console.log(num);
  if (num === 1) {
    return;
  }
  recursiveFunction(num - 1);
}

recursiveFunction(4);
