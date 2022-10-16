

import { Cliente } from './Cliente';
import { Nutricionista } from './Nutricionista';
import { Dieta } from './Diesta';



let paco:Cliente = new Cliente("Paco", 'Jimenez', 'Lechuga', '76438303G', 25, true, 178, 83, 40,30);
console.log(paco.getFichaCompleta())

let marcos:Nutricionista = new Nutricionista("Marcos", 'Lucas', 'Techado', '85965742T', '5d8g5r7er78w5');
console.log(marcos.getFichaCompleta())

let dieta_1:Dieta = new Dieta(2500, 5, 6, '5d8g5r7er78w5', '76438303G');
console.log(dieta_1.getDatosDieta())