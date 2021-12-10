#!/usr/bin/env node

var car = {
	brand: 'Mc Laren',
	tireSize: '17',
	color: 'Blue',
	// a method is a function of a object
	run: function(){

	}
}

console.log(car)


// objects methods and properties for text

var text = 'JavaScript is fun';

var len = text.length;
console.log("Text length: " + len);

var upp = text.toUpperCase();
console.log(upp);

var low = text.toLowerCase();
console.log(low);

// slicing

var sub = text.substring(0, 4);
console.log(sub);

// replace

var rep = text.replace('JavaScript', 'C')
console.log(rep);

// search

var search = text.indexOf('i');
console.log(search);

// reverse search

var searchRev = text.lastIndexOf('i');
console.log(searchRev);

// tokenize

var tok = text.split(' ');
console.log(tok);