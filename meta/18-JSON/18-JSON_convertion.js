#!/usr/bin/env node

async function populate() {
  const requestURL = './data.json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const employees = await response.json();

  console.log(employees);
}

populate();
