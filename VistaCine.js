export class VistaCine {
    constructor(contenedor) {
      this.contenedor = contenedor;
    }
  
    mostrarResultados(cine) {
      this.contenedor.innerHTML = ''; // Limpiar resultados previos
  
      let familiaMayorPago = cine.obtenerFamiliaQuePagoMas();
      let promedioLunes = cine.calcularPromedioLunes();
      let totalFinal = cine.calcularTotalFinal();
  
      this.mostrarDato('Familia que pagó más:', familiaMayorPago.nombre);
      this.mostrarDato('Promedio pagado los lunes:', promedioLunes.toFixed(2));
      this.mostrarDato('Total de dinero al final de la jornada:', totalFinal.toFixed(2));
    }
  
    mostrarDato(etiqueta, valor) {
      let elemento = document.createElement('p');
      elemento.textContent = `${etiqueta} ${valor}`;
      this.contenedor.appendChild(elemento);
    }
  }