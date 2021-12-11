#!/usr/bin/env node

for(i = 0; i < 10; i++){
	console.log("i: " + i);
}

var week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

var i = 0;

while(week[i]){
	console.log("Day: " + week[i]);
	i++;
}

for(day in week){
	console.log("Day2: " + week[day]);
}

var j = 0;
while(j < 10){
	document.write(j + '</br>');
	j++;
}

for (d in week){
	document.write('day: ' + week[d] + '</br>')
}

for (var i = week.length - 1; i >= 0; i--) {
	console.log(week[i]);
	if(week[i] == 'Thursday'){
		break;
	}
}