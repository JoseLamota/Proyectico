export default class Cl_vCine {
    constructor(controlador) {
        this.vista = document.getElementById("mainForm");
        this.tabla = document.getElementById("mainForm_tabla");
        this.btAgregar = document.getElementById("mainForm_btAgregar");
        this.lblDineroinicial = document.getElementById("mainForm_lblDineroinicial");
        this.lblFamiliaquepagomas = document.getElementById("mainForm_lblFamiliaquepagomas");
        this.lblPrompagodiaslunes = document.getElementById("mainForm_lblPrompagodiaslunes");
        this.lblTotalfinal = document.getElementById("mainForm_lblTotalfinal");
        this.controlador = controlador; // Agregué la referencia al controlador
    }

    actualizarTabla(cliente) {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${cliente.familia}</td>
            <td>${cliente.personas}</td>
            <td>${cliente.dia}</td>
            <td>${cliente.montoapagar()}</td>
        `;
        this.tabla.appendChild(fila);
    }

    mostrarResultados() {
        this.lblDineroinicial.textContent = this.controlador.mCine.dineroinicial;
        this.lblFamiliaquepagomas.textContent = this.control
