

import { Cliente } from './Cliente';
import { Nutricionista } from './Nutricionista';
import { Dieta } from './Dieta';
import { tipoDieta } from './tipoDietas';
import { Comida } from './Comida';


let comida_1:Comida = new Comida(100,200,100);
let comida_2:Comida = new Comida(534,123,438);
let comida_3:Comida = new Comida(837,527,753);
let comidas:Comida[] = new Array(comida_1,comida_2,comida_3);


let paco:Cliente = new Cliente(123, "Paco", 'Jimenez', 'Lechuga', '76438303G', 'pacoJimenez@gmail.com', '123456', 25, true, 178, 83, 40,30);
console.log(`*** Datos de un cliente ***`)
console.log(paco.getFichaCompleta() + `\n`)

let marcos:Nutricionista = new Nutricionista(1234, "Marcos", 'Lucas', 'Techado', '85965742T', 'Marcos@gmail.com', "1234");
console.log(`*** Datos de un Nutricionista ***`)
console.log(marcos.getFichaCompleta() + `\n`)

let dieta_1:Dieta = new Dieta(tipoDieta.hiper,comidas, 6, 3200, 4432, 34234);
console.log(`*** Datos de una dieta ***`)
console.log(dieta_1.getDatosDieta() + `\n`)