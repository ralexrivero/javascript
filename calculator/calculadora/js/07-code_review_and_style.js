/**
 * Calculadora basica
 * Numeros, decimales y operaciones aritmeticas basicas
 */

/*************************************************
 * variables de la calculadora
*************************************************/
// documentos tomados del DOM
const display = document.getElementById('display');
const botones = document.querySelectorAll('button');

// variables que cambiaran a lo largo del programa
let primerTermino = 0;
let operadorIngresado = '';
let banderaTerminoSiguiente = false; // indica si debe esperar el siguiente término

/**
 * operaciones - cada miembro llama una funcion anonima con la operacion correspondiente
 *
 */
const operaciones = { // objeto operaciones
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
  '+': (a, b) => a + b,
  '-': (a, b) => a - b
};

/*************************************************
 * event listener
*************************************************/

botones.forEach((boton) => {
  if (boton.classList.contains('numeros')) {
    boton.addEventListener('click', () =>
      enviarNumero(boton.value));
  } else if (boton.classList.contains('decimal')) {
    boton.addEventListener('click', () =>
      agregarDecimal());
  } else if (boton.classList.contains('borrar')) {
    boton.addEventListener('click', () =>
      borrarTodo());
  } else if (boton.classList.contains('operadores')) {
    boton.addEventListener('click', () =>
      usarOperador(boton.value));
  } else if (boton.classList.contains('signo-igual')) {
    boton.addEventListener('click', () =>
      resultado());
  }
});

/*************************************************
 * funciones
*************************************************/

/**
 * enviarNumero: envia numeros al display
 * @param valor - valor recibido desde los botones
 */
function enviarNumero (valor) {
  console.log(valor);
  // si el display esta en cero, lo reemplaza, si no agrega el numero
  const displayValor = display.textContent; // text content muestra valores de textos escondidos si lo estan
  if (banderaTerminoSiguiente === true) {
    display.textContent = valor;
    banderaTerminoSiguiente = false;
  } else if (displayValor === '0') {
    display.textContent = valor;
  } else {
    display.textContent = displayValor + valor;
  }
}

/**
 * agrega un punto decimal
 * @returns nada si hay un operador o si ya tiene un punto decimal
 */
function agregarDecimal () {
  console.log('decimal');
  // si se ingreso el operador, no se puede ingresar un punto decimal
  if (banderaTerminoSiguiente === true) {
    return; // se termina la funcion, no se ejecuta mas nada aqui y se devuelve el control a quien llamo a la funcion
  }
  // si no existe el punto decimal, agrego uno y solo uno
  if (display.textContent.includes('.')) {
    return;
  } else {
    display.textContent += '.';
  }
}

/**
 * resultado - muestra el resultado de la operacion
 */
function resultado () {
  console.log('=');
  const valorActual = Number(display.textContent);
  const resultadoFinal = operaciones[operadorIngresado](primerTermino, valorActual);
  display.textContent = resultadoFinal;
  primerTermino = resultadoFinal;
  banderaTerminoSiguiente = true;
}

/**
 * borrarTodo - borrar el display y los valores de las variables
 */
function borrarTodo () {
  console.log('C');
  // resetear todos los valores
  display.textContent = '0';
  primerTermino = 0;
  operadorIngresado = '';
  banderaTerminoSiguiente = false;
}

/**
 * usarOperador - guarda el valor actual en una variable, marcar que se ingresa un nuevo numero y guardar el operador
 * @param {*} operador - recibe el operador ingresado desde los botones
 *
 */
function usarOperador (operador) {
  console.log(operador);
  const valorActual = Number(display.textContent); // convertir el valor actual del display a número
  // asignar primer valor sino existe
  if (!primerTermino) {
    primerTermino = valorActual;
  }
  banderaTerminoSiguiente = true; // listo para el siguiente valor
  operadorIngresado = operador;
}
