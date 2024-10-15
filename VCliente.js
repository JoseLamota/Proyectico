export default class Cl_vCliente {
    constructor(controlador) {
        this.vista = document.getElementById("ClienteForm");
        this.inFamilia = document.getElementById("ClienteForm_inFamilia");
        this.inPersonas = document.getElementById("ClienteForm_inPersonas");
        this.inDia = document.getElementById("ClienteForm_inDia");
        this.btAceptar = document.getElementById("ClienteForm_btAceptar");
    }
}
