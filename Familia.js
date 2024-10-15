export default class Cl_mCliente {
    constructor ({familia, personas, dia, precioEntrada}){
        this.familia = familia;
        this.personas = personas;
        this.dia = dia;
        this.precioEntrada = precioEntrada || 3; // Agregué un valor predeterminado para precioEntrada
    }

    set personas (p) {
        this._personas = +p;
    }
    get personas () {
        return this._personas;
    }
    set dia (d) {
        this._dia = +d;
    }
    get dia () {
        return this._dia;
    }
    montoapagar() {
        let precio = this.precioEntrada;
        if (this.dia === 1) { // Agregué la lógica para reducir el precio los días lunes
            precio /= 2;
        }
        return precio * this.personas;
    }
}
  }
