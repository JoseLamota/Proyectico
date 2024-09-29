import { Familia } from './Familia.js';

export class Cine {
  constructor(cajaInicial) {
    this.cajaInicial = cajaInicial;
    this.familias = [];
  }

  agregarFamilia(familia) {
    this.familias.push(familia);
  }

  obtenerFamiliaQuePagoMas() {
    let familiaMayorPago = this.familias[0];
    for (let i = 1; i < this.familias.length; i++) {
      if (this.familias[i].calcularTotal() > familiaMayorPago.calcularTotal()) {
        familiaMayorPago = this.familias[i];
      }
    }
    return familiaMayorPago;
  }

  calcularPromedioLunes() {
    let totalLunes = 0;
    let familiasLunes = 0;
    for (let i = 0; i < this.familias.length; i++) {
      if (this.familias[i].dia === 1) {
        totalLunes += this.familias[i].calcularTotal();
        familiasLunes++;
      }
    }
    return familiasLunes > 0 ? totalLunes / familiasLunes : 0;
  }

  calcularTotalFinal() {
    let totalRecaudado = 0;
    for (let i = 0; i < this.familias.length; i++) {
      totalRecaudado += this.familias[i].calcularTotal();
    }
    return this.cajaInicial + totalRecaudado;
  }
}
