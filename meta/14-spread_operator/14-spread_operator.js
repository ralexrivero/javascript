#!/usr/bin/env node

// spread operator ...

const top3 = [
  'The collosseum',
  'Trevi Fountain',
  'The Vatican City'
];

function showItinerary (place1, place2, place3) {
  console.log(`Visit ${place1}\nThen visit: ${place2}\nFinish with a visit to: ${place3}`);
}

showItinerary(top3[0], top3[1], top3[2]);
showItinerary(...top3);
