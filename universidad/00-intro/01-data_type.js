#!/usr/bin/env node

/* primitive data types */

const varString = 'String';
const varNumber = 7;
const varNumber2 = 13.4;
const varBoolean = true;

/* complex objects */

const varObject = {
  nombre: 'Ronald',
  apellido: 'Rivero',
  edad: 42,
  role: 'FullStack Developer'
};

console.log(varObject);

const varTypes = [varString, varNumber, varNumber2, varBoolean, varObject];

varTypes.forEach(function (element) {
  console.log(element);
});

varTypes.forEach(element => {
  console.log(`${element} is type: ${typeof (element)}`);
});

for (const key of Object.keys(varObject)) {
  console.log(`${key}: ${varObject[key]}`);
}
