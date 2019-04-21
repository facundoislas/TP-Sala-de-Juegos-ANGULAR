import { Component, OnInit } from '@angular/core';
import {JuegoAdivinaProvincia} from '../../clases/juego-adivina-provincia'

@Component({
  selector: 'app-adivina-provincia',
  templateUrl: './adivina-provincia.component.html',
  styleUrls: ['./adivina-provincia.component.css']
})
export class AdivinaProvinciaComponent implements OnInit {


  nuevoJuego : JuegoAdivinaProvincia;
  ocultarVerificar : boolean;
  ocultarNuevo : boolean;
  Mensajes:string;
  nombre:string = "Adivina la Provincia"
  arrayResultados : Array<any>;
  jugador = JSON.parse(localStorage.getItem("Id"));
  intentos: number;

  constructor() {

    this.nuevoJuego = new JuegoAdivinaProvincia("Adivina La Provincia",false,this.jugador, 0, "00");
    this.ocultarVerificar = true;
    
    this.arrayResultados = JSON.parse(this.jugador);
    this.intentos = 0;
    console.info(this.arrayResultados);

   }

   public generar()
   {
     this.ocultarVerificar = false;
     this.nuevoJuego.generar();
     console.log(this.nuevoJuego.elementoAdivinar);
   }

   public verificar()
   {
    console.log(this.nuevoJuego.opcionIngresada);
    
    if(this.nuevoJuego.verificar())
      {
        this.MostarMensaje("Correcto. Acertaste la correcta!!",true);
        this.nuevoJuego.gano = true;
        this.nuevoJuego.nombre="Adivina La Provincia";
        this.nuevoJuego.jugador=sessionStorage.getItem('user');
        this.nuevoJuego.intentos = this.intentos+1;
        this.intentos=0;
        
        
      }
      else
        {
          if(this.intentos<3){
          this.nuevoJuego.gano = false;
          this.nuevoJuego.nombre="Adivina La Provincia";
          this.nuevoJuego.jugador=sessionStorage.getItem('user');
          this.MostarMensaje("Fallaste. La opcion elegida es incorrecta!!",false);
          this.intentos++;
          }
          this.nuevoJuego.intentos = this.intentos;
        }
        if(this.intentos == 3)
        {
          this.MostarMensaje("Fallaste. Ya llegaste al maximo de intentos!!",false);
          this.intentos = 0;
          
        }
        this.nuevoJuego.guardarLocal();
        
        //Despues de verificar si gane o no, reinicio el juego!!
        this.nuevoJuego = new JuegoAdivinaProvincia("Adivina La Provincia",false,this.jugador,0,"00");
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
  }

}
