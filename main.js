import { Familia } from './Familia.js';
import { Cine } from './Cine.js';
import { VistaCine } from './VistaCine.js';

let contenedor = document.getElementById('resultados');

let cine = new Cine(100); // Caja inicial de $100
cine.agregarFamilia(new Familia('López', 4, 2)); 
cine.agregarFamilia(new Familia('Gil', 3, 1));
cine.agregarFamilia(new Familia('Gómez', 5, 5));
cine.agregarFamilia(new Familia('Mata', 2, 1));

let vista = new VistaCine(contenedor);
vista.mostrarResultados(cine);
