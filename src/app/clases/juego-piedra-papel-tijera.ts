import { Juego } from '../clases/juego';


export class JuegoPiedraPapelTijera extends Juego {

    opcionMaquina:number;
    resultado = null;
    compu:string;
    gana:boolean;
    constructor(nombre?: string, gano?: boolean, jugador?:string, intentos?:any,resultado?:string) {
        super("Piedra, Papel o Tijera", gano,jugador, intentos, resultado);  
        this.opcionMaquina = null;
          }

        public verificar()
        {
                return true;
        
        }
        
        public eleccionMaquina()
        {
            this.opcionMaquina = Math.floor( Math.random()*3)+1;
            console.log("Esto es la opcion elegida " +this.opcionMaquina);
            var respuesta:string;
            
            switch(this.opcionMaquina)
            {
                case 1:
                    respuesta = "Piedra";
                    break;
                case 2:
                    respuesta = "Papel";
                    break;
                case 3:
                    respuesta = "Tijera";
                    break;
            }
            this.compu=respuesta;
            return respuesta;
        
        }


        public Jugar(opcionUsuario:string)
        {
            
           let maquina = this.eleccionMaquina();

            switch(opcionUsuario)
            {
                case "Piedra":
                    if(maquina == "Papel")
                    {
                        this.resultado = "Perdiste, la piedra es envuelta por el papel";
                        this.gana = false;
                    }
                        else
                        if(maquina =="Tijera")
                        {
                            this.resultado = "Ganaste, la piedra Rompe la Tijera";
                            this.gana = true;
                        }
                            else
                            this.resultado = "Empataron, ambos eligieron la Piedra";
                            this.gana = false;
                break;

                case "Papel":
                    if(maquina == "Tijera")
                    {
                        this.resultado = "Perdiste, la tijera corta el papel";
                        this.gana = false;
                    }
                        else
                        
                        if(maquina =="Piedra"){
                            this.resultado = "Ganaste, el papel envuelve la Piedra";
                            this.gana = true;
                        }
                        else
                            this.resultado = "Empataron, ambos eligieron Papel";
                            this.gana = false;
                break;

                case "Tijera":
                    if(maquina == "Piedra"){
                        this.resultado = "Perdiste, la piedra rompe la tijera";
                        this.gana = false;
                        
                    }
                        else
                        if(maquina =="papel")
                        {
                            this.resultado = "Ganaste, la tijera corta el papel";
                            this.gana = true;
                        }
                            else
                            this.resultado = "Empataron, ambos eligieron la tijera";
                            this.gana = false;
                break;
            }
            return this.resultado;
        }
}
