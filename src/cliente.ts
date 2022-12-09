
import { Usuario } from './usuario';
export class Cliente extends Usuario{


    edad: number;
    readonly genero: boolean;
    altura: number;
    private peso: number;
    private cintura: number;
    private cuello: number;
    private idCliente: number;


    /**
     * Crea un objeto de la clase Cliente.
     * @param idCliente: Identificador del cliente.
     * @param nombre: Nombre del cliente de tipo string.
     * @param primerApellido: Primer apellido de tipo string.
     * @param segundoApellido: Segundo apellido de tipo string.
     * @param dni: Identificador del cliente de tipo string.
     * @param email: Correo.
     * @param password: Contraseña del nutricionista.
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
    constructor(idCliente: number, nombre: string, primerApellido: string, segundoApellido: string, dni: string,
        email: string, password: string, edad: number, genero: boolean, altura: number, peso: number, cintura: number, cuello: number) {
        super(nombre, primerApellido, segundoApellido, dni, email, password)
        this.idCliente = idCliente;
        this.edad = edad;
        this.genero = genero;
        this.altura = altura;
        this.peso = peso;
        this.cintura = cintura;
        this.cuello = cuello;
    }
    
    /**
     * 
     * @returns Edad.
     * 
     */     
      getIdCliente(): number{
        return this.idCliente;
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
     * Llama a la clase padre (Usuario), para obtener los datos básicos más lo de esta clase
     * 
     * @returns Devuelve todos los datos de la clase Cliente.
     * 
     */
    getFichaCompleta(): string{
        return `Id cliente: ${this.idCliente}\n ` + super.getFichaCompleta() + ` edad: ${this.edad}, peso: ${this.peso}, \naltura ${this.altura}, genero: ${this.genero}, \ncintura: ${this.cintura}, cuello ${this.cuello}`;
    }

}

