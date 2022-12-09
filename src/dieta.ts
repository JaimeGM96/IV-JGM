import { Comida } from './comida';
import { tipo_dieta } from './tipo_dieta';


export class Dieta{

    t_Dieta: tipo_dieta;
    comidas: Comida[] = [];
    numComida: number;
    horasAyuno: number;
    totalCalorias: number
    private idNutricionista: number;
    private idCliente: number;

    
    /**
     * Crea un objeto de la clase Dietas.
     * @param cms: Array de objetos de la clase Comida.
     * @param horasAyuno: Horas seguidas sin comer en un día.
     * @param idNutricionista: Identificador del Nutricionista de tipo string.
     * @param idCliente: Identificador del cliente.
     * 
     * @returns Objeto de la clase Dietas.
     * 
    */    
    constructor(t_Dieta: tipo_dieta, cms: Comida[], horasAyuno: number, totalCalorias: number, idNutricionista: number, idCliente: number){
        this.t_Dieta = t_Dieta;
        this.numComida = cms.length;
        for(let i = 0; i < cms.length; i++) { 
            this.comidas.push(cms[i]);
        }
        this.horasAyuno = horasAyuno;
        this.totalCalorias = totalCalorias;
        this.idNutricionista = idNutricionista;
        this.idCliente = idCliente;
    }
    
    

    /**
     * 
     * @returns Identificador del nutricionista
     * 
    */
    getIdNutricionista(): number{
        return this.idNutricionista;
    }    
    
    /**
     * 
     * @returns Identificador del cliente
     * 
    */
    getIdCliente(): number{
        return this.idCliente;
    }

    /**
     * 
     * @returns Array de objetos de la clase comidas a string a modo visual de la clase Prueba
     * 
    */
    comidasToString(): string{
        let mensaje = "";
        for(let i = 0; i < this.numComida; i++) { 
            mensaje += "\n"+ i + " " + this.comidas[i].to_String();
        }
        return mensaje;
    }
    

    /**
     * 
     * @param i Posicion del array a buscar
     * 
     * @returns Las grasas que tiene la comida del array en la posicion i
     * 
    */
    getGrasaComida(i: number): number{
        return this.comidas[i].grasas;
    }


    /**
     * 
     * @param i Posicion del array a buscar
     * 
     * @returns Los hidratos de carbono que tiene la comida del array en la posicion i
     * 
    */
    getHidratosComida(i: number): number{
        return this.comidas[i].hidratosCarbono;
    }

    /**
     * 
     * @param i Posicion del array a buscar
     * 
     * @returns Las proteinas que tiene la comida del array en la posicion i
     * 
    */
    getProteinaComida(i: number): number{
        return this.comidas[i].proteinas;
    }

    /**
     * 
     * @returns Devuelve todos los datos de un objeto creado de la clase Nutricionista, se usa a modo de comprobación.
     * 
    */
     getDatosDieta(): string{
        return `Tipo de dieta: ${this.t_Dieta}, \nComidas: ${this.comidasToString()}, Num_Comidas: ${this.numComida},Horas de ayuno: ${this.horasAyuno},\nTotal calorias: ${this.totalCalorias}, \nId_Cliente: ${this.idCliente}, \nId_Nutricionisat: ${this.idNutricionista}`
    }
}