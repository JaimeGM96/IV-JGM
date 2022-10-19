

export abstract class Usuario{
    private nombre: string;
    private primerApellido: string;
    private segundoApellido: string;
    private DNI: string;
    private email: string;
    private password: string;


    /**
     * Crea un objeto de la clase Nutricionista.
     * @param nombre: Nombre del cliente de tipo string.
     * @param primerApellido: Primer apellido de tipo string.
     * @param segundoApellido: Segundo apellido de tipo string.
     * @param dni: Identificador del cliente de tipo string.
     * @param email: Correo.
    */
    constructor(nombre: string, primerApellido: string, segundoApellido: string, 
        dni: string, email: string, password: string){
        this.nombre = nombre;
        this.primerApellido = primerApellido;
        this.segundoApellido = segundoApellido;
        this.DNI = dni;
        this.email = email;
        this.password = password;
    }

    /**
     * 
     * @returns Nombre del usuario.
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
     * @returns Devuelve todos los datos de la clase Usuario.
     * 
     */
     getFichaCompleta(): string{
        return `Nombre: ${this.nombre} ${this.primerApellido} ${this.segundoApellido},\nDNI: ${this.DNI}, email: ${this.email}, contraseña: ${this.password}`
    }
}