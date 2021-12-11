#!/usr/bin/env node

// set interval given as parameters function name and interval in miliseconds

var counter = 0;

function count(){
	if(counter < 5){
		console.log("number: " + counter);
		counter++;
	}
}

setInterval(count, 1000);