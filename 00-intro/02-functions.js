#!/usr/bin/env node

// declar function without parameters
// run this script on a web browser

function greet(){
	alert('Hi folks!')
}

// run the function

greet();


// function with parameter

function add(a, b){
	var res = a + b;
	console.log(res);
}

// run the function and add parameters

add(9, 12);
add(99, 98);

// function with return

function mul(x, y) {
	var res = x * y;
	return res;
	// see the result calling the function on the web browser console
}