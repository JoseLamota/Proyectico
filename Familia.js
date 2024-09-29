export class Familia {
    constructor(nombre, personas, dia) {
      this.nombre = nombre;
      this.personas = personas;
      this.dia = dia;
      this.precioEntrada = 3; // Precio base de la entrada
    }
  
    calcularTotal() {
      let total = this.personas * this.precioEntrada;
      if (this.dia === 1) { // Si es lunes, se aplica descuento del 50%
        total /= 2;
      }
      return total;
    }
  }
