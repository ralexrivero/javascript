#!/usr/bin/env node

const dishes = [
  {
    id: 1,
    dish: 'Italian pasta',
    price: 9.55
  },
  {
    id: 2,
    dish: 'Rice with veggies',
    price: 8.65
  },
  {
    id: 3,
    dish: 'Chicken with potatoes',
    price: 15.55
  },
  {
    id: 4,
    dish: 'Vegetarian Pizza',
    price: 6.45
  }
];

function showDishes (condition) {
  for (const dish of dishes) {
    console.log(`Dish: ${dish.dish} Price (incl.tax):$ ${condition === true ? dish.price * 1.2 : dish.price }`);
  }
}

showDishes(false);
