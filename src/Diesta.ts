
export class Dieta{

    private calorias: number;
    private numComida: number;
    private horasAyuno: number;
    private idNutricionista: number;
    private idCliente: number;
    
    /**
     * Crea un objeto de la clase Dietas.
     * @param calorias: Calorias consumidas en cal
     * @param numComida: Numero de comidas realizadas en un día.
     * @param horasAyuno: Horas seguidas sin comer en un día.
     * @param idNutricionista: Identificador del Nutricionista de tipo string.
     * @param idCliente: Identificador del cliente.
     * 
     * @returns Objeto de la clase Dietas.
     * 
     */    
     constructor(calorias: number, numComida: number, horasAyuno: number, idNutricionista: number, idCliente: number){
        this.calorias = calorias;
        this.numComida = numComida;
        this.horasAyuno = horasAyuno;
        this.idNutricionista = idNutricionista;
        this.idCliente = idCliente;
    }
    
    /**
     * 
     * @returns Calorias consumidas en cal
     * 
     */
    getCalorias(): number{
        return this.calorias;
    }    

    /**
     * 
     * @returns Numero de comidas realizadas en un día.
     * 
     */
    getNumComida(): number{
        return this.numComida;
    }

    /**
     * 
     * @returns Horas sin comer en día.
     * 
     */
    getHorasAyuno(): number{
        return this.horasAyuno;
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
     * @returns Devuelve todos los datos de un objeto creado de la clase Nutricionista, se usa a modo de comprobación.
     * 
     */
     getDatosDieta(): string{
        return `Calorias: ${this.calorias}, Num_Comidas: ${this.numComida}, Horas de ayuno: ${this.horasAyuno},\nId_Cliente: ${this.idNutricionista}, \nId_Nutricionisat: ${this.idCliente}`
    }
}