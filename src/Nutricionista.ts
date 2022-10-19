import { Usuario } from './Usuario';
export class Nutricionista extends Usuario{

    private Id_Nutricionista: number;


    /**
     * Crea un objeto de la clase Nutricionista.
     * @param nombre: Nombre del cliente de tipo string.
     * @param primerApellido: Primer apellido de tipo string.
     * @param segundoApellido: Segundo apellido de tipo string.
     * @param dni: Identificador del cliente de tipo string.
     * @param email: Correo.
     * @param password: Contraseña del nutricionista.
     * @param id: Id_Nutricionista usado para identificar al nutricionista.
     * 
     * @returns Objeto de la clase Nutricionista con sus datos.
     * 
     */    
    constructor(id: number, nombre: string, primerApellido: string, segundoApellido: string, dni: string, 
        email: string, password: string){
        super(nombre, primerApellido, segundoApellido, dni, email, password)
        this.Id_Nutricionista = id;
    }


    /**
     * Usado como identificador del nutricionista.
     * 
     * @returns Id_Nutricionista de tipo string
     * 
     */ 
     getIdNutricionista(): number{
        return this.Id_Nutricionista;
    }

    /**
     * 
     * Llama a la clase padre (Usuario), para obtener los datos básicos más lo de esta clase
     * 
     * @returns Devuelve todos los datos de la clase Nutricionista.
     * 
     */
    getFichaCompleta(): string{
        return super.getFichaCompleta() + ` id_nutricionista: ${this.Id_Nutricionista}`;
    }

}