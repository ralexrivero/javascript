#!/usr/bin/env node

const greet = 'Hello';

try {
  greet.pop();
} catch {
  console.log('TypeError');
}
