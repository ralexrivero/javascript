// cargar elementos html en variables
const display = document.getElementById('display');


/*************************************************
 * funciones
*************************************************/

// funcion de enviar numero al display
function enviarNumero(valor) {
  // si el display esta en cero, lo reemplaza, si no agrega el numero
  const displayValor = display.textContent; // text content muestra valores de textos escondidos si lo estan
  if (displayValor === '0') {
    display.textContent = valor;
  } else {
    display.textContent = displayValor + valor
  }

}

/*************************************************
 * botones
*************************************************/

const botones = document.querySelectorAll('button');

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
  }
});

function borrarTodo() {
  display.textContent = '0';
}

function agregarDecimal() {
  // si no existe el punto decimal, agrego uno y solo uno
  if (display.textContent.includes('.')) {
    return
  } else {
    display.textContent += '.'
  }
}