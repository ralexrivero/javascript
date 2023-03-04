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
  boton.addEventListener('click', () => {
    enviarNumero(boton.value);
  });
});
