export class Comida{

    hidratosCarbono: number;
    proteinas: number;
    grasas: number;

     /**
     * Constructor por parámetro de la clase.
     * 
     * @param hC: nº de hidratos que consume en cada comida.
     * @param proteina: nº de proteinas que consume en cada comida.
     * @param grasas: nº de grasas que consume en cada comida

     * @returns Objeto de la clase Comida
     * 
     */    
    constructor(hC: number, proteina: number, grasas: number){
        this.hidratosCarbono = hC;
        this.proteinas = proteina;
        this.grasas = grasas;
    }

    to_String(): string{
        return `Hidratos de carbono: ${this.hidratosCarbono}, proteinas: ${this.proteinas}, grasas: ${this.grasas}`;
    }
}