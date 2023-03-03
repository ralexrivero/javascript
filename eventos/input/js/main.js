const nombre = document.getElementById('nombre');

const enviarNombre = document.getElementById('enviar_nombre');



enviarNombre.addEventListener('click', function () {
  if (nombre.value.length === 0) {
    nombre.placeholder = 'debes escribir tu nombre wey!';
    nombre.className += 'input-alerta';
  } else {
    document.getElementById('bienvenida').innerHTML =
      `<h1>Bienvenido ${nombre.value}!</h1>
      <p>Espero que disfrutes este increible sitio!</p>`;
  }
});

