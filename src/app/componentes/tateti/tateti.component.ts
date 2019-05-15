import { Component, OnInit } from '@angular/core';
import {Tateti} from '../../clases/tateti';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {

  
  nuevoJuego: Tateti;
  Mensajes:string;
  ocultarVerificar:boolean;
  arrayResultados : Array<any>;
  jugadorL = JSON.parse(localStorage.getItem("Id"));
  intentos: number;

  constructor() {
    this.nuevoJuego = new Tateti("Tateti",false, this.jugadorL,0, "0"); 
    this.ocultarVerificar = true;
    this.arrayResultados = JSON.parse(this.jugadorL);
  }

  public generar()
  {
    this.ocultarVerificar = false;
    this.nuevoJuego.generarTateti();
    
  }

  
  presion(fila:number,columna:number) {
    if (this.nuevoJuego.posiciones[fila][columna]=='-' && this.nuevoJuego.jugadas>0) {
      
      this.nuevoJuego.posiciones[fila][columna]=this.nuevoJuego.jugador;
      this.nuevoJuego.cambiarJugador();
      this.nuevoJuego.eleccionMaquina();
      this.nuevoJuego.cambiarJugador();
        this.verificarGano('O');
      this.verificarGano('X');
      
      
    }
  }

  

  
 

  verificarGano(ficha: string,) {
    if (this.nuevoJuego.posiciones[0][0]==ficha && this.nuevoJuego.posiciones[0][1]==ficha && this.nuevoJuego.posiciones[0][2]==ficha)
      {
       
        if(ficha == "O")
        {
          this.MostarMensaje("Ganaste! Ahora empieza un nuevo juego",true);
        }
        this.nuevoJuego.reiniciar();  
      }
    if (this.nuevoJuego.posiciones[1][0]==ficha && this.nuevoJuego.posiciones[1][1]==ficha && this.nuevoJuego.posiciones[1][2]==ficha)
    {
      
      if(ficha == "O")
        {
          this.MostarMensaje("Ganaste! Ahora empieza un nuevo juego",true);
        }
      this.nuevoJuego.reiniciar();  
    }
    if (this.nuevoJuego.posiciones[2][0]==ficha && this.nuevoJuego.posiciones[2][1]==ficha && this.nuevoJuego.posiciones[2][2]==ficha)
    {
   
      if(ficha == "O")
        {
          this.MostarMensaje("Ganaste! Ahora empieza un nuevo juego",true);
        }
      this.nuevoJuego.reiniciar();  
    }
    if (this.nuevoJuego.posiciones[0][0]==ficha && this.nuevoJuego.posiciones[1][0]==ficha && this.nuevoJuego.posiciones[2][0]==ficha)
    {
   
      if(ficha == "O")
        {
          this.MostarMensaje("Ganaste! Ahora empieza un nuevo juego",true);
        }
      this.nuevoJuego.reiniciar();  
    }
    if (this.nuevoJuego.posiciones[0][1]==ficha && this.nuevoJuego.posiciones[1][1]==ficha && this.nuevoJuego.posiciones[2][1]==ficha)
    {
      
      if(ficha == "O")
        {
          this.MostarMensaje("Ganaste! Ahora empieza un nuevo juego",true);
        }
      this.nuevoJuego.reiniciar();  
    }
    if (this.nuevoJuego.posiciones[0][2]==ficha && this.nuevoJuego.posiciones[1][2]==ficha && this.nuevoJuego.posiciones[2][2]==ficha)
    {
      
      if(ficha == "O")
        {
          this.MostarMensaje("Ganaste! Ahora empieza un nuevo juego",true);
        }
      this.nuevoJuego.reiniciar();  
    }      
    if (this.nuevoJuego.posiciones[0][0]==ficha && this.nuevoJuego.posiciones[1][1]==ficha && this.nuevoJuego.posiciones[2][2]==ficha)
    {
      
      if(ficha == "O")
        {
          this.MostarMensaje("Ganaste! Ahora empieza un nuevo juego",true);
        }
      this.nuevoJuego.reiniciar();  
    }
    if (this.nuevoJuego.posiciones[0][2]==ficha && this.nuevoJuego.posiciones[1][1]==ficha && this.nuevoJuego.posiciones[2][0]==ficha)
    {
      
      if(ficha == "O")
        {
          this.MostarMensaje("Ganaste! Ahora empieza un nuevo juego",true);
        }
      this.nuevoJuego.reiniciar();  
    }      
  }

  MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean=false) {
    this.Mensajes=mensaje;    
    var x = document.getElementById("snackbar");
    if(ganador)
      {
        x.className = "show Ganador";
      }else{
        x.className = "show Perdedor";
      }
    var modelo=this;
    setTimeout(function(){ 
      x.className = x.className.replace("show", "");
      modelo.ocultarVerificar=false;
     }, 3000);
    console.info("objeto",x);
  
   }
  

  ngOnInit() {

    this.nuevoJuego.generarTateti();
  }

}
