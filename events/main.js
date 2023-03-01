class ButtonEvents {
  constructor(buttonId) {
    this.button = document.getElementById(buttonId); //elemento de botón con el id especificado
    this.count = 0; //contador para el número de clics
    this.init();
  }

  //Método para inicializar el botón y agregar el evento de clic
  init() {
    this.button.innerHTML = `Haz clic aquí!`;
    this.button.addEventListener("click", () => this.handleClick());
  }

  //Método para manejar el evento de clic
  handleClick() {
    this.count++;
    this.button.innerHTML = `Haz clic aquí! (${this.count})`;
    this.changeBackgroundColor();
  }

  //Método para cambiar el color de fondo del body
  changeBackgroundColor() {
    const colors = ["#f44336", "#4caf50", "#2196f3", "#ffeb3b", "#9c27b0"];
    const index = this.count % colors.length;
    document.body.style.backgroundColor = colors[index];
  }
}

//Instanciar la clase y llamar a los métodos
const buttonEvents = new ButtonEvents("myButton");