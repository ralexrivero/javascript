#!/usr/bin/env node

async function populate() {
  const requestURL = 'https://raw.githubusercontent.com/ralexrivero/javascript/main/meta/18-JSON/data.json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const employees = await response.json();

  console.log(employees);
}

populate();
