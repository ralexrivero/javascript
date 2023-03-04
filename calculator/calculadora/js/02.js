// cargar elementos html en variables
const display = document.getElementById('display');

/*************************************************
 * funciones
*************************************************/

// funcion de enviar numero al display
function enviarNumero(valor) {
  // console.log(mensaje);
  display.innerHTML = valor;
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
