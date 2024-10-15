import Cl_mCine from "./Cl_mCine";
import Cl_mCliente from "./Cl_mCliente";
import Cl_vCine from "./Cl_vCine";
import Cl_vCliente from "./Cl_vCliente";

export default class Cl_controlador {
    constructor() {
        this.mCine = new Cl_mCine(100); // Inicialicé el valor de dineroinicial
        this.vCliente = new Cl_vCliente(this);
        this.vCine = new Cl_vCine(this);
        this.clientes = []; // Agregué un array para almacenar los clientes
    }

    agregarCliente(familia, personas, dia) {
        const cliente = new Cl_mCliente({ familia, personas, dia });
        this.clientes.push(cliente);
        this.procesarCliente(cliente);
    }

    procesarCliente(cliente) {
        const montoapagar = cliente.montoapagar();
        this.mCine.acummontoapagar += montoapagar;
        if (cliente.dia === 1) {
            this.mCine.contdialunes++;
        }
        this.vCine.actualizarTabla(cliente);
    }

    calcularPromedioLunes() {
        if (this.mCine.contdialunes === 0) {
            return 0;
        }
        return this.mCine.acummontoapagar / this.mCine.contdialunes;
    }

    calcularFamiliaQuePagoMas() {
        let familiaQuePagoMas = "";
        let montoMaximo = 0;
        this.clientes.forEach((cliente) => {
            if (cliente.montoapagar() > montoMaximo) {
                montoMaximo = cliente.montoapagar();
                familiaQuePagoMas = cliente.familia;
            }
        });
        return familiaQuePagoMas;
    }

    calcularTotalFinal() {
        return this.mCine.dineroinicial + this.mCine.acummontoapagar;
    }
}
