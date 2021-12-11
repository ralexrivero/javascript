#!/usr/bin/env node
// if

var a = 50;
var b = 150;

if(a > b){
	console.log("a is greater than b");
} else if(a == b){
	console.log("a and b are equal")
} else{
	console.log("b is greater than a")
}

var size = 31;

switch(true){
	case size < 10: console.log("small size");
	break;

	case size >= 10 && size <= 20: console.log("medium size");
	break;

	case size > 20 && size <= 30: console.log("big size");
	break;

	default: console.log("no size");
	break;
}