

export class Cliente {

    private nombre: string;
    private primerApellido: string;
    private segundoApellido: string;
    private DNI: string;
    private edad: number;
    private genero: boolean;
    private altura: number;
    private peso: number;
    private cintura: number;
    private cuello: number;


    /**
     * Crea un objeto de la clase Cliente.
     * @param nombre: Nombre del cliente de tipo string.
     * @param primerApellido: Primer apellido de tipo string.
     * @param segundoApellido: Segundo apellido de tipo string.
     * @param dni: Identificador del cliente de tipo string.
     * @param edad: Edad del cliente de tipo number.
     * @param genero: Género del cliente, se tiene como 0 o 1.
     * @param altura: Altura en cm.
     * @param peso: Peso en Kg.
     * @param cintura: Medida cintura en cm.
     * @param cuello: Medida cuello en cm.
     * 
     * @returns Objeto de la clase Cliente con todos sus datos personales.
     * 
     */    
    constructor(nombre: string, primerApellido: string, segundoApellido: string, dni: string,
        edad: number, genero: boolean, altura: number, peso: number, cintura: number, cuello: number) {
        this.nombre = nombre;
        this.primerApellido = primerApellido;
        this.segundoApellido = segundoApellido;
        this.DNI = dni;
        this.edad = edad;
        this.genero = genero;
        this.altura = altura;
        this.peso = peso;
        this.cintura = cintura;
        this.cuello = cuello;
    }
    

    /**
     * 
     * @returns Nombre del cliente.
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
     * 
     * @returns Edad.
     * 
     */     
    getEdad(): number{
        return this.edad;
    }
    
    /**
     * 
     * @returns Género en boolean.
     * 
     */ 
    getGenero(): boolean{
        return this.genero;
    }


    /**
     * 
     * @returns Altura en cm.
     * 
     */ 
    getAltura(): number{
        return this.altura;
    }

    /**
     * 
     * @returns Peso en Kg.
     * 
     */ 
    getPeso(): number{
        return this.peso;
    }

    /**
     * 
     * @returns Medida cintura en cm
     * 
     */
    getCintura(): number{
        return this.cintura;
    }

    /**
     * 
     * @returns Medida cuello en cm
     * 
     */
    getCuello(): number{
        return this.cuello;
    }

    /**
     * 
     * @returns Devuelve todos los datos de un objeto creado de la clase Cliente, se usa a modo de comprobación.
     * 
     */
    getFichaCompleta(): string{
        return `Nombre: ${this.nombre} ${this.primerApellido} ${this.segundoApellido},\nDNI: ${this.DNI}, \nedad: ${this.edad}, \naltura: ${this.altura},\ngenero: ${this.genero}, \npeso: ${this.peso}, \ncintura: ${this.cintura}, \ncuello: ${this.cuello}`
    }

}

