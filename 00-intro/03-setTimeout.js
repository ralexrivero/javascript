#!/usr/bin/env node

// delay

function delayed(){
	console.log("Delayed function executed");
}

console.log("Start script");

setTimeout(delayed, 2000);
