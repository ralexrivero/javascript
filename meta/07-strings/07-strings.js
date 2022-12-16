#!/usr/bin/env node

const veggies = ['onion', 'parsley', 'carrot'];

console.log(veggies.length);

for (let i = 0; i < veggies.length; i++) {
  console.log(veggies[i]);
}

// strings can be also iterated as arrays, they are array like objects

const greeting = 'Howdy';

for (let i = 0; i < greeting.length; i++) {
  console.log(greeting[i]);
}

// strings methods

const myName = '  John     Wick';

console.log(myName.length);

console.log(myName.toUpperCase());

console.log(myName.toLowerCase());

// trim removes white spaces from the beginning and the end of the string

console.log(myName.trim());

// includes

const password = 'abc123password098';

console.log(password.includes('password'));

// individual characters at a specific index

const greet = 'Hello';

console.log(greet.charAt(0));

// concat

const firstName = 'John';
const secondName = 'Wick';

console.log(firstName.concat(' ', secondName));

// indexOf

console.log(firstName.indexOf('o'));

// lastIndexOf

console.log(firstName.lastIndexOf('o'));

// slice

console.log(firstName.slice(0, 2));

// split

const tags = 'web design, web development, programming';

console.log(tags.split(', '));

// replace

const sentence = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

const newSentence = sentence.replace('dog', 'monkey');

console.log(newSentence);

// repeat

const message = 'Bad password. ';

console.log(message.repeat(3));

// replaceAll

const sentence2 = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

const newSentence2 = sentence2.replaceAll('dog', 'monkey');

console.log(newSentence2);

// replace with regex

const sentence3 = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

const newSentence3 = sentence3.replace(/dog/g, 'monkey');

console.log(newSentence3);

// replace spaces between

let str = '   Hello,   World!   ';
const noSpacesStr = str.replace(/\s/g, ''); // no more spaces

console.log(noSpacesStr); // Output: "Hello,World!"

str = '   Hello,   World!   ';
const singleSpaceStr = str.replace(/\s+/g, ' ');

console.log(singleSpaceStr.trim()); // Output: " Hello, World! ", replace multiple spaces with single space
