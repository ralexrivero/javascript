#!/usr/bin/env node

try {
  console.log((10).toString(100));
} catch {
  console.log('RangeError');
}
