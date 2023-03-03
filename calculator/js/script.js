const calculatorDisplay = document.getElementsByClassName('calculator-display__input');

calculatorDisplay.value = 'hola';

const inputBtns = document.querySelectorAll('button');

const clearBtn = document.getElementById('clear-btn');

function sendNumberValue(number) {
  console.log(number);
}
