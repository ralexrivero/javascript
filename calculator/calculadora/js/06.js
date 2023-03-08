// cargar elementos html en variables
const display = document.getElementById('display');
const botones = document.querySelectorAll('button');
let primerTermino = 0;
let operadorIngresado = '';
let banderaTerminoSiguiente = false; // indica si debe esperar el siguiente término

/*************************************************
 * funciones
*************************************************/

// funcion de enviar numero al display
function enviarNumero(valor) {
  // si el display esta en cero, lo reemplaza, si no agrega el numero
  const displayValor = display.textContent; // text content muestra valores de textos escondidos si lo estan
  if (banderaTerminoSiguiente === true) {
    display.textContent = valor;
    banderaTerminoSiguiente = false;
  } else if (displayValor === '0') {
    display.textContent = valor;
  } else {
    display.textContent = displayValor + valor
  }

}

/*************************************************
 * botones
*************************************************/


botones.forEach((boton) => {
  if (boton.classList.contains('numeros')) {
    boton.addEventListener('click', () => {
      enviarNumero(boton.value);
    });
  } else if (boton.classList.contains('decimal')) {
    boton.addEventListener('click', () => {
      agregarDecimal();
    });
  } else if (boton.classList.contains('borrar')) {
    boton.addEventListener('click', () => {
      borrarTodo();
    });
  } else if (boton.classList.contains('operadores')) {
    boton.addEventListener('click', () => {
      boton.addEventListener('click', () => {
        usarOperador(boton.value);
      })
    });
  } else if (boton.classList.contains('signo-igual')) {
    boton.addEventListener('click', () => {
      boton.addEventListener('click', () => {
        resultado();
      })
    });
  }
});

function resultado() {
  valorActual = Number(display.textContent)
  console.log(`${primerTermino} ${operadorIngresado} ${valorActual}`);
  const resultadoFinal = operaciones[operadorIngresado](primerTermino, valorActual);
  console.log(resultadoFinal);
}

/**
 * Objeto de calculo
 *
 */

const operaciones = {
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
  '+': (a, b) => a + b,
  '-': (a, b) => a - b
};

function borrarTodo() {
  // resetear todos los valores
  display.textContent = '0';
  primerTermino = 0;
  operadorIngresado = '';
  banderaTerminoSiguiente = false;
}

function agregarDecimal() {
  // si se ingreso el operador, no se puede ingresar un punto decimal
  if (banderaTerminoSiguiente === true) {
    return // se termina la funcion, no se ejecuta mas nada aqui y se devuelve el control a quien llamo a la funcion
  }
  // si no existe el punto decimal, agrego uno y solo uno
  if (display.textContent.includes('.')) {
    return
  } else {
    display.textContent += '.'
  }

}

function usarOperador(operador) {
  const valorActual = Number(display.textContent); // convertir el valor actual del display a número
  // asignar primer valor sino existe
  if (!primerTermino) {
    primerTermino = valorActual;
  }

  banderaTerminoSiguiente = true; // listo para el siguiente valor
  operadorIngresado = operador;
  // console.log('primerValor: ', primerTermino);
  // console.log('operador: ', operadorIngresado);
}
