class EventosDOM {
  constructor() {
    this.formulario = document.getElementById('miFormulario');
    this.div = document.getElementById('miDiv');
    this.mostrarNombre = this.mostrarNombre.bind(this);
  }

  mostrarNombre(evento) {
    evento.preventDefault();
    const inputNombre = document.getElementById('nombre');
    const nombre = inputNombre.value;
    this.div.innerText = `Hola, ${nombre}!`;
  }

  agregarEvento() {
    this.formulario.addEventListener('submit', this.mostrarNombre);
  }

  eliminarEvento() {
    this.formulario.removeEventListener('submit', this.mostrarNombre);
  }
}

const eventosDOM = new Eventos
