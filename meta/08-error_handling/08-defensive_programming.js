#!/usr/bin/env node

function letterFinder (word, match) {
  const cond1 = typeof (word) == 'string' && word.length > 1;
  const cond2 = typeof (match) == 'string' && match.length === 1;
  if (cond1 && cond2) {
    for (let i = 0; i < word.length; i++) {
      if (word[i] == match) {
        console.log(`Found the ${match} at ${i}`);
      } else {
        console.log(`---No match found at ${i}`);
      }
    }
  } else {
    console.log('Pass correct arguments to the function');
  }
}

letterFinder([],[]);
letterFinder('cat', 'c');
letterFinder('abcd', 7);
