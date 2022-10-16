
export class Nutricionista{
    private nombre: string;
    private primerApellido: string;
    private segundoApellido: string;
    private DNI: string;
    private Id_Nutricionista: string;


    /**
     * Crea un objeto de la clase Nutricionista.
     * @param nombre: Nombre del cliente de tipo string.
     * @param primerApellido: Primer apellido de tipo string.
     * @param segundoApellido: Segundo apellido de tipo string.
     * @param dni: Identificador del cliente de tipo string.
     * @param id: Id_Nutricionista usado para identificar al nutricionista.
     * 
     * @returns Objeto de la clase Nutricionista con sus datos.
     * 
     */    
    constructor(nombre: string, primerApellido: string, segundoApellido: string, dni: string, id: string){
        this.nombre = nombre;
        this.primerApellido = primerApellido;
        this.segundoApellido = segundoApellido;
        this.DNI = dni;
        this.Id_Nutricionista = id;
    }

    /**
     * 
     * @returns Nombre del Nutricionista.
     * 
     */    
      getNombre(): string{
        return `${this.nombre}`;
    }

    /**
     * 
     * @returns Primer apellido.
     * 
     */ 
    getPrimerApellido(): string{
        return `${this.primerApellido}`;
    }

    /**
     * 
     * @returns Segundo apellido.
     * 
     */ 
    getSegundoApellido(): string{
        return `${this.segundoApellido}`;
    }

    /**
     * 
     * @returns DNI de tipo string
     * 
     */ 
    getDNI(): string{
        return `${this.DNI}`;
    }

    /**
     * Usado como identificador del nutricionista.
     * 
     * @returns Id_Nutricionista de tipo string
     * 
     */ 
     getIdNutricionista(): string{
        return `${this.Id_Nutricionista}`;
    }

    /**
     * 
     * @returns Devuelve todos los datos de un objeto creado de la clase Nutricionista, se usa a modo de comprobación.
     * 
     */
     getFichaCompleta(): string{
        return `Nombre: ${this.nombre} ${this.primerApellido} ${this.segundoApellido},\nDNI: ${this.DNI}, Id: ${this.Id_Nutricionista}`
    }

}