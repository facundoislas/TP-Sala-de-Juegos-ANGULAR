import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  logueado:boolean;

  

  constructor( public auth : AuthService,
           private router: Router,
           private route: ActivatedRoute
           ) {
            const session = sessionStorage.getItem('user');
    

            if(session==null)
            {
            this.logueado=false;
            }
            else{
            this.logueado=true;  
            }
            }

    cerrarSesion(){
      
      this.auth.logout();
      sessionStorage.clear();
      this.logueado=false;
      alert("Se cierra Sesion");
      console.log("Se cierra sesion");
    }

  ngOnInit() {
  }

}
