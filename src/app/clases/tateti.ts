import { Juego } from '../clases/juego';


export class Tateti extends Juego{

    
    posiciones: Array<any>;
    jugador:string;
    i:number;
    j:number;
    jugadas:number;

    constructor(nombre?: string, gano?: boolean, jugador?:string, intentos?:any,resultado?:string) {
        super("Tateti", gano,jugador, intentos, resultado);  
      }

      generarTateti()
      {
        this.posiciones = [['-','-','-'],
        ['-','-','-'],
        ['-','-','-']];
        this.jugador = 'O';
        this.jugadas = 5;
        
      }

      reiniciar() {
        this.generarTateti();
        
        
      }

      generarAleatorio()
      {
        this.i = Math.floor((Math.random() * 3) +0);
        this.j = Math.floor((Math.random() * 3) +0);
      }

      validar()
      {
          if(this.posiciones[this.i][this.j] != "-")
            return true;
        return false;
      }


      eleccionMaquina()
      {
        do{
            this.generarAleatorio();
            console.log("i: " + this.i + " j: " + this.j);
        }while(this.validar() && this.jugadas>1);
        this.posiciones[this.i][this.j] = this.jugador;
        this.jugadas-=1;
        console.log(this.jugadas);
      }

      


      cambiarJugador() {
        if (this.jugador=='O')
        {
          this.jugador='X';
          
        }
          else
          this.jugador='O';    
      }


      
      

    verificar(){
        return true;
    }



}
