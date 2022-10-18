

import { Cliente } from './Cliente';
import { Nutricionista } from './Nutricionista';
import { Dieta } from './Diesta';



let paco:Cliente = new Cliente("Paco", 'Jimenez', 'Lechuga', '76438303G', 'pacoJimenez@gmail.com', '123456', 25, true, 178, 83, 40,30);
console.log(`*** Datos de un cliente ***`)
console.log(paco.getFichaCompleta() + `\n`)

let marcos:Nutricionista = new Nutricionista("Marcos", 'Lucas', 'Techado', '85965742T', 'Marcos@gmail.com', "1234", "3fa3");
console.log(`*** Datos de un Nutricionista ***`)
console.log(marcos.getFichaCompleta() + `\n`)

let dieta_1:Dieta = new Dieta(2500, 5, 6, 4432, 34234);
console.log(`*** Datos de una dieta ***`)
console.log(dieta_1.getDatosDieta() + `\n`)