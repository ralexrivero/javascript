#!/usr/bin/env node

// oop

// constructor clases, allways Camellcase

var text = new String("Hello World");
console.log(text);


// objects

function Person(name, last_name, age, gender){
	this.name = name;
	this.last_name = last_name;
	this.age = age;
	this.gender = gender;
}

var person1 = new Person();
person1.name = "Ronald";
person1.last_name = "Rivero";
person1.age = 41;
person1.gender = "male";

console.log(person1);

var person2 = new Person('Max', 'Steel', 39, 'mixed');

console.log(person2)

// methods

function Cat(name, gender, color, age){
	this.name = name;
	this.gender = gender;
	this.color = color;
	this.age = age;
	this.catInfo = function(){
		console.log('Cat description: name:' + name + " gender: " + gender + " color: " + " age: " + age);
	}
};

var milo = new Cat('Milo', 'Male', 'Yellow', 10);
console.log(milo);
milo.catInfo();
