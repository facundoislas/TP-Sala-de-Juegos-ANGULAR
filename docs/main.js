(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--Donde se encuentre este tag, se instancian los componentes dependientes del ruteo-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/adivina-el-numero/adivina-el-numero.component */ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var _componentes_listado_de_resultados_listado_de_resultados_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentes/listado-de-resultados/listado-de-resultados.component */ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts");
/* harmony import */ var _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./componentes/login/login.component */ "./src/app/componentes/login/login.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _servicios_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./servicios/mi-http/mi-http.service */ "./src/app/servicios/mi-http/mi-http.service.ts");
/* harmony import */ var _servicios_paises_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./servicios/paises.service */ "./src/app/servicios/paises.service.ts");
/* harmony import */ var _servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./servicios/jugadores.service */ "./src/app/servicios/jugadores.service.ts");
/* harmony import */ var _servicios_archivos_jugadores_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./servicios/archivos-jugadores.service */ "./src/app/servicios/archivos-jugadores.service.ts");
/* harmony import */ var _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./componentes/error/error.component */ "./src/app/componentes/error/error.component.ts");
/* harmony import */ var _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./componentes/principal/principal.component */ "./src/app/componentes/principal/principal.component.ts");
/* harmony import */ var _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./componentes/agilidad-aritmetica/agilidad-aritmetica.component */ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var _componentes_menu_menu_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./componentes/menu/menu.component */ "./src/app/componentes/menu/menu.component.ts");
/* harmony import */ var _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./componentes/adivina-mas-listado/adivina-mas-listado.component */ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts");
/* harmony import */ var _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./componentes/agilidad-mas-listado/agilidad-mas-listado.component */ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts");
/* harmony import */ var _ruteando_ruteando_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ruteando/ruteando.module */ "./src/app/ruteando/ruteando.module.ts");
/* harmony import */ var _componentes_listado_listado_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./componentes/listado/listado.component */ "./src/app/componentes/listado/listado.component.ts");
/* harmony import */ var _componentes_jugadores_listado_jugadores_listado_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./componentes/jugadores-listado/jugadores-listado.component */ "./src/app/componentes/jugadores-listado/jugadores-listado.component.ts");
/* harmony import */ var _servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./servicios/juego-service.service */ "./src/app/servicios/juego-service.service.ts");
/* harmony import */ var _componentes_listados_listados_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./componentes/listados/listados.component */ "./src/app/componentes/listados/listados.component.ts");
/* harmony import */ var _componentes_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./componentes/juegos/juegos.component */ "./src/app/componentes/juegos/juegos.component.ts");
/* harmony import */ var _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./componentes/registro/registro.component */ "./src/app/componentes/registro/registro.component.ts");
/* harmony import */ var _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./componentes/menu-card/menu-card.component */ "./src/app/componentes/menu-card/menu-card.component.ts");
/* harmony import */ var _componentes_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./componentes/cabecera/cabecera.component */ "./src/app/componentes/cabecera/cabecera.component.ts");
/* harmony import */ var _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./componentes/quien-soy/quien-soy.component */ "./src/app/componentes/quien-soy/quien-soy.component.ts");
/* harmony import */ var _componentes_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./componentes/anagrama/anagrama.component */ "./src/app/componentes/anagrama/anagrama.component.ts");
/* harmony import */ var _componentes_listado_de_paises_listado_de_paises_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./componentes/listado-de-paises/listado-de-paises.component */ "./src/app/componentes/listado-de-paises/listado-de-paises.component.ts");
/* harmony import */ var _componentes_mapa_de_google_mapa_de_google_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./componentes/mapa-de-google/mapa-de-google.component */ "./src/app/componentes/mapa-de-google/mapa-de-google.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _componentes_input_jugadores_input_jugadores_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./componentes/input-jugadores/input-jugadores.component */ "./src/app/componentes/input-jugadores/input-jugadores.component.ts");
/* harmony import */ var _pipes_sexo_pipe__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pipes/sexo.pipe */ "./src/app/pipes/sexo.pipe.ts");
/* harmony import */ var _componentes_home_home_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./componentes/home/home.component */ "./src/app/componentes/home/home.component.ts");
/* harmony import */ var _componentes_menu_principal_menu_principal_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./componentes/menu-principal/menu-principal.component */ "./src/app/componentes/menu-principal/menu-principal.component.ts");
/* harmony import */ var _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./componentes/footer/footer.component */ "./src/app/componentes/footer/footer.component.ts");








//  import {NgbModule} from '@ng-bootstrap/ng-bootstrap';













// declaro donde quiero que se dirija
/*
const MiRuteo = [{path: 'error' , component: ErrorComponent},
{path: 'Login' , component: LoginComponent},
{path: 'Principal' , component: PrincipalComponent , pathMatch: 'full'},
{path: 'Adivina' , component: AdivinaElNumeroComponent},
{path: 'AdivinaMasListado' , component: AdivinaMasListadoComponent},
{path: 'AgilidadaMasListado' , component: AgilidadMasListadoComponent},
{path: 'Agilidad' , component: AgilidadAritmeticaComponent},
{path: '' , component: LoginComponent , pathMatch: 'full'},

{path: '**' , component: ErrorComponent} ];
*/

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_5__["AdivinaElNumeroComponent"],
                _componentes_listado_de_resultados_listado_de_resultados_component__WEBPACK_IMPORTED_MODULE_6__["ListadoDeResultadosComponent"],
                _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_13__["ErrorComponent"],
                _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_14__["PrincipalComponent"],
                _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_15__["AgilidadAritmeticaComponent"],
                _componentes_menu_menu_component__WEBPACK_IMPORTED_MODULE_16__["MenuComponent"],
                _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_17__["AdivinaMasListadoComponent"],
                _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_18__["AgilidadMasListadoComponent"],
                _componentes_listado_listado_component__WEBPACK_IMPORTED_MODULE_20__["ListadoComponent"],
                _componentes_listados_listados_component__WEBPACK_IMPORTED_MODULE_23__["ListadosComponent"],
                _componentes_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_24__["JuegosComponent"],
                _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_25__["RegistroComponent"],
                _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_26__["MenuCardComponent"],
                _componentes_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_27__["CabeceraComponent"],
                _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_28__["QuienSoyComponent"],
                _componentes_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_29__["AnagramaComponent"],
                _componentes_listado_de_paises_listado_de_paises_component__WEBPACK_IMPORTED_MODULE_30__["ListadoDePaisesComponent"],
                _componentes_mapa_de_google_mapa_de_google_component__WEBPACK_IMPORTED_MODULE_31__["MapaDeGoogleComponent"],
                _componentes_jugadores_listado_jugadores_listado_component__WEBPACK_IMPORTED_MODULE_21__["JugadoresListadoComponent"],
                _componentes_input_jugadores_input_jugadores_component__WEBPACK_IMPORTED_MODULE_33__["InputJugadoresComponent"],
                _pipes_sexo_pipe__WEBPACK_IMPORTED_MODULE_34__["SexoPipe"],
                _componentes_home_home_component__WEBPACK_IMPORTED_MODULE_35__["HomeComponent"],
                _componentes_menu_principal_menu_principal_component__WEBPACK_IMPORTED_MODULE_36__["MenuPrincipalComponent"],
                _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_37__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ruteando_ruteando_module__WEBPACK_IMPORTED_MODULE_19__["RuteandoModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_32__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyB6f8x4IjRlesQ3oETc6BXYQHVRTOlY3Ys'
                })
                // NgbModule.forRoot(MiRuteo),
                // importo el ruteo
                // RouterModule.forRoot(MiRuteo)
            ],
            providers: [_servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_22__["JuegoServiceService"], _servicios_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_9__["MiHttpService"], _servicios_paises_service__WEBPACK_IMPORTED_MODULE_10__["PaisesService"], _servicios_archivos_jugadores_service__WEBPACK_IMPORTED_MODULE_12__["ArchivosJugadoresService"], _servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_11__["JugadoresService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/clases/juego-adivina.ts":
/*!*****************************************!*\
  !*** ./src/app/clases/juego-adivina.ts ***!
  \*****************************************/
/*! exports provided: JuegoAdivina */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoAdivina", function() { return JuegoAdivina; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _clases_juego__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../clases/juego */ "./src/app/clases/juego.ts");


var JuegoAdivina = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](JuegoAdivina, _super);
    function JuegoAdivina(nombre, gano, jugador) {
        var _this = _super.call(this, "Adivina el número", gano, jugador) || this;
        _this.numeroSecreto = 0;
        _this.numeroIngresado = 0;
        return _this;
    }
    JuegoAdivina.prototype.verificar = function () {
        if (this.numeroIngresado == this.numeroSecreto) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    };
    JuegoAdivina.prototype.generarnumero = function () {
        this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
        console.info('numero Secreto:' + this.numeroSecreto);
        this.gano = false;
    };
    JuegoAdivina.prototype.retornarAyuda = function () {
        if (this.numeroIngresado < this.numeroSecreto) {
            return "Falta";
        }
        return "Te pasate";
    };
    return JuegoAdivina;
}(_clases_juego__WEBPACK_IMPORTED_MODULE_1__["Juego"]));



/***/ }),

/***/ "./src/app/clases/juego-agilidad.ts":
/*!******************************************!*\
  !*** ./src/app/clases/juego-agilidad.ts ***!
  \******************************************/
/*! exports provided: JuegoAgilidad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoAgilidad", function() { return JuegoAgilidad; });
var JuegoAgilidad = /** @class */ (function () {
    function JuegoAgilidad() {
    }
    return JuegoAgilidad;
}());



/***/ }),

/***/ "./src/app/clases/juego.ts":
/*!*********************************!*\
  !*** ./src/app/clases/juego.ts ***!
  \*********************************/
/*! exports provided: Juego */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Juego", function() { return Juego; });
var Juego = /** @class */ (function () {
    function Juego(nombre, gano, jugador) {
        this.nombre = 'Sin Nombre';
        this.gano = false;
        if (nombre)
            this.nombre = nombre;
        if (gano)
            this.gano = gano;
        if (jugador)
            this.jugador = jugador;
        else
            this.jugador = "natalia natalia";
    }
    Juego.prototype.retornarAyuda = function () {
        return "NO hay Ayuda definida";
    };
    return Juego;
}());



/***/ }),

/***/ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/componentes/adivina-el-numero/adivina-el-numero.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nform {\n    border: 10px solid #f1f1f1;\n    padding: 10px;\n    background:gray;\n}\n\ninput[type=text], input[type=password] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n}\n\nbutton {\n    /*background-color: #4CAF50;*/\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n}\n\nbutton:hover {\n    opacity: 0.8;\n}\n\n.cancelbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #f44336;\n}\n\n.aceptbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #3664F4;\n}\n\n.imgcontainer {\n    text-align: center;\n    margin: 24px 0 12px 0;\n}\n\nimg.avatar {\n    width: 40%;\n    border-radius: 50%;\n}\n\n.container {\n    padding: 16px;\n}\n\nspan.psw {\n    float: right;\n    padding-top: 16px;\n}\n\n/* Change styles for span and cancel button on extra small screens */\n\n@media screen and (max-width: 300px) {\n    span.psw {\n       display: block;\n       float: none;\n    }\n    .cancelbtn {\n       width: 100%;\n    }\n}\n\n#snackbar {\n    visibility: hidden;\n    min-width: 250px;\n    margin-left: -125px;\n   \n    color: #fff;\n    text-align: center;\n    border-radius: 2px;\n    padding: 16px;\n    position: fixed;\n    z-index: 1;\n    left: 50%;\n    bottom: 30px;\n    font-size: 17px;\n}\n\n#snackbar.Ganador {\n    background-color: #059F2F;\n}\n\n#snackbar.Perdedor {\n    background-color: #FF0000;\n}\n\n#snackbar.show {\n    visibility: visible;\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\n}\n\n@-webkit-keyframes fadein {\n    from {bottom: 0; opacity: 0;} \n    to {bottom: 30px; opacity: 1;}\n}\n\n@keyframes fadein {\n    from {bottom: 0; opacity: 0;}\n    to {bottom: 30px; opacity: 1;}\n}\n\n@-webkit-keyframes fadeout {\n    from {bottom: 30px; opacity: 1;} \n    to {bottom: 0; opacity: 0;}\n}\n\n@keyframes fadeout {\n    from {bottom: 30px; opacity: 1;}\n    to {bottom: 0; opacity: 0;}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvYWRpdmluYS1lbC1udW1lcm8vYWRpdmluYS1lbC1udW1lcm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQSxvRUFBb0U7O0FBQ3BFO0lBQ0k7T0FDRyxjQUFjO09BQ2QsV0FBVztJQUNkO0lBQ0E7T0FDRyxXQUFXO0lBQ2Q7QUFDSjs7QUFJQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1COztJQUVuQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLFVBQVU7SUFDVixTQUFTO0lBQ1QsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsaURBQWlEO0lBQ2pELHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLE1BQU0sU0FBUyxFQUFFLFVBQVUsQ0FBQztJQUM1QixJQUFJLFlBQVksRUFBRSxVQUFVLENBQUM7QUFDakM7O0FBRUE7SUFDSSxNQUFNLFNBQVMsRUFBRSxVQUFVLENBQUM7SUFDNUIsSUFBSSxZQUFZLEVBQUUsVUFBVSxDQUFDO0FBQ2pDOztBQUVBO0lBQ0ksTUFBTSxZQUFZLEVBQUUsVUFBVSxDQUFDO0lBQy9CLElBQUksU0FBUyxFQUFFLFVBQVUsQ0FBQztBQUM5Qjs7QUFFQTtJQUNJLE1BQU0sWUFBWSxFQUFFLFVBQVUsQ0FBQztJQUMvQixJQUFJLFNBQVMsRUFBRSxVQUFVLENBQUM7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9hZGl2aW5hLWVsLW51bWVyby9hZGl2aW5hLWVsLW51bWVyby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5mb3JtIHtcbiAgICBib3JkZXI6IDEwcHggc29saWQgI2YxZjFmMTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6Z3JheTtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJ1dHRvbiB7XG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwOyovXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC44O1xufVxuXG4uY2FuY2VsYnRuIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4IDE4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbn1cbi5hY2VwdGJ0biB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgcGFkZGluZzogMTBweCAxOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjY0RjQ7XG59XG4uaW1nY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAyNHB4IDAgMTJweCAwO1xufVxuXG5pbWcuYXZhdGFyIHtcbiAgICB3aWR0aDogNDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTZweDtcbn1cblxuc3Bhbi5wc3cge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcbn1cblxuLyogQ2hhbmdlIHN0eWxlcyBmb3Igc3BhbiBhbmQgY2FuY2VsIGJ1dHRvbiBvbiBleHRyYSBzbWFsbCBzY3JlZW5zICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xuICAgIHNwYW4ucHN3IHtcbiAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICBmbG9hdDogbm9uZTtcbiAgICB9XG4gICAgLmNhbmNlbGJ0biB7XG4gICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG5cblxuI3NuYWNrYmFyIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICBtYXJnaW4tbGVmdDogLTEyNXB4O1xuICAgXG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBib3R0b206IDMwcHg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuI3NuYWNrYmFyLkdhbmFkb3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTlGMkY7XG59XG4jc25hY2tiYXIuUGVyZGVkb3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDA7XG59XG4jc25hY2tiYXIuc2hvdyB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xuICAgIGFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHtcbiAgICBmcm9tIHtib3R0b206IDA7IG9wYWNpdHk6IDA7fSBcbiAgICB0byB7Ym90dG9tOiAzMHB4OyBvcGFjaXR5OiAxO31cbn1cblxuQGtleWZyYW1lcyBmYWRlaW4ge1xuICAgIGZyb20ge2JvdHRvbTogMDsgb3BhY2l0eTogMDt9XG4gICAgdG8ge2JvdHRvbTogMzBweDsgb3BhY2l0eTogMTt9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlb3V0IHtcbiAgICBmcm9tIHtib3R0b206IDMwcHg7IG9wYWNpdHk6IDE7fSBcbiAgICB0byB7Ym90dG9tOiAwOyBvcGFjaXR5OiAwO31cbn1cblxuQGtleWZyYW1lcyBmYWRlb3V0IHtcbiAgICBmcm9tIHtib3R0b206IDMwcHg7IG9wYWNpdHk6IDE7fVxuICAgIHRvIHtib3R0b206IDA7IG9wYWNpdHk6IDA7fVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/componentes/adivina-el-numero/adivina-el-numero.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--app-menu></app-menu-->\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<div style=\"text-align:center\">\n  <h1>\n    {{nuevoJuego.nombre}}!\n  </h1>\n </div>\n<h2></h2>\n<form name=\"juego\">\n\n   <label>ingrese numero:  </label>  <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\"/>\n    <h1>{{nuevoJuego.numeroIngresado}}  </h1>\n \n    <h2 [hidden]=\"ocultarVerificar\"><button  *ngIf=\"nuevoJuego.numeroSecreto!=0\" (click)=\"verificar()\" class=\"btn btn-success btn-lg\">Verificar</button></h2>\n \n    <h2><button *ngIf=\"nuevoJuego.numeroSecreto==0 \" (click)=\"generarnumero()\"  class=\"btn btn-info btn-lg\">Nuevo número secreto</button></h2>\n \n    <h2><p *ngIf=\"nuevoJuego.numeroSecreto!=0\" ><i class=\"fa fa-spinner fa-spin\"></i>Esperando que ingrese un número</p></h2>\n\n    <h3 [hidden]=\"!nuevoJuego.gano\">usted adivino el número</h3>\n    <h3 [hidden]=\"nuevoJuego.gano\">usted aún no gano </h3>\n\n\n</form>\n<div id=\"snackbar\">{{Mensajes}}</div>"

/***/ }),

/***/ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts ***!
  \******************************************************************************/
/*! exports provided: AdivinaElNumeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdivinaElNumeroComponent", function() { return AdivinaElNumeroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../clases/juego-adivina */ "./src/app/clases/juego-adivina.ts");



var AdivinaElNumeroComponent = /** @class */ (function () {
    function AdivinaElNumeroComponent() {
        this.enviarJuego = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nuevoJuego = new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]();
        console.info("numero Secreto:", this.nuevoJuego.numeroSecreto);
        this.ocultarVerificar = false;
    }
    AdivinaElNumeroComponent.prototype.generarnumero = function () {
        this.nuevoJuego.generarnumero();
        this.contador = 0;
    };
    AdivinaElNumeroComponent.prototype.verificar = function () {
        this.contador++;
        this.ocultarVerificar = true;
        console.info("numero Secreto:", this.nuevoJuego.gano);
        if (this.nuevoJuego.verificar()) {
            this.enviarJuego.emit(this.nuevoJuego);
            this.MostarMensaje("Sos un Genio!!!", true);
            this.nuevoJuego.numeroSecreto = 0;
        }
        else {
            var mensaje = void 0;
            switch (this.contador) {
                case 1:
                    mensaje = "No, intento fallido, animo";
                    break;
                case 2:
                    mensaje = "No,Te estaras Acercando???";
                    break;
                case 3:
                    mensaje = "No es, Yo crei que la tercera era la vencida.";
                    break;
                case 4:
                    mensaje = "No era el  " + this.nuevoJuego.numeroIngresado;
                    break;
                case 5:
                    mensaje = " intentos y nada.";
                    break;
                case 6:
                    mensaje = "Afortunado en el amor";
                    break;
                default:
                    mensaje = "Ya le erraste " + this.contador + " veces";
                    break;
            }
            this.MostarMensaje("#" + this.contador + " " + mensaje + " ayuda :" + this.nuevoJuego.retornarAyuda());
        }
        console.info("numero Secreto:", this.nuevoJuego.gano);
    };
    AdivinaElNumeroComponent.prototype.MostarMensaje = function (mensaje, ganador) {
        if (mensaje === void 0) { mensaje = "este es el mensaje"; }
        if (ganador === void 0) { ganador = false; }
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (ganador) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
            modelo.ocultarVerificar = false;
        }, 3000);
        console.info("objeto", x);
    };
    AdivinaElNumeroComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AdivinaElNumeroComponent.prototype, "enviarJuego", void 0);
    AdivinaElNumeroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adivina-el-numero',
            template: __webpack_require__(/*! ./adivina-el-numero.component.html */ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.html"),
            styles: [__webpack_require__(/*! ./adivina-el-numero.component.css */ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdivinaElNumeroComponent);
    return AdivinaElNumeroComponent;
}());



/***/ }),

/***/ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FkaXZpbmEtbWFzLWxpc3RhZG8vYWRpdmluYS1tYXMtbGlzdGFkby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-adivina-el-numero (enviarJuego)=\"tomarJuegoTerminado($event)\">   </app-adivina-el-numero> \n<h1> listado </h1>\n<app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>\n\n"

/***/ }),

/***/ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AdivinaMasListadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdivinaMasListadoComponent", function() { return AdivinaMasListadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdivinaMasListadoComponent = /** @class */ (function () {
    function AdivinaMasListadoComponent() {
        this.listadoParaCompartir = new Array();
    }
    AdivinaMasListadoComponent.prototype.ngOnInit = function () {
    };
    AdivinaMasListadoComponent.prototype.tomarJuegoTerminado = function (juego) {
        this.listadoParaCompartir.push(juego);
        // console.info("en app",this.listadoParaCompartir);
    };
    AdivinaMasListadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adivina-mas-listado',
            template: __webpack_require__(/*! ./adivina-mas-listado.component.html */ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.html"),
            styles: [__webpack_require__(/*! ./adivina-mas-listado.component.css */ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdivinaMasListadoComponent);
    return AdivinaMasListadoComponent;
}());



/***/ }),

/***/ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FnaWxpZGFkLWFyaXRtZXRpY2EvYWdpbGlkYWQtYXJpdG1ldGljYS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--app-menu></app-menu-->\n<!-- index.html -->\n\n\n<form name=\"juego\">\n<ul>\n   <li>\n   Primer número: <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\" readonly/>\n  \n  </li>\n  <li>\n   Operador: <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\" readonly/>\n    \n  </li>\n  <li>\n   Segundo número: <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\" readonly/>\n    \n  </li>\n  <li>\n    Respuesta: <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\"/>\n     \n   </li>\n  <li>\n    <h2 [hidden]=\"ocultarVerificar\" ><button (click)=\"verificar()\" class=\"btn btn-success btn-lg\">Verificar {{Tiempo}} </button></h2>\n  </li>\n  <li>\n    <h2 [hidden]=\"!ocultarVerificar\"><button  (click)=\"NuevoJuego()\"  class=\"btn btn-info btn-lg\">Nuevo</button></h2>\n  </li>\n  <li>\n    <h2><p><i class=\"fa fa-spinner fa-spin\"></i>Esperando numero...</p></h2>\n\n    <h3 [hidden]=\"!nuevoJuego.gano\">usted adivino el número</h3>\n    <h3 [hidden]=\"nuevoJuego.gano\">usted aún no gano </h3>\n  </li>\n</ul>\n\n</form>"

/***/ }),

/***/ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AgilidadAritmeticaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgilidadAritmeticaComponent", function() { return AgilidadAritmeticaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _clases_juego_agilidad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../clases/juego-agilidad */ "./src/app/clases/juego-agilidad.ts");



var AgilidadAritmeticaComponent = /** @class */ (function () {
    function AgilidadAritmeticaComponent() {
        this.enviarJuego = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ocultarVerificar = true;
        this.Tiempo = 5;
        this.nuevoJuego = new _clases_juego_agilidad__WEBPACK_IMPORTED_MODULE_2__["JuegoAgilidad"]();
        console.info("Inicio agilidad");
    }
    AgilidadAritmeticaComponent.prototype.ngOnInit = function () {
    };
    AgilidadAritmeticaComponent.prototype.NuevoJuego = function () {
        var _this = this;
        this.ocultarVerificar = false;
        this.repetidor = setInterval(function () {
            _this.Tiempo--;
            console.log("llego", _this.Tiempo);
            if (_this.Tiempo == 0) {
                clearInterval(_this.repetidor);
                _this.verificar();
                _this.ocultarVerificar = true;
                _this.Tiempo = 5;
            }
        }, 900);
    };
    AgilidadAritmeticaComponent.prototype.verificar = function () {
        this.ocultarVerificar = false;
        clearInterval(this.repetidor);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AgilidadAritmeticaComponent.prototype, "enviarJuego", void 0);
    AgilidadAritmeticaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-agilidad-aritmetica',
            template: __webpack_require__(/*! ./agilidad-aritmetica.component.html */ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html"),
            styles: [__webpack_require__(/*! ./agilidad-aritmetica.component.css */ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AgilidadAritmeticaComponent);
    return AgilidadAritmeticaComponent;
}());



/***/ }),

/***/ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FnaWxpZGFkLW1hcy1saXN0YWRvL2FnaWxpZGFkLW1hcy1saXN0YWRvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-agilidad-aritmetica (enviarJuego)=\"tomarJuegoTerminado($event)\">   </app-agilidad-aritmetica> \n<h1> Listado de Resultados </h1>\n<app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>"

/***/ }),

/***/ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts ***!
  \************************************************************************************/
/*! exports provided: AgilidadMasListadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgilidadMasListadoComponent", function() { return AgilidadMasListadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AgilidadMasListadoComponent = /** @class */ (function () {
    function AgilidadMasListadoComponent() {
        this.listadoParaCompartir = new Array();
    }
    AgilidadMasListadoComponent.prototype.ngOnInit = function () {
    };
    AgilidadMasListadoComponent.prototype.tomarJuegoTerminado = function (juego) {
        this.listadoParaCompartir.push(juego);
        console.info("en app", this.listadoParaCompartir);
    };
    AgilidadMasListadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-agilidad-mas-listado',
            template: __webpack_require__(/*! ./agilidad-mas-listado.component.html */ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.html"),
            styles: [__webpack_require__(/*! ./agilidad-mas-listado.component.css */ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AgilidadMasListadoComponent);
    return AgilidadMasListadoComponent;
}());



/***/ }),

/***/ "./src/app/componentes/anagrama/anagrama.component.css":
/*!*************************************************************!*\
  !*** ./src/app/componentes/anagrama/anagrama.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FuYWdyYW1hL2FuYWdyYW1hLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/componentes/anagrama/anagrama.component.html":
/*!**************************************************************!*\
  !*** ./src/app/componentes/anagrama/anagrama.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  anagrama works!\n</p>\n"

/***/ }),

/***/ "./src/app/componentes/anagrama/anagrama.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/anagrama/anagrama.component.ts ***!
  \************************************************************/
/*! exports provided: AnagramaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnagramaComponent", function() { return AnagramaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AnagramaComponent = /** @class */ (function () {
    function AnagramaComponent() {
    }
    AnagramaComponent.prototype.ngOnInit = function () {
    };
    AnagramaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-anagrama',
            template: __webpack_require__(/*! ./anagrama.component.html */ "./src/app/componentes/anagrama/anagrama.component.html"),
            styles: [__webpack_require__(/*! ./anagrama.component.css */ "./src/app/componentes/anagrama/anagrama.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AnagramaComponent);
    return AnagramaComponent;
}());



/***/ }),

/***/ "./src/app/componentes/cabecera/cabecera.component.css":
/*!*************************************************************!*\
  !*** ./src/app/componentes/cabecera/cabecera.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* =================================\n------------------------------------\n  EndGam - Gaming Magazine Template\n  Version: 1.0\n ------------------------------------\n ====================================*/\n\n\n\n/*----------------------------------------*/\n\n\n\n/* Template default CSS\n/*----------------------------------------*/\n\n\n\nhtml,\nbody {\n\theight: 100%;\n\tfont-family: 'Roboto', sans-serif;\n\t-webkit-font-smoothing: antialiased;\n\tfont-smoothing: antialiased;\n}\n\n\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n\tmargin: 0;\n\tcolor: #111111;\n\tfont-weight: 500;\n}\n\n\n\nh1 {\n\tfont-size: 70px;\n}\n\n\n\nh2 {\n\tfont-size: 36px;\n}\n\n\n\nh3 {\n\tfont-size: 30px;\n}\n\n\n\nh4 {\n\tfont-size: 24px;\n}\n\n\n\nh5 {\n\tfont-size: 18px;\n}\n\n\n\nh6 {\n\tfont-size: 16px;\n}\n\n\n\np {\n\tfont-size: 15px;\n\tcolor: #585858;\n\tline-height: 1.6;\n\tfont-weight: 500;\n}\n\n\n\nimg {\n\tmax-width: 100%;\n}\n\n\n\ninput:focus,\nselect:focus,\nbutton:focus,\ntextarea:focus {\n\toutline: none;\n}\n\n\n\na:hover,\na:focus {\n\ttext-decoration: none;\n\toutline: none;\n}\n\n\n\nul,\nol {\n\tpadding: 0;\n\tmargin: 0;\n}\n\n\n\n::-webkit-input-placeholder {\n\tcolor: #fff;\n\tfont-style: italic;\n\ttext-transform: uppercase;\n}\n\n\n\n:-ms-input-placeholder {\n\tcolor: #fff;\n\tfont-style: italic;\n\ttext-transform: uppercase;\n}\n\n\n\n::-ms-input-placeholder {\n\tcolor: #fff;\n\tfont-style: italic;\n\ttext-transform: uppercase;\n}\n\n\n\n::placeholder {\n\tcolor: #fff;\n\tfont-style: italic;\n\ttext-transform: uppercase;\n}\n\n\n\n/*---------------------\n  Helper CSS\n-----------------------*/\n\n\n\n.section-title h2 {\n\tfont-size: 30px;\n\ttext-transform: uppercase;\n\tfont-weight: 700;\n\tfont-style: italic;\n}\n\n\n\n.set-bg {\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\tbackground-position: top center;\n}\n\n\n\n.spad {\n\tpadding-top: 105px;\n\tpadding-bottom: 105px;\n}\n\n\n\n.text-white h1,\n.text-white h2,\n.text-white h3,\n.text-white h4,\n.text-white h5,\n.text-white h6,\n.text-white p,\n.text-white span,\n.text-white li,\n.text-white a {\n\tcolor: #fff;\n}\n\n\n\n/*---------------------\n  Commom elements\n-----------------------*/\n\n\n\n/* buttons */\n\n\n\n.site-btn {\n\tdisplay: inline-block;\n\tborder: none;\n\tfont-size: 14px;\n\tfont-weight: 700;\n\tfont-style: italic;\n\tmin-width: 186px;\n\tpadding: 24px 30px;\n\tborder-radius: 0;\n\ttext-transform: uppercase;\n\tcolor: #081624;\n\tline-height: normal;\n\tcursor: pointer;\n\ttext-align: center;\n\tbackground: #fff;\n\tposition: relative;\n\tz-index: 1;\n}\n\n\n\n.site-btn img {\n\tposition: relative;\n\tleft: 13px;\n\twidth: auto !important;\n\tdisplay: inline-block !important;\n}\n\n\n\n.site-btn:after,\n.site-btn:before {\n\tposition: absolute;\n\tcontent: \"\";\n\twidth: 100%;\n\theight: 100%;\n\tleft: 9px;\n\ttop: 10px;\n\tbackground: #b01ba5;\n\tz-index: -2;\n\tbox-shadow: 0 0 9px 3px rgba(226, 30, 228, 0.24);\n}\n\n\n\n.site-btn:before {\n\tleft: 0;\n\ttop: 0;\n\tbackground: #fff;\n\tz-index: -1;\n}\n\n\n\n.site-btn:hover {\n\tcolor: #081624;\n}\n\n\n\n/* Preloder */\n\n\n\n#preloder {\n\tposition: fixed;\n\twidth: 100%;\n\theight: 100%;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 999999;\n\tbackground: #000;\n}\n\n\n\n.loader {\n\twidth: 40px;\n\theight: 40px;\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\tmargin-top: -13px;\n\tmargin-left: -13px;\n\tborder-radius: 60px;\n\tanimation: loader 0.8s linear infinite;\n\t-webkit-animation: loader 0.8s linear infinite;\n}\n\n\n\n@keyframes loader {\n\t0% {\n\t\t-webkit-transform: rotate(0deg);\n\t\ttransform: rotate(0deg);\n\t\tborder: 4px solid #f44336;\n\t\tborder-left-color: transparent;\n\t}\n\t50% {\n\t\t-webkit-transform: rotate(180deg);\n\t\ttransform: rotate(180deg);\n\t\tborder: 4px solid #673ab7;\n\t\tborder-left-color: transparent;\n\t}\n\t100% {\n\t\t-webkit-transform: rotate(360deg);\n\t\ttransform: rotate(360deg);\n\t\tborder: 4px solid #f44336;\n\t\tborder-left-color: transparent;\n\t}\n}\n\n\n\n@-webkit-keyframes loader {\n\t0% {\n\t\t-webkit-transform: rotate(0deg);\n\t\tborder: 4px solid #f44336;\n\t\tborder-left-color: transparent;\n\t}\n\t50% {\n\t\t-webkit-transform: rotate(180deg);\n\t\tborder: 4px solid #673ab7;\n\t\tborder-left-color: transparent;\n\t}\n\t100% {\n\t\t-webkit-transform: rotate(360deg);\n\t\tborder: 4px solid #f44336;\n\t\tborder-left-color: transparent;\n\t}\n}\n\n\n\n/*------------------\n  Header section\n---------------------*/\n\n\n\n.header-section {\n\tposition: absolute;\n\twidth: 100%;\n\tleft: 0;\n\ttop: -44px;\n\tz-index: 99;\n\tpadding: 50px 50px 0;\n\tbackground-image: url('/TP-Sala-de-Juegos-ANGULAR/assets/imagenes/cabecera.png');\n\t\n\n}\n\n\n\n.header-warp {\n\tmax-width: 1496px;\n\tmargin: 0 auto;\n}\n\n\n\n.header-social p,\n.footer-social p,\n.geme-social-share p {\n\tdisplay: inline-block;\n\tcolor: #9190a5;\n\tfont-size: 16px;\n\tpadding-top: 4px;\n}\n\n\n\n.header-social a,\n.footer-social a,\n.geme-social-share a {\n\tdisplay: -ms-inline-flex;\n\tdisplay: inline-flex;\n\twidth: 32px;\n\theight: 32px;\n\talign-items: center;\n\tjustify-content: center;\n\tborder-radius: 50%;\n\tcolor: #fff;\n\tfont-size: 12px;\n\tmargin-left: 13px;\n\ttransition: all 0.3s;\n}\n\n\n\n.header-social a:hover,\n.footer-social a:hover,\n.geme-social-share a:hover {\n\tbackground: #b01ba5;\n}\n\n\n\n.header-bar-warp {\n\tpadding: 39px 40px 0;\n\t\n\t\n}\n\n\n\n.site-logo {\n\tfloat: left;\n}\n\n\n\n.user-panel {\n\tfloat: right;\n\tfont-size: 16px;\n\tfont-weight: 500;\n\tcolor: #fff;\n\tpadding-top: 3px;\n}\n\n\n\n.user-panel a {\n\tcolor: #fff;\n}\n\n\n\n.user-panel a:hover {\n\tcolor: #b01ba5;\n}\n\n\n\n.main-menu {\n\tlist-style: none;\n\ttext-align: center;\n\tpadding-top: 3px;\n}\n\n\n\n.main-menu li {\n\tdisplay: inline-block;\n\tposition: relative;\n}\n\n\n\n.main-menu li a {\n\tdisplay: block;\n\tfont-size: 40px;\n\tfont-weight: 500;\n\tcolor: rgb(41, 250, 14);\n\tmargin-right: 10px;\n\tpadding-bottom: 20px;\n\tposition: relative;\n\tpadding-right: 20px;\n}\n\n\n\n.main-menu li a:after {\n\tcontent: \"\";\n\twidth: 20px;\n\theight: 20px;\n\tright: 0;\n\ttop: 1px;\n\n\tbackground-repeat: no-repeat;\n\tbackground-position: right center;\n}\n\n\n\n.main-menu li a i {\n\tcolor: #928d92;\n\tmargin-left: 5px;\n}\n\n\n\n.main-menu li a:hover {\n\tcolor: #b01ba5;\n}\n\n\n\n.main-menu li a:hover:after {\n    color: #000\n}\n\n\n\n.main-menu li a:hover i {\n\tcolor: #b01ba5;\n}\n\n\n\n.main-menu li:hover .sub-menu {\n\tvisibility: visible;\n\topacity: 1;\n\tmargin-top: 0;\n}\n\n\n\n.main-menu li:hover>a {\n\tcolor: #b01ba5;\n}\n\n\n\n.main-menu li:hover>a:after {\n\tbackground-color: #190d36\n}\n\n\n\n.main-menu li .sub-menu {\n\tposition: absolute;\n\tlist-style: none;\n\ttext-align: left;\n\twidth: 220px;\n\tleft: 0;\n\ttop: 100%;\n\tpadding: 20px 0;\n\tvisibility: hidden;\n\topacity: 0;\n\tmargin-top: 50px;\n\tbackground: rgb(233, 250, 0);\n\tz-index: 99;\n\ttransition: all 0.4s;\n\tbox-shadow: 2px 7px 20px rgba(0, 0, 0, 0.4);\n}\n\n\n\n.main-menu li .sub-menu li {\n\tdisplay: block;\n}\n\n\n\n.main-menu li .sub-menu li a {\n\tdisplay: block;\n\tcolor: #000;\n\tmargin-right: 0;\n\tpadding: 8px 30px;\n\tfont-size: 20px;\n}\n\n\n\n.main-menu li .sub-menu li a:after {\n\tdisplay: none;\n}\n\n\n\n.main-menu li .sub-menu li a:hover {\n\tcolor: #b01ba5;\n}\n\n\n\n.slicknav_menu {\n\tdisplay: none;\n}\n\n\n\n/*------------------\n  Hero section\n---------------------*/\n\n\n\n.hero-slider .owl-dots {\n\tdisplay: -ms-flex;\n\tdisplay: flex;\n\tz-index: 2;\n\tleft: calc(50% - 740px);\n\tbottom: 38px;\n\tposition: relative;\n\twidth: 1496px;\n\tposition: absolute;\n}\n\n\n\n.hero-slider .owl-dots .owl-dot {\n\twidth: 44px;\n\theight: 44px;\n\tborder-radius: 50%;\n\tfont-size: 16px;\n\tfont-weight: 500;\n\tborder: 2px solid transparent;\n\tcolor: #fff;\n\tdisplay: -ms-inline-flex;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n\n\n.hero-slider .owl-dots .owl-dot.active {\n\tcolor: #b01ba5;\n\tborder: 2px solid #b01ba5;\n}\n\n\n\n.hero-slider .owl-nav {\n\tmargin-top: -24px;\n\tdisplay: block;\n}\n\n\n\n.hero-slider .owl-nav .owl-next {\n\tposition: absolute;\n\ttop: 50%;\n\tright: 100px;\n}\n\n\n\n.hero-item {\n\theight: 921px;\n\tpadding-top: 125px;\n\tborder-bottom: 2px solid #b01ba5;\n}\n\n\n\n.hero-item h2 {\n\tfont-size: 160px;\n\tcolor: #fff;\n\tfont-weight: 500;\n\tline-height: 1;\n\tposition: relative;\n\ttop: 100px;\n\topacity: 0;\n}\n\n\n\n.hero-item p {\n\tfont-size: 24px;\n\tcolor: rgba(255, 255, 255, 0.4);\n\tfont-weight: 500;\n\topacity: 0.39;\n\tmargin-bottom: 70px;\n\tposition: relative;\n\ttop: 80px;\n\topacity: 0;\n}\n\n\n\n.hero-item .site-btn {\n\tposition: relative;\n\ttop: 50px;\n\topacity: 0;\n}\n\n\n\n.hero-slider .owl-item.active .hero-item h2,\n.hero-slider .owl-item.active .hero-item p,\n.hero-slider .owl-item.active .hero-item .site-btn {\n\ttop: 0;\n\topacity: 1;\n}\n\n\n\n.hero-slider .owl-item.active .hero-item h2 {\n\ttransition: all 0.5s ease 0.4s;\n}\n\n\n\n.hero-slider .owl-item.active .hero-item p {\n\ttransition: all 0.5s ease 0.6s;\n}\n\n\n\n.hero-slider .owl-item.active .hero-item .site-btn {\n\ttransition: all 0.5s ease 0.8s;\n}\n\n\n\n.hero-slider .owl-item.active .hero-item .offer-card {\n\topacity: 1;\n\t-webkit-transform: rotate(0deg);\n\ttransform: rotate(0deg);\n\ttransition: all 0.5s ease 1s;\n}\n\n\n\n/* ----------------\n  Intro section\n---------------------*/\n\n\n\n.intro-section {\n\tbackground: #0c062e;\n\tpadding: 115px 0;\n}\n\n\n\n.text-box .top-meta {\n\tfont-size: 18px;\n\tfont-weight: 500;\n\tmargin-bottom: 20px;\n}\n\n\n\n.text-box .top-meta a {\n\tcolor: #b01ba5;\n}\n\n\n\n.text-box h3 {\n\tmargin-bottom: 40px;\n\tmax-width: 370px;\n}\n\n\n\n.text-box p {\n\tfont-size: 15px;\n\tfont-weight: 500;\n\tcolor: #68647d;\n\tmargin-bottom: 35px;\n}\n\n\n\n.text-box .read-more {\n\tfont-size: 15px;\n\ttext-transform: uppercase;\n\tfont-weight: 700;\n\tfont-style: italic;\n\tcolor: #fff;\n}\n\n\n\n.text-box .read-more img {\n\tmargin-left: 13px;\n}\n\n\n\n/* ----------------\n Blog Section\n---------------------*/\n\n\n\n.blog-section {\n\t/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#501755+0,2d1854+100 */\n\tbackground: #501755;\n\t/* Old browsers */\n\t/* FF3.6-15 */\n\t/* Chrome10-25,Safari5.1-6 */\n\tbackground: linear-gradient(45deg, #501755 0%, #2d1854 100%);\n\t/* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#501755', endColorstr='#2d1854', GradientType=1);\n\t/* IE6-9 fallback on horizontal gradient */\n}\n\n\n\n.blog-section .section-title {\n\tmargin-bottom: 25px;\n}\n\n\n\n.blog-filter {\n\tlist-style: none;\n\tdisplay: block;\n}\n\n\n\n.blog-filter li {\n\tdisplay: inline-block;\n}\n\n\n\n.blog-filter li a {\n\tdisplay: block;\n\tcolor: #fff;\n\tpadding: 16px 36px;\n\tfont-size: 16px;\n\tfont-weight: 700;\n\tbackground: #6f2b95;\n\tline-height: 1.1;\n\tmargin-right: 7px;\n\ttransition: all 0.3s;\n\tmargin-bottom: 10px;\n}\n\n\n\n.blog-filter li a:hover {\n\tbackground: #b01ba5;\n}\n\n\n\n.blog-item {\n\tmargin-top: 86px;\n}\n\n\n\n.blog-item .blog-thumb {\n\twidth: 362px;\n\tfloat: left;\n\tmargin-right: 30px;\n}\n\n\n\n.blog-item .text-box {\n\toverflow: hidden;\n}\n\n\n\n.blog-item .text-box p {\n\tmargin-bottom: 42px;\n}\n\n\n\n.widget-item {\n\tmargin-bottom: 85px;\n}\n\n\n\n.widget-item:last-child {\n\tmargin-bottom: 0;\n}\n\n\n\n.widget-item .widget-title {\n\tcolor: #fff;\n\ttext-transform: uppercase;\n\tfont-weight: 700;\n\tfont-style: italic;\n\tpadding-left: 38px;\n\tmargin-bottom: 48px;\n}\n\n\n\n.trending-widget .tw-item {\n\tmargin-bottom: 38px;\n}\n\n\n\n.trending-widget .tw-item:last-child {\n\tmargin-bottom: 0;\n}\n\n\n\n.trending-widget .tw-thumb {\n\tfloat: left;\n\tmargin-right: 17px;\n\toverflow: hidden;\n}\n\n\n\n.trending-widget .tw-text .tw-meta {\n\tcolor: #68647d;\n\tfont-size: 12px;\n\tfont-weight: 500;\n\tmargin-bottom: 7px;\n}\n\n\n\n.trending-widget .tw-text .tw-meta a {\n\tcolor: #b01ba5;\n}\n\n\n\n.trending-widget .tw-text h5 {\n\tfont-size: 18px;\n\tcolor: #fff;\n\tline-height: 1.5;\n}\n\n\n\n.categories-widget {\n\tbackground: #34164b;\n\tpadding: 55px 0 25px;\n}\n\n\n\n.categories-widget ul {\n\tlist-style: none;\n\tpadding: 0 38px;\n}\n\n\n\n.categories-widget ul li {\n\tdisplay: block;\n}\n\n\n\n.categories-widget ul li a {\n\tdisplay: inline-block;\n\tposition: relative;\n\tfont-size: 16px;\n\tcolor: #68647d;\n\tfont-weight: 500;\n\tmargin-bottom: 15px;\n\tpadding-right: 19px;\n\ttransition: all 0.2s;\n\tbackground-repeat: no-repeat;\n\tbackground-position: right -120% center;\n\tbackground-size: 11px;\n}\n\n\n\n.categories-widget ul li a:hover {\n\tcolor: #b01ba5;\n\tbackground-position: right center;\n}\n\n\n\n.search-widget {\n\tposition: relative;\n}\n\n\n\n.search-widget input {\n\twidth: 100%;\n\theight: 40px;\n\tborder: none;\n\tborder-bottom: 2px solid #72628b;\n\tbackground: none;\n\tpadding-right: 60px;\n\tcolor: #fff;\n}\n\n\n\n.search-widget button {\n\tposition: absolute;\n\tright: 0;\n\ttop: 0;\n\tcolor: #b01ba5;\n\tfont-weight: 700;\n\tfont-size: 14px;\n\tfont-style: italic;\n\tcursor: pointer;\n\tbackground: none;\n\tborder: none;\n\ttext-transform: uppercase;\n}\n\n\n\n.latest-comments .lc-item {\n\tmargin-bottom: 30px;\n}\n\n\n\n.latest-comments .lc-item:last-child {\n\tmargin-bottom: 0;\n}\n\n\n\n.latest-comments .lc-item .lc-avatar {\n\twidth: 64px;\n\theight: 64px;\n\tborder-radius: 50%;\n\tfloat: left;\n\tmargin-right: 12px;\n}\n\n\n\n.latest-comments .lc-item .tw-text {\n\tpadding-top: 10px;\n\tfont-size: 16px;\n\tcolor: #fff;\n\tfont-weight: 500;\n}\n\n\n\n.latest-comments .lc-item .tw-text a {\n\tcolor: #b01ba5;\n}\n\n\n\n.latest-comments .lc-item .tw-text span {\n\tcolor: #68647d;\n}\n\n\n\n/* --------------------\n  Intro video section\n-----------------------*/\n\n\n\n.intro-video-section {\n\theight: 757px;\n\tposition: relative;\n}\n\n\n\n.video-play-btn {\n\tposition: absolute;\n\tleft: calc(50% - 61px);\n\ttop: calc(50% - 61px);\n\twidth: 122px;\n\theight: 122px;\n\ttext-align: center;\n\tpadding-top: 35px;\n\tborder-radius: 50%;\n\tbackground: rgba(255, 255, 255, 0.16);\n}\n\n\n\n.video-text {\n\tmargin-bottom: 80px;\n\tpadding: 27px 0;\n\tpadding-left: 25px;\n\tposition: relative;\n}\n\n\n\n.video-text h2 {\n\tfont-size: 48px;\n\ttext-transform: uppercase;\n\tfont-style: italic;\n\tfont-weight: 700;\n\tcolor: #fff;\n\tmargin-bottom: 1px;\n}\n\n\n\n.video-text p {\n\tfont-size: 18px;\n\tcolor: #a3a1b3;\n\tfont-weight: 500;\n\tmargin-bottom: 0;\n}\n\n\n\n.video-text:after {\n\tposition: absolute;\n\tcontent: \"\";\n\twidth: 9px;\n\theight: 100%;\n\tleft: -22px;\n\ttop: 0;\n\tborder-left: 3px solid #de46d6;\n\tbackground: #fff;\n\tbox-shadow: 0 0 9px 3px rgba(226, 30, 228, 0.5);\n}\n\n\n\n/* ----------------\n  Featured section\n---------------------*/\n\n\n\n.featured-section {\n\tposition: relative;\n\toverflow: hidden;\n}\n\n\n\n.featured-bg {\n\twidth: calc(50% - 156px);\n\tfloat: left;\n\theight: 100%;\n\tleft: 0;\n\tright: 0;\n\tposition: absolute;\n}\n\n\n\n.featured-box {\n\tfloat: right;\n\twidth: calc(50% + 156px);\n\tbackground: #fff;\n\tpadding: 100px 50px 130px 79px;\n}\n\n\n\n.featured-box .text-box {\n\tmax-width: 810px;\n}\n\n\n\n.featured-box .text-box .top-meta {\n\tcolor: #68647d;\n}\n\n\n\n.featured-box .text-box h3 {\n\tfont-size: 60px;\n\tmax-width: 100%;\n}\n\n\n\n.featured-box .text-box p {\n\tfont-size: 16px;\n}\n\n\n\n.featured-box .text-box .read-more {\n\tcolor: #251e2f;\n}\n\n\n\n.gradient-bg,\n.newsletter-section {\n\tbackground: #3e0f3d;\n\t/* Old browsers */\n\t/* FF3.6-15 */\n\t/* Chrome10-25,Safari5.1-6 */\n\tbackground: linear-gradient(to right, #3e0f3d 0%, #1c0f3b 100%);\n\t/* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3e0f3d', endColorstr='#1c0f3b', GradientType=1);\n\t/* IE6-9 */\n}\n\n\n\n/* --------------------\n  Newsletter section\n----------------------*/\n\n\n\n.newsletter-section {\n\tpadding: 108px 0 95px;\n\ttext-align: center;\n}\n\n\n\n.newsletter-section h2 {\n\tfont-size: 48px;\n\tcolor: #fff;\n\tfont-weight: 700;\n\tfont-style: italic;\n\ttext-transform: uppercase;\n\tmargin-bottom: 73px;\n}\n\n\n\n.newsletter-form {\n\tpadding-left: 56px;\n}\n\n\n\n.newsletter-form input {\n\tfont-size: 14px;\n\tfont-weight: 700;\n\tfont-style: italic;\n\tcolor: #fff;\n\twidth: 787px;\n\tborder: none;\n\tborder-bottom: 2px solid #9b91a6;\n\tbackground: none;\n\theight: 63px;\n\tmargin-right: 26px;\n}\n\n\n\n/* ----------------\n  Footer section\n---------------------*/\n\n\n\n.footer-section {\n\ttext-align: center;\n\t/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#330d38+0,190d36+100 */\n\tbackground: #330d38;\n\t/* Old browsers */\n\t/* FF3.6-15 */\n\t/* Chrome10-25,Safari5.1-6 */\n\tbackground: linear-gradient(to right, #330d38 0%, #190d36 100%);\n\t/* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#330d38', endColorstr='#190d36', GradientType=1);\n\t/* IE6-9 */\n}\n\n\n\n.footer-section .container {\n\tposition: relative;\n\tpadding: 60px 15px 25px;\n}\n\n\n\n.footer-left-pic {\n\tposition: absolute;\n\tleft: -13px;\n\tbottom: 19px;\n}\n\n\n\n.footer-right-pic {\n\tposition: absolute;\n\tright: 50px;\n\tbottom: 19px;\n}\n\n\n\n.footer-menu {\n\tpadding-top: 62px;\n}\n\n\n\n.footer-menu li:last-child a {\n\tmargin-right: 0;\n}\n\n\n\n.footer-social {\n\tpadding-top: 20px;\n\tpadding-bottom: 40px;\n}\n\n\n\n.footer-social a:first-child {\n\tmargin-left: 0;\n}\n\n\n\n.copyright {\n\tfont-size: 12px;\n\tfont-weight: 500;\n\tcolor: #9190a5;\n\topacity: 0.20;\n}\n\n\n\n.copyright a {\n\tcolor: #9190a5;\n}\n\n\n\n.copyright a:hover {\n\ttext-decoration: underline;\n}\n\n\n\n/* ----------------\n  Other Pages\n=====================\n---------------------*/\n\n\n\n.page-top-section {\n\theight: 355px;\n\tpadding-top: 210px;\n}\n\n\n\n.page-info {\n\tmax-width: 1496px;\n\tmargin: 0 auto;\n\tfont-size: 16px;\n\tcolor: #fff;\n\tpadding-left: 60px;\n}\n\n\n\n.page-info h2 {\n\tcolor: #fff;\n\tfont-size: 48px;\n}\n\n\n\n.site-breadcrumb a,\n.site-breadcrumb span {\n\tfont-style: italic;\n\tcolor: #fff;\n\tmargin: 0 10px;\n\tfont-weight: 700;\n}\n\n\n\n.site-breadcrumb a:first-child {\n\tmargin-left: 0;\n}\n\n\n\n.site-breadcrumb span {\n\tcolor: #c313b7;\n}\n\n\n\n/* --------------\n  Games Page\n-----------------*/\n\n\n\n.games-section {\n\tpadding: 108px 0;\n\t/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#501755+0,2d1854+100 */\n\tbackground: #501755;\n\t/* Old browsers */\n\t/* FF3.6-15 */\n\t/* Chrome10-25,Safari5.1-6 */\n\tbackground: linear-gradient(45deg, #501755 0%, #2d1854 100%);\n\t/* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#501755', endColorstr='#2d1854', GradientType=1);\n\t/* IE6-9 fallback on horizontal gradient */\n}\n\n\n\n.game-filter {\n\tlist-style: none;\n\tmargin-bottom: 82px;\n}\n\n\n\n.game-filter li {\n\tdisplay: inline-block;\n\twidth: 40px;\n\theight: 34px;\n\tbackground: #503c6e;\n\tborder-radius: 17px;\n\ttransition: all 0.3s;\n}\n\n\n\n.game-filter li:hover {\n\tbackground: #c313b7;\n}\n\n\n\n.game-filter li a {\n\tfont-size: 15px;\n\tfont-weight: 700;\n\tcolor: #fff;\n\tdisplay: block;\n\twidth: 100%;\n\theight: 100%;\n\ttext-align: center;\n\tpadding-top: 7px;\n}\n\n\n\n.game-item {\n\tmargin-bottom: 80px;\n}\n\n\n\n.game-item h5 {\n\tfont-size: 20px;\n\tcolor: #fff;\n\tpadding-top: 30px;\n\tmargin-bottom: 20px;\n}\n\n\n\n.game-item .read-more {\n\tfont-size: 15px;\n\ttext-transform: uppercase;\n\tfont-weight: 700;\n\tfont-style: italic;\n\tcolor: #b01ba5;\n}\n\n\n\n.game-item .read-more img {\n\tmargin-left: 13px;\n}\n\n\n\n.site-pagination {\n\tdisplay: -ms-flex;\n\tdisplay: flex;\n}\n\n\n\n.site-pagination a {\n\twidth: 38px;\n\theight: 44px;\n\tborder-radius: 50%;\n\tfont-size: 16px;\n\tfont-weight: 500;\n\tborder: 2px solid transparent;\n\tcolor: #fff;\n\tdisplay: -ms-inline-flex;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tjustify-content: center;\n\ttransition: all 0.5s;\n}\n\n\n\n.site-pagination a.active {\n\twidth: 44px;\n\tmargin: 0 10px;\n\tcolor: #b01ba5;\n\tborder: 2px solid #b01ba5;\n}\n\n\n\n.site-pagination a.active:first-child {\n\tmargin-left: 0;\n}\n\n\n\n.game-page-sideber .widget-item {\n\tmargin-bottom: 55px;\n}\n\n\n\n/* ------------------\n  Game single Page\n---------------------*/\n\n\n\n.games-single-page,\n.review-section,\n.blog-page,\n.contact-page {\n\tpadding: 104px 0;\n\t/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#501755+0,2d1854+100 */\n\tbackground: #501755;\n\t/* Old browsers */\n\t/* FF3.6-15 */\n\t/* Chrome10-25,Safari5.1-6 */\n\tbackground: linear-gradient(45deg, #501755 0%, #2d1854 100%);\n\t/* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#501755', endColorstr='#2d1854', GradientType=1);\n\t/* IE6-9 fallback on horizontal gradient */\n}\n\n\n\n.game-single-preview {\n\tmargin-bottom: 108px;\n}\n\n\n\n.game-single-content .gs-meta {\n\tfont-size: 18px;\n\tcolor: #68647d;\n\tfont-weight: 500;\n\tmargin-bottom: 20px;\n}\n\n\n\n.game-single-content .gs-meta a {\n\tcolor: #b01ba5;\n}\n\n\n\n.game-single-content .gs-title {\n\tfont-size: 60px;\n\tcolor: #fff;\n\tmargin-bottom: 40px;\n}\n\n\n\n.game-single-content h4 {\n\tcolor: #b01ba5;\n\tmargin-bottom: 20px;\n}\n\n\n\n.game-single-content p {\n\tfont-size: 16px;\n\tfont-weight: 500;\n\tcolor: #68647d;\n\tline-height: 1.8;\n\tmargin-bottom: 70px;\n}\n\n\n\n.rating-widget {\n\tbackground: #34164b;\n\tpadding: 55px 0 30px;\n}\n\n\n\n.rating-widget ul {\n\tlist-style: none;\n\tpadding: 0 38px;\n\tmargin-bottom: 30px;\n}\n\n\n\n.rating-widget ul li {\n\tdisplay: block;\n\tfont-size: 16px;\n\tcolor: #b01ba5;\n\tfont-weight: 500;\n\tmargin-bottom: 10px;\n}\n\n\n\n.rating-widget ul li span {\n\tfloat: right;\n\tcolor: #68647d;\n}\n\n\n\n.rating-widget h5 {\n\ttext-align: right;\n\tfont-size: 36px;\n\tcolor: #fff;\n\tfont-weight: 900;\n\tpadding-right: 38px;\n}\n\n\n\n.rating-widget h5 i {\n\tfont-weight: 500;\n\tfont-size: 16px;\n\tfont-style: italic;\n\tcolor: #65607b;\n\ttext-transform: uppercase;\n\tmargin-right: 18px;\n}\n\n\n\n.rating-widget h5 span {\n\tcolor: #b01ba5;\n}\n\n\n\n.testimonials-widget {\n\tbackground: #34164b;\n\tpadding: 55px 0 50px;\n}\n\n\n\n.testimonials-widget .testim-text {\n\tpadding: 0 30px;\n}\n\n\n\n.testimonials-widget .testim-text p {\n\tfont-size: 16px;\n\tfont-weight: 500;\n\tcolor: #68647d;\n\tline-height: 1.8;\n\tmargin-bottom: 40px;\n}\n\n\n\n.testimonials-widget .testim-text h6 {\n\tcolor: #68647d;\n\tpadding-left: 15px;\n}\n\n\n\n.testimonials-widget .testim-text h6 span {\n\tcolor: #b01ba5;\n}\n\n\n\n.game-author-section {\n\tbackground: #3a1854;\n\tpadding: 51px 0;\n\toverflow: hidden;\n}\n\n\n\n.game-author-pic {\n\twidth: 117px;\n\theight: 117px;\n\tborder-radius: 50%;\n\tfloat: left;\n\tmargin-right: 55px;\n}\n\n\n\n.game-author-info {\n\toverflow: hidden;\n\tpadding-top: 10px;\n}\n\n\n\n.game-author-info h4 {\n\tcolor: #fff;\n\tmargin-bottom: 20px;\n}\n\n\n\n.game-author-info h4 span {\n\tcolor: #b01ba5;\n}\n\n\n\n.game-author-info p {\n\tfont-size: 16px;\n\tfont-weight: 500;\n\tcolor: #68647d;\n\tline-height: 1.8;\n\tmargin-bottom: 0;\n}\n\n\n\n/* ----------------\n  Review section\n---------------------*/\n\n\n\n.review-item {\n\tmargin-bottom: 87px;\n}\n\n\n\n.review-content {\n\tposition: relative;\n}\n\n\n\n.review-content h3 {\n\tmax-width: 100%;\n\tmargin-bottom: 35px;\n}\n\n\n\n.review-content p {\n\tmargin-bottom: 40px;\n}\n\n\n\n.review-content .rating {\n\tposition: absolute;\n\tright: 0;\n\ttop: 0;\n}\n\n\n\n.review-content .rating h5 {\n\ttext-align: right;\n\tfont-size: 36px;\n\tcolor: #fff;\n\tfont-weight: 900;\n\tpadding-right: 38px;\n}\n\n\n\n.review-content .rating h5 i {\n\tfont-weight: 500;\n\tfont-size: 16px;\n\tfont-style: italic;\n\tcolor: #65607b;\n\ttext-transform: uppercase;\n\tmargin-right: 18px;\n}\n\n\n\n.review-content .rating h5 span {\n\tcolor: #c313b7;\n}\n\n\n\n/* ------------------\n\tBlog Page\n---------------------*/\n\n\n\n.blog-page .blog-filter {\n\tmargin-bottom: 77px;\n}\n\n\n\n.big-blog-item {\n\tmargin-bottom: 65px;\n}\n\n\n\n.big-blog-item .blog-thumbnail {\n\tmargin-bottom: 30px;\n}\n\n\n\n.big-blog-item .blog-content .top-meta {\n\tmargin-bottom: 15px;\n}\n\n\n\n.big-blog-item .blog-content h3 {\n\tmax-width: 100%;\n\tmargin-bottom: 25px;\n}\n\n\n\n.big-blog-item .blog-content p {\n\tmargin-bottom: 10px;\n}\n\n\n\n/* ----------------\n  Contact page\n---------------------*/\n\n\n\n.map iframe {\n\twidth: 100%;\n\theight: 600px;\n\tmargin-bottom: 104px;\n}\n\n\n\n.contact-form input,\n.contact-form textarea {\n\twidth: 100%;\n\tborder: none;\n\tbackground-color: transparent;\n\tborder-bottom: 2px solid rgba(255, 255, 255, 0.54);\n\tpadding-bottom: 20px;\n\tmargin-bottom: 30px;\n\tfont-weight: 500;\n\tfont-size: 16px;\n\tfont-style: italic;\n\tcolor: #fff;\n\tline-height: 1;\n}\n\n\n\n.contact-form textarea {\n\tline-height: 1.4;\n\theight: 156px;\n\tmargin-bottom: 48px;\n}\n\n\n\n.contact-form .site-btn img {\n\tleft: 5px;\n}\n\n\n\n.contact-text h3 {\n\tmargin-bottom: 25px;\n}\n\n\n\n.contact-text p {\n\tline-height: 1.9;\n\tcolor: #68647d;\n\tmargin-bottom: 50px;\n}\n\n\n\n.cont-info {\n\toverflow: hidden;\n\tmargin-bottom: 20px;\n}\n\n\n\n.cont-info .ci-icon {\n\tfloat: left;\n\twidth: 32px;\n\tmargin-right: 26px;\n}\n\n\n\n.cont-info .ci-text {\n\toverflow: hidden;\n\tfont-size: 16px;\n\tfont-weight: 500;\n}\n\n\n\n/* ----------------\n  Responsive\n---------------------*/\n\n\n\n@media (min-width: 1200px) {\n\t.container {\n\t\tmax-width: 1175px;\n\t}\n}\n\n\n\n@media (max-width: 1530px) {\n\t.hero-slider .owl-dots {\n\t\twidth: 1170px;\n\t\tleft: calc(50% - 585px);\n\t}\n}\n\n\n\n/* Medium screen : 992px. */\n\n\n\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n\t.blog-item .blog-thumb {\n\t\twidth: 250px;\n\t}\n\t.hero-item p {\n\t\tfont-size: 22px;\n\t}\n\t.hero-slider .owl-nav .owl-next {\n\t\tright: 30px;\n\t}\n\t.hero-slider .owl-dots {\n\t\twidth: 930px;\n\t\tleft: calc(50% - 465px);\n\t}\n\t.newsletter-form {\n\t\tpadding-left: 0;\n\t}\n\t.newsletter-form input {\n\t\twidth: 100%;\n\t\tmargin-right: 0;\n\t\tmargin-bottom: 40px;\n\t}\n\t.game-filter li {\n\t\twidth: 31px;\n\t\theight: 31px;\n\t}\n\t.game-filter li a {\n\t\tpadding-top: 5px;\n\t}\n}\n\n\n\n/* Tablet :768px. */\n\n\n\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n\t.header-bar-warp {\n\t\tpadding: 39px 15px 0;\n\t}\n\t.main-menu li a {\n\t\tmargin-right: 10px;\n\t}\n\t.hero-item h2 {\n\t\tfont-size: 110px;\n\t}\n\t.hero-item p {\n\t\tfont-size: 16px;\n\t\tpadding: 0 30px;\n\t}\n\t.hero-slider .owl-nav .owl-next {\n\t\tright: 0;\n\t}\n\t.hero-slider .owl-dots {\n\t\twidth: 690px;\n\t\tleft: calc(50% - 345px);\n\t}\n\t.blog-item .blog-thumb {\n\t\tfloat: none;\n\t\tmargin-right: 0;\n\t\twidth: 100%;\n\t\tmargin-bottom: 30px;\n\t}\n\t.featured-bg {\n\t\tdisplay: none;\n\t}\n\t.featured-box {\n\t\tfloat: none;\n\t\twidth: 100%;\n\t}\n\t.newsletter-form input {\n\t\twidth: 100%;\n\t\tmargin-right: 0;\n\t\tmargin-bottom: 40px;\n\t}\n\t.footer-right-pic {\n\t\tright: 15px;\n\t}\n\t.footer-left-pic {\n\t\tleft: -44px;\n\t}\n\t.game-filter {\n\t\ttext-align: center;\n\t}\n\t.game-filter li {\n\t\tmargin-bottom: 5px;\n\t}\n\t.game-single-content .gs-title {\n\t\tfont-size: 40px;\n\t}\n\t.review-pic img {\n\t\tmin-width: 100%;\n\t\tmargin-bottom: 30px;\n\t}\n\t.contact-text {\n\t\tmargin-bottom: 50px;\n\t}\n}\n\n\n\n/* Large Mobile :480px. */\n\n\n\n@media only screen and (max-width: 767px) {\n\t.header-bar-warp {\n\t\tpadding: 25px 20px 10px;\n\t}\n\t.main-menu.primary-menu {\n\t\tdisplay: none;\n\t}\n\t.slicknav_menu {\n\t\tdisplay: block;\n\t\tbackground: #081624;\n\t}\n\t.slicknav_btn {\n\t\tmargin-right: 10px;\n\t\tbackground: #3a3a3a;\n\t}\n\t.slicknav_nav a:hover,\n\t.slicknav_nav .slicknav_row:hover {\n\t\tbackground: #25394c;\n\t\tcolor: #fff;\n\t}\n\t.hero-item h2 {\n\t\tfont-size: 70px;\n\t}\n\t.hero-item p {\n\t\tfont-size: 18px;\n\t}\n\t.footer-right-pic,\n\t.footer-left-pic {\n\t\tdisplay: none;\n\t}\n\t.hero-slider .owl-nav .owl-next {\n\t\ttop: auto;\n\t\tbottom: 33px;\n\t\tright: 15px;\n\t\tz-index: 99;\n\t}\n\t.hero-slider .owl-dots {\n\t\twidth: 100%;\n\t\tleft: 0;\n\t\tpadding-left: 15px;\n\t}\n\t.intro-text-box {\n\t\tmargin-bottom: 40px;\n\t}\n\t.blog-item .blog-thumb {\n\t\tfloat: none;\n\t\tmargin-right: 0;\n\t\twidth: 100%;\n\t\tmargin-bottom: 30px;\n\t}\n\t.sidebar {\n\t\tpadding-top: 60px;\n\t}\n\t.featured-bg {\n\t\tdisplay: none;\n\t}\n\t.featured-box {\n\t\tfloat: none;\n\t\twidth: 100%;\n\t}\n\t.featured-box .text-box h3 {\n\t\tfont-size: 45px;\n\t}\n\t.newsletter-form {\n\t\tpadding-left: 0;\n\t}\n\t.newsletter-form input {\n\t\twidth: 100%;\n\t\tmargin-right: 0;\n\t\tmargin-bottom: 40px;\n\t}\n\t.video-text:after {\n\t\tleft: 0;\n\t}\n\t.page-top-section {\n\t\theight: 400px;\n\t\tpadding-top: 250px;\n\t}\n\t.game-filter {\n\t\ttext-align: center;\n\t}\n\t.game-filter li {\n\t\tmargin-bottom: 5px;\n\t}\n\t.game-single-content .gs-title {\n\t\tfont-size: 40px;\n\t}\n\t.review-pic img {\n\t\tmin-width: 100%;\n\t\tmargin-bottom: 30px;\n\t}\n\t.contact-text {\n\t\tmargin-bottom: 50px;\n\t}\n\t.review-content .rating {\n\t\tposition: relative;\n\t\tmargin-bottom: 20px;\n\t}\n\t.review-content .rating h5 {\n\t\ttext-align: left;\n\t\tpadding-right: 0;\n\t}\n}\n\n\n\n/* Small Mobile :320px. */\n\n\n\n@media only screen and (max-width: 479px) {\n\t.hero-item h2 {\n\t\tfont-size: 55px;\n\t\tmargin-bottom: 20px;\n\t}\n\t.hero-item p {\n\t\tfont-size: 15px;\n\t}\n\t.video-text h2 {\n\t\tfont-size: 30px;\n\t}\n\t.video-play-btn {\n\t\ttop: calc(30% - 61px);\n\t}\n\t.featured-box {\n\t\tpadding: 100px 15px;\n\t}\n\t.featured-box .text-box h3,\n\t.newsletter-section h2 {\n\t\tfont-size: 35px;\n\t}\n\t.main-menu li a {\n\t\tmargin-right: 20px;\n\t}\n\t.game-author-pic {\n\t\tfloat: none;\n\t\tmargin-bottom: 20px;\n\t}\n}\n\n\n\n.titulo\n{\n\tdisplay: inline-flex;\n\tfont-size: 40px;\n\tfont-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n\tfont-weight: 500;\n\tcolor: rgb(255, 255, 255);\n\tpadding-bottom: 40px;\n\tpadding-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvY2FiZWNlcmEvY2FiZWNlcmEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7c0NBS3NDOzs7O0FBSXRDLDJDQUEyQzs7OztBQUMzQzsyQ0FDMkM7Ozs7QUFFM0M7O0NBRUMsWUFBWTtDQUNaLGlDQUFpQztDQUNqQyxtQ0FBbUM7Q0FDbkMsMkJBQTJCO0FBQzVCOzs7O0FBRUE7Ozs7OztDQU1DLFNBQVM7Q0FDVCxjQUFjO0NBQ2QsZ0JBQWdCO0FBQ2pCOzs7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOzs7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOzs7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOzs7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOzs7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOzs7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOzs7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixnQkFBZ0I7QUFDakI7Ozs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7Ozs7QUFFQTs7OztDQUlDLGFBQWE7QUFDZDs7OztBQUVBOztDQUVDLHFCQUFxQjtDQUNyQixhQUFhO0FBQ2Q7Ozs7QUFFQTs7Q0FFQyxVQUFVO0NBQ1YsU0FBUztBQUNWOzs7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLHlCQUF5QjtBQUMxQjs7OztBQUVBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQix5QkFBeUI7QUFDMUI7Ozs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIseUJBQXlCO0FBQzFCOzs7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLHlCQUF5QjtBQUMxQjs7OztBQUVBOzt3QkFFd0I7Ozs7QUFFeEI7Q0FDQyxlQUFlO0NBQ2YseUJBQXlCO0NBQ3pCLGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7Ozs7QUFFQTtDQUNDLDRCQUE0QjtDQUM1QixzQkFBc0I7Q0FD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QUNBO0VBQ0MsbUJBQW1CO0NBQ3BCO0NBQ0E7RUFDQyxXQUFXO0VBQ1gsZUFBZTtFQUNmLFdBQVc7RUFDWCxtQkFBbUI7Q0FDcEI7Q0FDQTtFQUNDLGlCQUFpQjtDQUNsQjtDQUNBO0VBQ0MsYUFBYTtDQUNkO0NBQ0E7RUFDQyxXQUFXO0VBQ1gsV0FBVztDQUNaO0NBQ0E7RUFDQyxlQUFlO0NBQ2hCO0NBQ0E7RUFDQyxlQUFlO0NBQ2hCO0NBQ0E7RUFDQyxXQUFXO0VBQ1gsZUFBZTtFQUNmLG1CQUFtQjtDQUNwQjtDQUNBO0VBQ0MsT0FBTztDQUNSO0NBQ0E7RUFDQyxhQUFhO0VBQ2Isa0JBQWtCO0NBQ25CO0NBQ0E7RUFDQyxrQkFBa0I7Q0FDbkI7Q0FDQTtFQUNDLGtCQUFrQjtDQUNuQjtDQUNBO0VBQ0MsZUFBZTtDQUNoQjtDQUNBO0VBQ0MsZUFBZTtFQUNmLG1CQUFtQjtDQUNwQjtDQUNBO0VBQ0MsbUJBQW1CO0NBQ3BCO0NBQ0E7RUFDQyxrQkFBa0I7RUFDbEIsbUJBQW1CO0NBQ3BCO0NBQ0E7RUFDQyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0NBQ2pCO0FBQ0Q7Ozs7QUFFQSx5QkFBeUI7Ozs7QUFFekI7Q0FDQztFQUNDLGVBQWU7RUFDZixtQkFBbUI7Q0FDcEI7Q0FDQTtFQUNDLGVBQWU7Q0FDaEI7Q0FDQTtFQUNDLGVBQWU7Q0FDaEI7Q0FDQTtFQUNDLHFCQUFxQjtDQUN0QjtDQUNBO0VBQ0MsbUJBQW1CO0NBQ3BCO0NBQ0E7O0VBRUMsZUFBZTtDQUNoQjtDQUNBO0VBQ0Msa0JBQWtCO0NBQ25CO0NBQ0E7RUFDQyxXQUFXO0VBQ1gsbUJBQW1CO0NBQ3BCO0FBQ0Q7Ozs7QUFDQTs7Q0FFQyxvQkFBb0I7Q0FDcEIsZUFBZTtDQUNmLHNIQUFzSDtDQUN0SCxnQkFBZ0I7Q0FDaEIseUJBQXlCO0NBQ3pCLG9CQUFvQjtDQUNwQixtQkFBbUI7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9jYWJlY2VyYS9jYWJlY2VyYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgRW5kR2FtIC0gR2FtaW5nIE1hZ2F6aW5lIFRlbXBsYXRlXG4gIFZlcnNpb246IDEuMFxuIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyogVGVtcGxhdGUgZGVmYXVsdCBDU1Ncbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmh0bWwsXG5ib2R5IHtcblx0aGVpZ2h0OiAxMDAlO1xuXHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG5cdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXHRmb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG5cdG1hcmdpbjogMDtcblx0Y29sb3I6ICMxMTExMTE7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmgxIHtcblx0Zm9udC1zaXplOiA3MHB4O1xufVxuXG5oMiB7XG5cdGZvbnQtc2l6ZTogMzZweDtcbn1cblxuaDMge1xuXHRmb250LXNpemU6IDMwcHg7XG59XG5cbmg0IHtcblx0Zm9udC1zaXplOiAyNHB4O1xufVxuXG5oNSB7XG5cdGZvbnQtc2l6ZTogMThweDtcbn1cblxuaDYge1xuXHRmb250LXNpemU6IDE2cHg7XG59XG5cbnAge1xuXHRmb250LXNpemU6IDE1cHg7XG5cdGNvbG9yOiAjNTg1ODU4O1xuXHRsaW5lLWhlaWdodDogMS42O1xuXHRmb250LXdlaWdodDogNTAwO1xufVxuXG5pbWcge1xuXHRtYXgtd2lkdGg6IDEwMCU7XG59XG5cbmlucHV0OmZvY3VzLFxuc2VsZWN0OmZvY3VzLFxuYnV0dG9uOmZvY3VzLFxudGV4dGFyZWE6Zm9jdXMge1xuXHRvdXRsaW5lOiBub25lO1xufVxuXG5hOmhvdmVyLFxuYTpmb2N1cyB7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0b3V0bGluZTogbm9uZTtcbn1cblxudWwsXG5vbCB7XG5cdHBhZGRpbmc6IDA7XG5cdG1hcmdpbjogMDtcbn1cblxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcblx0Y29sb3I6ICNmZmY7XG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG5cdGNvbG9yOiAjZmZmO1xuXHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcblx0Y29sb3I6ICNmZmY7XG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuOjpwbGFjZWhvbGRlciB7XG5cdGNvbG9yOiAjZmZmO1xuXHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIEhlbHBlciBDU1Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLnNlY3Rpb24tdGl0bGUgaDIge1xuXHRmb250LXNpemU6IDMwcHg7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLnNldC1iZyB7XG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XG59XG5cbi5zcGFkIHtcblx0cGFkZGluZy10b3A6IDEwNXB4O1xuXHRwYWRkaW5nLWJvdHRvbTogMTA1cHg7XG59XG5cbi50ZXh0LXdoaXRlIGgxLFxuLnRleHQtd2hpdGUgaDIsXG4udGV4dC13aGl0ZSBoMyxcbi50ZXh0LXdoaXRlIGg0LFxuLnRleHQtd2hpdGUgaDUsXG4udGV4dC13aGl0ZSBoNixcbi50ZXh0LXdoaXRlIHAsXG4udGV4dC13aGl0ZSBzcGFuLFxuLnRleHQtd2hpdGUgbGksXG4udGV4dC13aGl0ZSBhIHtcblx0Y29sb3I6ICNmZmY7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIENvbW1vbSBlbGVtZW50c1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4vKiBidXR0b25zICovXG5cbi5zaXRlLWJ0biB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0Ym9yZGVyOiBub25lO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcblx0bWluLXdpZHRoOiAxODZweDtcblx0cGFkZGluZzogMjRweCAzMHB4O1xuXHRib3JkZXItcmFkaXVzOiAwO1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRjb2xvcjogIzA4MTYyNDtcblx0bGluZS1oZWlnaHQ6IG5vcm1hbDtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGJhY2tncm91bmQ6ICNmZmY7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ei1pbmRleDogMTtcbn1cblxuLnNpdGUtYnRuIGltZyB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0bGVmdDogMTNweDtcblx0d2lkdGg6IGF1dG8gIWltcG9ydGFudDtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5zaXRlLWJ0bjphZnRlcixcbi5zaXRlLWJ0bjpiZWZvcmUge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGxlZnQ6IDlweDtcblx0dG9wOiAxMHB4O1xuXHRiYWNrZ3JvdW5kOiAjYjAxYmE1O1xuXHR6LWluZGV4OiAtMjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgOXB4IDNweCByZ2JhKDIyNiwgMzAsIDIyOCwgMC4yNCk7XG5cdGJveC1zaGFkb3c6IDAgMCA5cHggM3B4IHJnYmEoMjI2LCAzMCwgMjI4LCAwLjI0KTtcbn1cblxuLnNpdGUtYnRuOmJlZm9yZSB7XG5cdGxlZnQ6IDA7XG5cdHRvcDogMDtcblx0YmFja2dyb3VuZDogI2ZmZjtcblx0ei1pbmRleDogLTE7XG59XG5cbi5zaXRlLWJ0bjpob3ZlciB7XG5cdGNvbG9yOiAjMDgxNjI0O1xufVxuXG4vKiBQcmVsb2RlciAqL1xuXG4jcHJlbG9kZXIge1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHRvcDogMDtcblx0bGVmdDogMDtcblx0ei1pbmRleDogOTk5OTk5O1xuXHRiYWNrZ3JvdW5kOiAjMDAwO1xufVxuXG4ubG9hZGVyIHtcblx0d2lkdGg6IDQwcHg7XG5cdGhlaWdodDogNDBweDtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDUwJTtcblx0bGVmdDogNTAlO1xuXHRtYXJnaW4tdG9wOiAtMTNweDtcblx0bWFyZ2luLWxlZnQ6IC0xM3B4O1xuXHRib3JkZXItcmFkaXVzOiA2MHB4O1xuXHRhbmltYXRpb246IGxvYWRlciAwLjhzIGxpbmVhciBpbmZpbml0ZTtcblx0LXdlYmtpdC1hbmltYXRpb246IGxvYWRlciAwLjhzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBsb2FkZXIge1xuXHQwJSB7XG5cdFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcblx0XHRib3JkZXI6IDRweCBzb2xpZCAjZjQ0MzM2O1xuXHRcdGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcblx0fVxuXHQ1MCUge1xuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuXHRcdGJvcmRlcjogNHB4IHNvbGlkICM2NzNhYjc7XG5cdFx0Ym9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHR9XG5cdDEwMCUge1xuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuXHRcdGJvcmRlcjogNHB4IHNvbGlkICNmNDQzMzY7XG5cdFx0Ym9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHR9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkZXIge1xuXHQwJSB7XG5cdFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcblx0XHRib3JkZXI6IDRweCBzb2xpZCAjZjQ0MzM2O1xuXHRcdGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcblx0fVxuXHQ1MCUge1xuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcblx0XHRib3JkZXI6IDRweCBzb2xpZCAjNjczYWI3O1xuXHRcdGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcblx0fVxuXHQxMDAlIHtcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG5cdFx0Ym9yZGVyOiA0cHggc29saWQgI2Y0NDMzNjtcblx0XHRib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdH1cbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS1cbiAgSGVhZGVyIHNlY3Rpb25cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5oZWFkZXItc2VjdGlvbiB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0d2lkdGg6IDEwMCU7XG5cdGxlZnQ6IDA7XG5cdHRvcDogLTQ0cHg7XG5cdHotaW5kZXg6IDk5O1xuXHRwYWRkaW5nOiA1MHB4IDUwcHggMDtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZW5lcy9jYWJlY2VyYS5wbmdcIik7XG5cdFxuXG59XG5cbi5oZWFkZXItd2FycCB7XG5cdG1heC13aWR0aDogMTQ5NnB4O1xuXHRtYXJnaW46IDAgYXV0bztcbn1cblxuLmhlYWRlci1zb2NpYWwgcCxcbi5mb290ZXItc29jaWFsIHAsXG4uZ2VtZS1zb2NpYWwtc2hhcmUgcCB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0Y29sb3I6ICM5MTkwYTU7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0cGFkZGluZy10b3A6IDRweDtcbn1cblxuLmhlYWRlci1zb2NpYWwgYSxcbi5mb290ZXItc29jaWFsIGEsXG4uZ2VtZS1zb2NpYWwtc2hhcmUgYSB7XG5cdGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleDtcblx0ZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xuXHRkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XG5cdGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXHR3aWR0aDogMzJweDtcblx0aGVpZ2h0OiAzMnB4O1xuXHQtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuXHQtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHQtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG5cdC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0Y29sb3I6ICNmZmY7XG5cdGZvbnQtc2l6ZTogMTJweDtcblx0bWFyZ2luLWxlZnQ6IDEzcHg7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cdC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLmhlYWRlci1zb2NpYWwgYTpob3Zlcixcbi5mb290ZXItc29jaWFsIGE6aG92ZXIsXG4uZ2VtZS1zb2NpYWwtc2hhcmUgYTpob3ZlciB7XG5cdGJhY2tncm91bmQ6ICNiMDFiYTU7XG59XG5cbi5oZWFkZXItYmFyLXdhcnAge1xuXHRwYWRkaW5nOiAzOXB4IDQwcHggMDtcblx0XG5cdFxufVxuXG4uc2l0ZS1sb2dvIHtcblx0ZmxvYXQ6IGxlZnQ7XG59XG5cbi51c2VyLXBhbmVsIHtcblx0ZmxvYXQ6IHJpZ2h0O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGNvbG9yOiAjZmZmO1xuXHRwYWRkaW5nLXRvcDogM3B4O1xufVxuXG4udXNlci1wYW5lbCBhIHtcblx0Y29sb3I6ICNmZmY7XG59XG5cbi51c2VyLXBhbmVsIGE6aG92ZXIge1xuXHRjb2xvcjogI2IwMWJhNTtcbn1cblxuLm1haW4tbWVudSB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0cGFkZGluZy10b3A6IDNweDtcbn1cblxuLm1haW4tbWVudSBsaSB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWFpbi1tZW51IGxpIGEge1xuXHRkaXNwbGF5OiBibG9jaztcblx0Zm9udC1zaXplOiA0MHB4O1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRjb2xvcjogcmdiKDQxLCAyNTAsIDE0KTtcblx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xuXHRwYWRkaW5nLWJvdHRvbTogMjBweDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4ubWFpbi1tZW51IGxpIGE6YWZ0ZXIge1xuXHRjb250ZW50OiBcIlwiO1xuXHR3aWR0aDogMjBweDtcblx0aGVpZ2h0OiAyMHB4O1xuXHRyaWdodDogMDtcblx0dG9wOiAxcHg7XG5cblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyO1xufVxuXG4ubWFpbi1tZW51IGxpIGEgaSB7XG5cdGNvbG9yOiAjOTI4ZDkyO1xuXHRtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ubWFpbi1tZW51IGxpIGE6aG92ZXIge1xuXHRjb2xvcjogI2IwMWJhNTtcbn1cblxuLm1haW4tbWVudSBsaSBhOmhvdmVyOmFmdGVyIHtcbiAgICBjb2xvcjogIzAwMFxufVxuXG4ubWFpbi1tZW51IGxpIGE6aG92ZXIgaSB7XG5cdGNvbG9yOiAjYjAxYmE1O1xufVxuXG4ubWFpbi1tZW51IGxpOmhvdmVyIC5zdWItbWVudSB7XG5cdHZpc2liaWxpdHk6IHZpc2libGU7XG5cdG9wYWNpdHk6IDE7XG5cdG1hcmdpbi10b3A6IDA7XG59XG5cbi5tYWluLW1lbnUgbGk6aG92ZXI+YSB7XG5cdGNvbG9yOiAjYjAxYmE1O1xufVxuXG4ubWFpbi1tZW51IGxpOmhvdmVyPmE6YWZ0ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTkwZDM2XG59XG5cbi5tYWluLW1lbnUgbGkgLnN1Yi1tZW51IHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsaXN0LXN0eWxlOiBub25lO1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHR3aWR0aDogMjIwcHg7XG5cdGxlZnQ6IDA7XG5cdHRvcDogMTAwJTtcblx0cGFkZGluZzogMjBweCAwO1xuXHR2aXNpYmlsaXR5OiBoaWRkZW47XG5cdG9wYWNpdHk6IDA7XG5cdG1hcmdpbi10b3A6IDUwcHg7XG5cdGJhY2tncm91bmQ6IHJnYigyMzMsIDI1MCwgMCk7XG5cdHotaW5kZXg6IDk5O1xuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuXHQtby10cmFuc2l0aW9uOiBhbGwgMC40cztcblx0dHJhbnNpdGlvbjogYWxsIDAuNHM7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDdweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcblx0Ym94LXNoYWRvdzogMnB4IDdweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLm1haW4tbWVudSBsaSAuc3ViLW1lbnUgbGkge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cblxuLm1haW4tbWVudSBsaSAuc3ViLW1lbnUgbGkgYSB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRjb2xvcjogIzAwMDtcblx0bWFyZ2luLXJpZ2h0OiAwO1xuXHRwYWRkaW5nOiA4cHggMzBweDtcblx0Zm9udC1zaXplOiAyMHB4O1xufVxuXG4ubWFpbi1tZW51IGxpIC5zdWItbWVudSBsaSBhOmFmdGVyIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuLm1haW4tbWVudSBsaSAuc3ViLW1lbnUgbGkgYTpob3ZlciB7XG5cdGNvbG9yOiAjYjAxYmE1O1xufVxuXG4uc2xpY2tuYXZfbWVudSB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tXG4gIEhlcm8gc2VjdGlvblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLmhlcm8tc2xpZGVyIC5vd2wtZG90cyB7XG5cdGRpc3BsYXk6IC1tcy1mbGV4O1xuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdHotaW5kZXg6IDI7XG5cdGxlZnQ6IGNhbGMoNTAlIC0gNzQwcHgpO1xuXHRib3R0b206IDM4cHg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0d2lkdGg6IDE0OTZweDtcblx0cG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uaGVyby1zbGlkZXIgLm93bC1kb3RzIC5vd2wtZG90IHtcblx0d2lkdGg6IDQ0cHg7XG5cdGhlaWdodDogNDRweDtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHRjb2xvcjogI2ZmZjtcblx0ZGlzcGxheTogLW1zLWlubGluZS1mbGV4O1xuXHRkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XG5cdGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG5cdC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcblx0LW1zLWZsZXgtcGFjazogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmhlcm8tc2xpZGVyIC5vd2wtZG90cyAub3dsLWRvdC5hY3RpdmUge1xuXHRjb2xvcjogI2IwMWJhNTtcblx0Ym9yZGVyOiAycHggc29saWQgI2IwMWJhNTtcbn1cblxuLmhlcm8tc2xpZGVyIC5vd2wtbmF2IHtcblx0bWFyZ2luLXRvcDogLTI0cHg7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaGVyby1zbGlkZXIgLm93bC1uYXYgLm93bC1uZXh0IHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDUwJTtcblx0cmlnaHQ6IDEwMHB4O1xufVxuXG4uaGVyby1pdGVtIHtcblx0aGVpZ2h0OiA5MjFweDtcblx0cGFkZGluZy10b3A6IDEyNXB4O1xuXHRib3JkZXItYm90dG9tOiAycHggc29saWQgI2IwMWJhNTtcbn1cblxuLmhlcm8taXRlbSBoMiB7XG5cdGZvbnQtc2l6ZTogMTYwcHg7XG5cdGNvbG9yOiAjZmZmO1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRsaW5lLWhlaWdodDogMTtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR0b3A6IDEwMHB4O1xuXHRvcGFjaXR5OiAwO1xufVxuXG4uaGVyby1pdGVtIHAge1xuXHRmb250LXNpemU6IDI0cHg7XG5cdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdG9wYWNpdHk6IDAuMzk7XG5cdG1hcmdpbi1ib3R0b206IDcwcHg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dG9wOiA4MHB4O1xuXHRvcGFjaXR5OiAwO1xufVxuXG4uaGVyby1pdGVtIC5zaXRlLWJ0biB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dG9wOiA1MHB4O1xuXHRvcGFjaXR5OiAwO1xufVxuXG4uaGVyby1zbGlkZXIgLm93bC1pdGVtLmFjdGl2ZSAuaGVyby1pdGVtIGgyLFxuLmhlcm8tc2xpZGVyIC5vd2wtaXRlbS5hY3RpdmUgLmhlcm8taXRlbSBwLFxuLmhlcm8tc2xpZGVyIC5vd2wtaXRlbS5hY3RpdmUgLmhlcm8taXRlbSAuc2l0ZS1idG4ge1xuXHR0b3A6IDA7XG5cdG9wYWNpdHk6IDE7XG59XG5cbi5oZXJvLXNsaWRlciAub3dsLWl0ZW0uYWN0aXZlIC5oZXJvLWl0ZW0gaDIge1xuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMC40cztcblx0LW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAwLjRzO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlIDAuNHM7XG59XG5cbi5oZXJvLXNsaWRlciAub3dsLWl0ZW0uYWN0aXZlIC5oZXJvLWl0ZW0gcCB7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAwLjZzO1xuXHQtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlIDAuNnM7XG5cdHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMC42cztcbn1cblxuLmhlcm8tc2xpZGVyIC5vd2wtaXRlbS5hY3RpdmUgLmhlcm8taXRlbSAuc2l0ZS1idG4ge1xuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMC44cztcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlIDAuOHM7XG5cdC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMC44cztcblx0dHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAwLjhzO1xufVxuXG4uaGVyby1zbGlkZXIgLm93bC1pdGVtLmFjdGl2ZSAuaGVyby1pdGVtIC5vZmZlci1jYXJkIHtcblx0b3BhY2l0eTogMTtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcblx0LW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuXHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlIDFzO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMXM7XG5cdC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMXM7XG5cdHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMXM7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS1cbiAgSW50cm8gc2VjdGlvblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLmludHJvLXNlY3Rpb24ge1xuXHRiYWNrZ3JvdW5kOiAjMGMwNjJlO1xuXHRwYWRkaW5nOiAxMTVweCAwO1xufVxuXG4udGV4dC1ib3ggLnRvcC1tZXRhIHtcblx0Zm9udC1zaXplOiAxOHB4O1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4udGV4dC1ib3ggLnRvcC1tZXRhIGEge1xuXHRjb2xvcjogI2IwMWJhNTtcbn1cblxuLnRleHQtYm94IGgzIHtcblx0bWFyZ2luLWJvdHRvbTogNDBweDtcblx0bWF4LXdpZHRoOiAzNzBweDtcbn1cblxuLnRleHQtYm94IHAge1xuXHRmb250LXNpemU6IDE1cHg7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGNvbG9yOiAjNjg2NDdkO1xuXHRtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuXG4udGV4dC1ib3ggLnJlYWQtbW9yZSB7XG5cdGZvbnQtc2l6ZTogMTVweDtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRjb2xvcjogI2ZmZjtcbn1cblxuLnRleHQtYm94IC5yZWFkLW1vcmUgaW1nIHtcblx0bWFyZ2luLWxlZnQ6IDEzcHg7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS1cbiBCbG9nIFNlY3Rpb25cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5ibG9nLXNlY3Rpb24ge1xuXHQvKiBQZXJtYWxpbmsgLSB1c2UgdG8gZWRpdCBhbmQgc2hhcmUgdGhpcyBncmFkaWVudDogaHR0cDovL2NvbG9yemlsbGEuY29tL2dyYWRpZW50LWVkaXRvci8jNTAxNzU1KzAsMmQxODU0KzEwMCAqL1xuXHRiYWNrZ3JvdW5kOiAjNTAxNzU1O1xuXHQvKiBPbGQgYnJvd3NlcnMgKi9cblx0LyogRkYzLjYtMTUgKi9cblx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsICM1MDE3NTUgMCUsICMyZDE4NTQgMTAwJSk7XG5cdC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXG5cdGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0NWRlZywgIzUwMTc1NSAwJSwgIzJkMTg1NCAxMDAlKTtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNTAxNzU1IDAlLCAjMmQxODU0IDEwMCUpO1xuXHQvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cblx0ZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyM1MDE3NTUnLCBlbmRDb2xvcnN0cj0nIzJkMTg1NCcsIEdyYWRpZW50VHlwZT0xKTtcblx0LyogSUU2LTkgZmFsbGJhY2sgb24gaG9yaXpvbnRhbCBncmFkaWVudCAqL1xufVxuXG4uYmxvZy1zZWN0aW9uIC5zZWN0aW9uLXRpdGxlIHtcblx0bWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLmJsb2ctZmlsdGVyIHtcblx0bGlzdC1zdHlsZTogbm9uZTtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5cbi5ibG9nLWZpbHRlciBsaSB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmJsb2ctZmlsdGVyIGxpIGEge1xuXHRkaXNwbGF5OiBibG9jaztcblx0Y29sb3I6ICNmZmY7XG5cdHBhZGRpbmc6IDE2cHggMzZweDtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRmb250LXdlaWdodDogNzAwO1xuXHRiYWNrZ3JvdW5kOiAjNmYyYjk1O1xuXHRsaW5lLWhlaWdodDogMS4xO1xuXHRtYXJnaW4tcmlnaHQ6IDdweDtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcblx0LW8tdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cdHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uYmxvZy1maWx0ZXIgbGkgYTpob3ZlciB7XG5cdGJhY2tncm91bmQ6ICNiMDFiYTU7XG59XG5cbi5ibG9nLWl0ZW0ge1xuXHRtYXJnaW4tdG9wOiA4NnB4O1xufVxuXG4uYmxvZy1pdGVtIC5ibG9nLXRodW1iIHtcblx0d2lkdGg6IDM2MnB4O1xuXHRmbG9hdDogbGVmdDtcblx0bWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuXG4uYmxvZy1pdGVtIC50ZXh0LWJveCB7XG5cdG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5ibG9nLWl0ZW0gLnRleHQtYm94IHAge1xuXHRtYXJnaW4tYm90dG9tOiA0MnB4O1xufVxuXG4ud2lkZ2V0LWl0ZW0ge1xuXHRtYXJnaW4tYm90dG9tOiA4NXB4O1xufVxuXG4ud2lkZ2V0LWl0ZW06bGFzdC1jaGlsZCB7XG5cdG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi53aWRnZXQtaXRlbSAud2lkZ2V0LXRpdGxlIHtcblx0Y29sb3I6ICNmZmY7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcblx0cGFkZGluZy1sZWZ0OiAzOHB4O1xuXHRtYXJnaW4tYm90dG9tOiA0OHB4O1xufVxuXG4udHJlbmRpbmctd2lkZ2V0IC50dy1pdGVtIHtcblx0bWFyZ2luLWJvdHRvbTogMzhweDtcbn1cblxuLnRyZW5kaW5nLXdpZGdldCAudHctaXRlbTpsYXN0LWNoaWxkIHtcblx0bWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnRyZW5kaW5nLXdpZGdldCAudHctdGh1bWIge1xuXHRmbG9hdDogbGVmdDtcblx0bWFyZ2luLXJpZ2h0OiAxN3B4O1xuXHRvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udHJlbmRpbmctd2lkZ2V0IC50dy10ZXh0IC50dy1tZXRhIHtcblx0Y29sb3I6ICM2ODY0N2Q7XG5cdGZvbnQtc2l6ZTogMTJweDtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0bWFyZ2luLWJvdHRvbTogN3B4O1xufVxuXG4udHJlbmRpbmctd2lkZ2V0IC50dy10ZXh0IC50dy1tZXRhIGEge1xuXHRjb2xvcjogI2IwMWJhNTtcbn1cblxuLnRyZW5kaW5nLXdpZGdldCAudHctdGV4dCBoNSB7XG5cdGZvbnQtc2l6ZTogMThweDtcblx0Y29sb3I6ICNmZmY7XG5cdGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi5jYXRlZ29yaWVzLXdpZGdldCB7XG5cdGJhY2tncm91bmQ6ICMzNDE2NGI7XG5cdHBhZGRpbmc6IDU1cHggMCAyNXB4O1xufVxuXG4uY2F0ZWdvcmllcy13aWRnZXQgdWwge1xuXHRsaXN0LXN0eWxlOiBub25lO1xuXHRwYWRkaW5nOiAwIDM4cHg7XG59XG5cbi5jYXRlZ29yaWVzLXdpZGdldCB1bCBsaSB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY2F0ZWdvcmllcy13aWRnZXQgdWwgbGkgYSB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGNvbG9yOiAjNjg2NDdkO1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xuXHRwYWRkaW5nLXJpZ2h0OiAxOXB4O1xuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzO1xuXHQtby10cmFuc2l0aW9uOiBhbGwgMC4ycztcblx0dHJhbnNpdGlvbjogYWxsIDAuMnM7XG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IC0xMjAlIGNlbnRlcjtcblx0YmFja2dyb3VuZC1zaXplOiAxMXB4O1xufVxuXG4uY2F0ZWdvcmllcy13aWRnZXQgdWwgbGkgYTpob3ZlciB7XG5cdGNvbG9yOiAjYjAxYmE1O1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7XG59XG5cbi5zZWFyY2gtd2lkZ2V0IHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2VhcmNoLXdpZGdldCBpbnB1dCB7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDQwcHg7XG5cdGJvcmRlcjogbm9uZTtcblx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM3MjYyOGI7XG5cdGJhY2tncm91bmQ6IG5vbmU7XG5cdHBhZGRpbmctcmlnaHQ6IDYwcHg7XG5cdGNvbG9yOiAjZmZmO1xufVxuXG4uc2VhcmNoLXdpZGdldCBidXR0b24ge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHJpZ2h0OiAwO1xuXHR0b3A6IDA7XG5cdGNvbG9yOiAjYjAxYmE1O1xuXHRmb250LXdlaWdodDogNzAwO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRiYWNrZ3JvdW5kOiBub25lO1xuXHRib3JkZXI6IG5vbmU7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5sYXRlc3QtY29tbWVudHMgLmxjLWl0ZW0ge1xuXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4ubGF0ZXN0LWNvbW1lbnRzIC5sYy1pdGVtOmxhc3QtY2hpbGQge1xuXHRtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ubGF0ZXN0LWNvbW1lbnRzIC5sYy1pdGVtIC5sYy1hdmF0YXIge1xuXHR3aWR0aDogNjRweDtcblx0aGVpZ2h0OiA2NHB4O1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdGZsb2F0OiBsZWZ0O1xuXHRtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG5cbi5sYXRlc3QtY29tbWVudHMgLmxjLWl0ZW0gLnR3LXRleHQge1xuXHRwYWRkaW5nLXRvcDogMTBweDtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRjb2xvcjogI2ZmZjtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmxhdGVzdC1jb21tZW50cyAubGMtaXRlbSAudHctdGV4dCBhIHtcblx0Y29sb3I6ICNiMDFiYTU7XG59XG5cbi5sYXRlc3QtY29tbWVudHMgLmxjLWl0ZW0gLnR3LXRleHQgc3BhbiB7XG5cdGNvbG9yOiAjNjg2NDdkO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBJbnRybyB2aWRlbyBzZWN0aW9uXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5pbnRyby12aWRlby1zZWN0aW9uIHtcblx0aGVpZ2h0OiA3NTdweDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udmlkZW8tcGxheS1idG4ge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxlZnQ6IGNhbGMoNTAlIC0gNjFweCk7XG5cdHRvcDogY2FsYyg1MCUgLSA2MXB4KTtcblx0d2lkdGg6IDEyMnB4O1xuXHRoZWlnaHQ6IDEyMnB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHBhZGRpbmctdG9wOiAzNXB4O1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNik7XG59XG5cbi52aWRlby10ZXh0IHtcblx0bWFyZ2luLWJvdHRvbTogODBweDtcblx0cGFkZGluZzogMjdweCAwO1xuXHRwYWRkaW5nLWxlZnQ6IDI1cHg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnZpZGVvLXRleHQgaDIge1xuXHRmb250LXNpemU6IDQ4cHg7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0Y29sb3I6ICNmZmY7XG5cdG1hcmdpbi1ib3R0b206IDFweDtcbn1cblxuLnZpZGVvLXRleHQgcCB7XG5cdGZvbnQtc2l6ZTogMThweDtcblx0Y29sb3I6ICNhM2ExYjM7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi52aWRlby10ZXh0OmFmdGVyIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRjb250ZW50OiBcIlwiO1xuXHR3aWR0aDogOXB4O1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGxlZnQ6IC0yMnB4O1xuXHR0b3A6IDA7XG5cdGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2RlNDZkNjtcblx0YmFja2dyb3VuZDogI2ZmZjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgOXB4IDNweCByZ2JhKDIyNiwgMzAsIDIyOCwgMC41KTtcblx0Ym94LXNoYWRvdzogMCAwIDlweCAzcHggcmdiYSgyMjYsIDMwLCAyMjgsIDAuNSk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS1cbiAgRmVhdHVyZWQgc2VjdGlvblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLmZlYXR1cmVkLXNlY3Rpb24ge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5mZWF0dXJlZC1iZyB7XG5cdHdpZHRoOiBjYWxjKDUwJSAtIDE1NnB4KTtcblx0ZmxvYXQ6IGxlZnQ7XG5cdGhlaWdodDogMTAwJTtcblx0bGVmdDogMDtcblx0cmlnaHQ6IDA7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmZlYXR1cmVkLWJveCB7XG5cdGZsb2F0OiByaWdodDtcblx0d2lkdGg6IGNhbGMoNTAlICsgMTU2cHgpO1xuXHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRwYWRkaW5nOiAxMDBweCA1MHB4IDEzMHB4IDc5cHg7XG59XG5cbi5mZWF0dXJlZC1ib3ggLnRleHQtYm94IHtcblx0bWF4LXdpZHRoOiA4MTBweDtcbn1cblxuLmZlYXR1cmVkLWJveCAudGV4dC1ib3ggLnRvcC1tZXRhIHtcblx0Y29sb3I6ICM2ODY0N2Q7XG59XG5cbi5mZWF0dXJlZC1ib3ggLnRleHQtYm94IGgzIHtcblx0Zm9udC1zaXplOiA2MHB4O1xuXHRtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5mZWF0dXJlZC1ib3ggLnRleHQtYm94IHAge1xuXHRmb250LXNpemU6IDE2cHg7XG59XG5cbi5mZWF0dXJlZC1ib3ggLnRleHQtYm94IC5yZWFkLW1vcmUge1xuXHRjb2xvcjogIzI1MWUyZjtcbn1cblxuLmdyYWRpZW50LWJnLFxuLm5ld3NsZXR0ZXItc2VjdGlvbiB7XG5cdGJhY2tncm91bmQ6ICMzZTBmM2Q7XG5cdC8qIE9sZCBicm93c2VycyAqL1xuXHQvKiBGRjMuNi0xNSAqL1xuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjM2UwZjNkIDAlLCAjMWMwZjNiIDEwMCUpO1xuXHQvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgZnJvbSgjM2UwZjNkKSwgdG8oIzFjMGYzYikpO1xuXHRiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgIzNlMGYzZCAwJSwgIzFjMGYzYiAxMDAlKTtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjM2UwZjNkIDAlLCAjMWMwZjNiIDEwMCUpO1xuXHQvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cblx0ZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyMzZTBmM2QnLCBlbmRDb2xvcnN0cj0nIzFjMGYzYicsIEdyYWRpZW50VHlwZT0xKTtcblx0LyogSUU2LTkgKi9cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgTmV3c2xldHRlciBzZWN0aW9uXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLm5ld3NsZXR0ZXItc2VjdGlvbiB7XG5cdHBhZGRpbmc6IDEwOHB4IDAgOTVweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubmV3c2xldHRlci1zZWN0aW9uIGgyIHtcblx0Zm9udC1zaXplOiA0OHB4O1xuXHRjb2xvcjogI2ZmZjtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRtYXJnaW4tYm90dG9tOiA3M3B4O1xufVxuXG4ubmV3c2xldHRlci1mb3JtIHtcblx0cGFkZGluZy1sZWZ0OiA1NnB4O1xufVxuXG4ubmV3c2xldHRlci1mb3JtIGlucHV0IHtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRmb250LXdlaWdodDogNzAwO1xuXHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdGNvbG9yOiAjZmZmO1xuXHR3aWR0aDogNzg3cHg7XG5cdGJvcmRlcjogbm9uZTtcblx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM5YjkxYTY7XG5cdGJhY2tncm91bmQ6IG5vbmU7XG5cdGhlaWdodDogNjNweDtcblx0bWFyZ2luLXJpZ2h0OiAyNnB4O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tXG4gIEZvb3RlciBzZWN0aW9uXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uZm9vdGVyLXNlY3Rpb24ge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdC8qIFBlcm1hbGluayAtIHVzZSB0byBlZGl0IGFuZCBzaGFyZSB0aGlzIGdyYWRpZW50OiBodHRwOi8vY29sb3J6aWxsYS5jb20vZ3JhZGllbnQtZWRpdG9yLyMzMzBkMzgrMCwxOTBkMzYrMTAwICovXG5cdGJhY2tncm91bmQ6ICMzMzBkMzg7XG5cdC8qIE9sZCBicm93c2VycyAqL1xuXHQvKiBGRjMuNi0xNSAqL1xuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMzMwZDM4IDAlLCAjMTkwZDM2IDEwMCUpO1xuXHQvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgZnJvbSgjMzMwZDM4KSwgdG8oIzE5MGQzNikpO1xuXHRiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgIzMzMGQzOCAwJSwgIzE5MGQzNiAxMDAlKTtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzMwZDM4IDAlLCAjMTkwZDM2IDEwMCUpO1xuXHQvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cblx0ZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyMzMzBkMzgnLCBlbmRDb2xvcnN0cj0nIzE5MGQzNicsIEdyYWRpZW50VHlwZT0xKTtcblx0LyogSUU2LTkgKi9cbn1cblxuLmZvb3Rlci1zZWN0aW9uIC5jb250YWluZXIge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHBhZGRpbmc6IDYwcHggMTVweCAyNXB4O1xufVxuXG4uZm9vdGVyLWxlZnQtcGljIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiAtMTNweDtcblx0Ym90dG9tOiAxOXB4O1xufVxuXG4uZm9vdGVyLXJpZ2h0LXBpYyB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0cmlnaHQ6IDUwcHg7XG5cdGJvdHRvbTogMTlweDtcbn1cblxuLmZvb3Rlci1tZW51IHtcblx0cGFkZGluZy10b3A6IDYycHg7XG59XG5cbi5mb290ZXItbWVudSBsaTpsYXN0LWNoaWxkIGEge1xuXHRtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5mb290ZXItc29jaWFsIHtcblx0cGFkZGluZy10b3A6IDIwcHg7XG5cdHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuXG4uZm9vdGVyLXNvY2lhbCBhOmZpcnN0LWNoaWxkIHtcblx0bWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5jb3B5cmlnaHQge1xuXHRmb250LXNpemU6IDEycHg7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGNvbG9yOiAjOTE5MGE1O1xuXHRvcGFjaXR5OiAwLjIwO1xufVxuXG4uY29weXJpZ2h0IGEge1xuXHRjb2xvcjogIzkxOTBhNTtcbn1cblxuLmNvcHlyaWdodCBhOmhvdmVyIHtcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS1cbiAgT3RoZXIgUGFnZXNcbj09PT09PT09PT09PT09PT09PT09PVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLnBhZ2UtdG9wLXNlY3Rpb24ge1xuXHRoZWlnaHQ6IDM1NXB4O1xuXHRwYWRkaW5nLXRvcDogMjEwcHg7XG59XG5cbi5wYWdlLWluZm8ge1xuXHRtYXgtd2lkdGg6IDE0OTZweDtcblx0bWFyZ2luOiAwIGF1dG87XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Y29sb3I6ICNmZmY7XG5cdHBhZGRpbmctbGVmdDogNjBweDtcbn1cblxuLnBhZ2UtaW5mbyBoMiB7XG5cdGNvbG9yOiAjZmZmO1xuXHRmb250LXNpemU6IDQ4cHg7XG59XG5cbi5zaXRlLWJyZWFkY3J1bWIgYSxcbi5zaXRlLWJyZWFkY3J1bWIgc3BhbiB7XG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcblx0Y29sb3I6ICNmZmY7XG5cdG1hcmdpbjogMCAxMHB4O1xuXHRmb250LXdlaWdodDogNzAwO1xufVxuXG4uc2l0ZS1icmVhZGNydW1iIGE6Zmlyc3QtY2hpbGQge1xuXHRtYXJnaW4tbGVmdDogMDtcbn1cblxuLnNpdGUtYnJlYWRjcnVtYiBzcGFuIHtcblx0Y29sb3I6ICNjMzEzYjc7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tXG4gIEdhbWVzIFBhZ2Vcbi0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLmdhbWVzLXNlY3Rpb24ge1xuXHRwYWRkaW5nOiAxMDhweCAwO1xuXHQvKiBQZXJtYWxpbmsgLSB1c2UgdG8gZWRpdCBhbmQgc2hhcmUgdGhpcyBncmFkaWVudDogaHR0cDovL2NvbG9yemlsbGEuY29tL2dyYWRpZW50LWVkaXRvci8jNTAxNzU1KzAsMmQxODU0KzEwMCAqL1xuXHRiYWNrZ3JvdW5kOiAjNTAxNzU1O1xuXHQvKiBPbGQgYnJvd3NlcnMgKi9cblx0LyogRkYzLjYtMTUgKi9cblx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsICM1MDE3NTUgMCUsICMyZDE4NTQgMTAwJSk7XG5cdC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXG5cdGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0NWRlZywgIzUwMTc1NSAwJSwgIzJkMTg1NCAxMDAlKTtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNTAxNzU1IDAlLCAjMmQxODU0IDEwMCUpO1xuXHQvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cblx0ZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyM1MDE3NTUnLCBlbmRDb2xvcnN0cj0nIzJkMTg1NCcsIEdyYWRpZW50VHlwZT0xKTtcblx0LyogSUU2LTkgZmFsbGJhY2sgb24gaG9yaXpvbnRhbCBncmFkaWVudCAqL1xufVxuXG4uZ2FtZS1maWx0ZXIge1xuXHRsaXN0LXN0eWxlOiBub25lO1xuXHRtYXJnaW4tYm90dG9tOiA4MnB4O1xufVxuXG4uZ2FtZS1maWx0ZXIgbGkge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdHdpZHRoOiA0MHB4O1xuXHRoZWlnaHQ6IDM0cHg7XG5cdGJhY2tncm91bmQ6ICM1MDNjNmU7XG5cdGJvcmRlci1yYWRpdXM6IDE3cHg7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cdC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLmdhbWUtZmlsdGVyIGxpOmhvdmVyIHtcblx0YmFja2dyb3VuZDogI2MzMTNiNztcbn1cblxuLmdhbWUtZmlsdGVyIGxpIGEge1xuXHRmb250LXNpemU6IDE1cHg7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdGNvbG9yOiAjZmZmO1xuXHRkaXNwbGF5OiBibG9jaztcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRwYWRkaW5nLXRvcDogN3B4O1xufVxuXG4uZ2FtZS1pdGVtIHtcblx0bWFyZ2luLWJvdHRvbTogODBweDtcbn1cblxuLmdhbWUtaXRlbSBoNSB7XG5cdGZvbnQtc2l6ZTogMjBweDtcblx0Y29sb3I6ICNmZmY7XG5cdHBhZGRpbmctdG9wOiAzMHB4O1xuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZ2FtZS1pdGVtIC5yZWFkLW1vcmUge1xuXHRmb250LXNpemU6IDE1cHg7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcblx0Y29sb3I6ICNiMDFiYTU7XG59XG5cbi5nYW1lLWl0ZW0gLnJlYWQtbW9yZSBpbWcge1xuXHRtYXJnaW4tbGVmdDogMTNweDtcbn1cblxuLnNpdGUtcGFnaW5hdGlvbiB7XG5cdGRpc3BsYXk6IC1tcy1mbGV4O1xuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XG5cdGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zaXRlLXBhZ2luYXRpb24gYSB7XG5cdHdpZHRoOiAzOHB4O1xuXHRoZWlnaHQ6IDQ0cHg7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0Y29sb3I6ICNmZmY7XG5cdGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleDtcblx0ZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xuXHRkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XG5cdGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXHQtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuXHQtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHQtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG5cdC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XG5cdC1vLXRyYW5zaXRpb246IGFsbCAwLjVzO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cblxuLnNpdGUtcGFnaW5hdGlvbiBhLmFjdGl2ZSB7XG5cdHdpZHRoOiA0NHB4O1xuXHRtYXJnaW46IDAgMTBweDtcblx0Y29sb3I6ICNiMDFiYTU7XG5cdGJvcmRlcjogMnB4IHNvbGlkICNiMDFiYTU7XG59XG5cbi5zaXRlLXBhZ2luYXRpb24gYS5hY3RpdmU6Zmlyc3QtY2hpbGQge1xuXHRtYXJnaW4tbGVmdDogMDtcbn1cblxuLmdhbWUtcGFnZS1zaWRlYmVyIC53aWRnZXQtaXRlbSB7XG5cdG1hcmdpbi1ib3R0b206IDU1cHg7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLVxuICBHYW1lIHNpbmdsZSBQYWdlXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uZ2FtZXMtc2luZ2xlLXBhZ2UsXG4ucmV2aWV3LXNlY3Rpb24sXG4uYmxvZy1wYWdlLFxuLmNvbnRhY3QtcGFnZSB7XG5cdHBhZGRpbmc6IDEwNHB4IDA7XG5cdC8qIFBlcm1hbGluayAtIHVzZSB0byBlZGl0IGFuZCBzaGFyZSB0aGlzIGdyYWRpZW50OiBodHRwOi8vY29sb3J6aWxsYS5jb20vZ3JhZGllbnQtZWRpdG9yLyM1MDE3NTUrMCwyZDE4NTQrMTAwICovXG5cdGJhY2tncm91bmQ6ICM1MDE3NTU7XG5cdC8qIE9sZCBicm93c2VycyAqL1xuXHQvKiBGRjMuNi0xNSAqL1xuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgIzUwMTc1NSAwJSwgIzJkMTg1NCAxMDAlKTtcblx0LyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cblx0YmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNTAxNzU1IDAlLCAjMmQxODU0IDEwMCUpO1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM1MDE3NTUgMCUsICMyZDE4NTQgMTAwJSk7XG5cdC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xuXHRmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzUwMTc1NScsIGVuZENvbG9yc3RyPScjMmQxODU0JywgR3JhZGllbnRUeXBlPTEpO1xuXHQvKiBJRTYtOSBmYWxsYmFjayBvbiBob3Jpem9udGFsIGdyYWRpZW50ICovXG59XG5cbi5nYW1lLXNpbmdsZS1wcmV2aWV3IHtcblx0bWFyZ2luLWJvdHRvbTogMTA4cHg7XG59XG5cbi5nYW1lLXNpbmdsZS1jb250ZW50IC5ncy1tZXRhIHtcblx0Zm9udC1zaXplOiAxOHB4O1xuXHRjb2xvcjogIzY4NjQ3ZDtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmdhbWUtc2luZ2xlLWNvbnRlbnQgLmdzLW1ldGEgYSB7XG5cdGNvbG9yOiAjYjAxYmE1O1xufVxuXG4uZ2FtZS1zaW5nbGUtY29udGVudCAuZ3MtdGl0bGUge1xuXHRmb250LXNpemU6IDYwcHg7XG5cdGNvbG9yOiAjZmZmO1xuXHRtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4uZ2FtZS1zaW5nbGUtY29udGVudCBoNCB7XG5cdGNvbG9yOiAjYjAxYmE1O1xuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZ2FtZS1zaW5nbGUtY29udGVudCBwIHtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRjb2xvcjogIzY4NjQ3ZDtcblx0bGluZS1oZWlnaHQ6IDEuODtcblx0bWFyZ2luLWJvdHRvbTogNzBweDtcbn1cblxuLnJhdGluZy13aWRnZXQge1xuXHRiYWNrZ3JvdW5kOiAjMzQxNjRiO1xuXHRwYWRkaW5nOiA1NXB4IDAgMzBweDtcbn1cblxuLnJhdGluZy13aWRnZXQgdWwge1xuXHRsaXN0LXN0eWxlOiBub25lO1xuXHRwYWRkaW5nOiAwIDM4cHg7XG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5yYXRpbmctd2lkZ2V0IHVsIGxpIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Y29sb3I6ICNiMDFiYTU7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5yYXRpbmctd2lkZ2V0IHVsIGxpIHNwYW4ge1xuXHRmbG9hdDogcmlnaHQ7XG5cdGNvbG9yOiAjNjg2NDdkO1xufVxuXG4ucmF0aW5nLXdpZGdldCBoNSB7XG5cdHRleHQtYWxpZ246IHJpZ2h0O1xuXHRmb250LXNpemU6IDM2cHg7XG5cdGNvbG9yOiAjZmZmO1xuXHRmb250LXdlaWdodDogOTAwO1xuXHRwYWRkaW5nLXJpZ2h0OiAzOHB4O1xufVxuXG4ucmF0aW5nLXdpZGdldCBoNSBpIHtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdGNvbG9yOiAjNjU2MDdiO1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRtYXJnaW4tcmlnaHQ6IDE4cHg7XG59XG5cbi5yYXRpbmctd2lkZ2V0IGg1IHNwYW4ge1xuXHRjb2xvcjogI2IwMWJhNTtcbn1cblxuLnRlc3RpbW9uaWFscy13aWRnZXQge1xuXHRiYWNrZ3JvdW5kOiAjMzQxNjRiO1xuXHRwYWRkaW5nOiA1NXB4IDAgNTBweDtcbn1cblxuLnRlc3RpbW9uaWFscy13aWRnZXQgLnRlc3RpbS10ZXh0IHtcblx0cGFkZGluZzogMCAzMHB4O1xufVxuXG4udGVzdGltb25pYWxzLXdpZGdldCAudGVzdGltLXRleHQgcCB7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Y29sb3I6ICM2ODY0N2Q7XG5cdGxpbmUtaGVpZ2h0OiAxLjg7XG5cdG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi50ZXN0aW1vbmlhbHMtd2lkZ2V0IC50ZXN0aW0tdGV4dCBoNiB7XG5cdGNvbG9yOiAjNjg2NDdkO1xuXHRwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbi50ZXN0aW1vbmlhbHMtd2lkZ2V0IC50ZXN0aW0tdGV4dCBoNiBzcGFuIHtcblx0Y29sb3I6ICNiMDFiYTU7XG59XG5cbi5nYW1lLWF1dGhvci1zZWN0aW9uIHtcblx0YmFja2dyb3VuZDogIzNhMTg1NDtcblx0cGFkZGluZzogNTFweCAwO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZ2FtZS1hdXRob3ItcGljIHtcblx0d2lkdGg6IDExN3B4O1xuXHRoZWlnaHQ6IDExN3B4O1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdGZsb2F0OiBsZWZ0O1xuXHRtYXJnaW4tcmlnaHQ6IDU1cHg7XG59XG5cbi5nYW1lLWF1dGhvci1pbmZvIHtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0cGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5nYW1lLWF1dGhvci1pbmZvIGg0IHtcblx0Y29sb3I6ICNmZmY7XG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5nYW1lLWF1dGhvci1pbmZvIGg0IHNwYW4ge1xuXHRjb2xvcjogI2IwMWJhNTtcbn1cblxuLmdhbWUtYXV0aG9yLWluZm8gcCB7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Y29sb3I6ICM2ODY0N2Q7XG5cdGxpbmUtaGVpZ2h0OiAxLjg7XG5cdG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS1cbiAgUmV2aWV3IHNlY3Rpb25cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5yZXZpZXctaXRlbSB7XG5cdG1hcmdpbi1ib3R0b206IDg3cHg7XG59XG5cbi5yZXZpZXctY29udGVudCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnJldmlldy1jb250ZW50IGgzIHtcblx0bWF4LXdpZHRoOiAxMDAlO1xuXHRtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuXG4ucmV2aWV3LWNvbnRlbnQgcCB7XG5cdG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5yZXZpZXctY29udGVudCAucmF0aW5nIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRyaWdodDogMDtcblx0dG9wOiAwO1xufVxuXG4ucmV2aWV3LWNvbnRlbnQgLnJhdGluZyBoNSB7XG5cdHRleHQtYWxpZ246IHJpZ2h0O1xuXHRmb250LXNpemU6IDM2cHg7XG5cdGNvbG9yOiAjZmZmO1xuXHRmb250LXdlaWdodDogOTAwO1xuXHRwYWRkaW5nLXJpZ2h0OiAzOHB4O1xufVxuXG4ucmV2aWV3LWNvbnRlbnQgLnJhdGluZyBoNSBpIHtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdGNvbG9yOiAjNjU2MDdiO1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRtYXJnaW4tcmlnaHQ6IDE4cHg7XG59XG5cbi5yZXZpZXctY29udGVudCAucmF0aW5nIGg1IHNwYW4ge1xuXHRjb2xvcjogI2MzMTNiNztcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tXG5cdEJsb2cgUGFnZVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLmJsb2ctcGFnZSAuYmxvZy1maWx0ZXIge1xuXHRtYXJnaW4tYm90dG9tOiA3N3B4O1xufVxuXG4uYmlnLWJsb2ctaXRlbSB7XG5cdG1hcmdpbi1ib3R0b206IDY1cHg7XG59XG5cbi5iaWctYmxvZy1pdGVtIC5ibG9nLXRodW1ibmFpbCB7XG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5iaWctYmxvZy1pdGVtIC5ibG9nLWNvbnRlbnQgLnRvcC1tZXRhIHtcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmJpZy1ibG9nLWl0ZW0gLmJsb2ctY29udGVudCBoMyB7XG5cdG1heC13aWR0aDogMTAwJTtcblx0bWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLmJpZy1ibG9nLWl0ZW0gLmJsb2ctY29udGVudCBwIHtcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLVxuICBDb250YWN0IHBhZ2Vcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5tYXAgaWZyYW1lIHtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogNjAwcHg7XG5cdG1hcmdpbi1ib3R0b206IDEwNHB4O1xufVxuXG4uY29udGFjdC1mb3JtIGlucHV0LFxuLmNvbnRhY3QtZm9ybSB0ZXh0YXJlYSB7XG5cdHdpZHRoOiAxMDAlO1xuXHRib3JkZXI6IG5vbmU7XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0KTtcblx0cGFkZGluZy1ib3R0b206IDIwcHg7XG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRjb2xvcjogI2ZmZjtcblx0bGluZS1oZWlnaHQ6IDE7XG59XG5cbi5jb250YWN0LWZvcm0gdGV4dGFyZWEge1xuXHRsaW5lLWhlaWdodDogMS40O1xuXHRoZWlnaHQ6IDE1NnB4O1xuXHRtYXJnaW4tYm90dG9tOiA0OHB4O1xufVxuXG4uY29udGFjdC1mb3JtIC5zaXRlLWJ0biBpbWcge1xuXHRsZWZ0OiA1cHg7XG59XG5cbi5jb250YWN0LXRleHQgaDMge1xuXHRtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uY29udGFjdC10ZXh0IHAge1xuXHRsaW5lLWhlaWdodDogMS45O1xuXHRjb2xvcjogIzY4NjQ3ZDtcblx0bWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLmNvbnQtaW5mbyB7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5jb250LWluZm8gLmNpLWljb24ge1xuXHRmbG9hdDogbGVmdDtcblx0d2lkdGg6IDMycHg7XG5cdG1hcmdpbi1yaWdodDogMjZweDtcbn1cblxuLmNvbnQtaW5mbyAuY2ktdGV4dCB7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLVxuICBSZXNwb25zaXZlXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG5cdC5jb250YWluZXIge1xuXHRcdG1heC13aWR0aDogMTE3NXB4O1xuXHR9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxNTMwcHgpIHtcblx0Lmhlcm8tc2xpZGVyIC5vd2wtZG90cyB7XG5cdFx0d2lkdGg6IDExNzBweDtcblx0XHRsZWZ0OiBjYWxjKDUwJSAtIDU4NXB4KTtcblx0fVxufVxuXG4vKiBNZWRpdW0gc2NyZWVuIDogOTkycHguICovXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcblx0LmJsb2ctaXRlbSAuYmxvZy10aHVtYiB7XG5cdFx0d2lkdGg6IDI1MHB4O1xuXHR9XG5cdC5oZXJvLWl0ZW0gcCB7XG5cdFx0Zm9udC1zaXplOiAyMnB4O1xuXHR9XG5cdC5oZXJvLXNsaWRlciAub3dsLW5hdiAub3dsLW5leHQge1xuXHRcdHJpZ2h0OiAzMHB4O1xuXHR9XG5cdC5oZXJvLXNsaWRlciAub3dsLWRvdHMge1xuXHRcdHdpZHRoOiA5MzBweDtcblx0XHRsZWZ0OiBjYWxjKDUwJSAtIDQ2NXB4KTtcblx0fVxuXHQubmV3c2xldHRlci1mb3JtIHtcblx0XHRwYWRkaW5nLWxlZnQ6IDA7XG5cdH1cblx0Lm5ld3NsZXR0ZXItZm9ybSBpbnB1dCB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0bWFyZ2luLXJpZ2h0OiAwO1xuXHRcdG1hcmdpbi1ib3R0b206IDQwcHg7XG5cdH1cblx0LmdhbWUtZmlsdGVyIGxpIHtcblx0XHR3aWR0aDogMzFweDtcblx0XHRoZWlnaHQ6IDMxcHg7XG5cdH1cblx0LmdhbWUtZmlsdGVyIGxpIGEge1xuXHRcdHBhZGRpbmctdG9wOiA1cHg7XG5cdH1cbn1cblxuLyogVGFibGV0IDo3NjhweC4gKi9cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG5cdC5oZWFkZXItYmFyLXdhcnAge1xuXHRcdHBhZGRpbmc6IDM5cHggMTVweCAwO1xuXHR9XG5cdC5tYWluLW1lbnUgbGkgYSB7XG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xuXHR9XG5cdC5oZXJvLWl0ZW0gaDIge1xuXHRcdGZvbnQtc2l6ZTogMTEwcHg7XG5cdH1cblx0Lmhlcm8taXRlbSBwIHtcblx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0cGFkZGluZzogMCAzMHB4O1xuXHR9XG5cdC5oZXJvLXNsaWRlciAub3dsLW5hdiAub3dsLW5leHQge1xuXHRcdHJpZ2h0OiAwO1xuXHR9XG5cdC5oZXJvLXNsaWRlciAub3dsLWRvdHMge1xuXHRcdHdpZHRoOiA2OTBweDtcblx0XHRsZWZ0OiBjYWxjKDUwJSAtIDM0NXB4KTtcblx0fVxuXHQuYmxvZy1pdGVtIC5ibG9nLXRodW1iIHtcblx0XHRmbG9hdDogbm9uZTtcblx0XHRtYXJnaW4tcmlnaHQ6IDA7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcblx0fVxuXHQuZmVhdHVyZWQtYmcge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cblx0LmZlYXR1cmVkLWJveCB7XG5cdFx0ZmxvYXQ6IG5vbmU7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cblx0Lm5ld3NsZXR0ZXItZm9ybSBpbnB1dCB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0bWFyZ2luLXJpZ2h0OiAwO1xuXHRcdG1hcmdpbi1ib3R0b206IDQwcHg7XG5cdH1cblx0LmZvb3Rlci1yaWdodC1waWMge1xuXHRcdHJpZ2h0OiAxNXB4O1xuXHR9XG5cdC5mb290ZXItbGVmdC1waWMge1xuXHRcdGxlZnQ6IC00NHB4O1xuXHR9XG5cdC5nYW1lLWZpbHRlciB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5cdC5nYW1lLWZpbHRlciBsaSB7XG5cdFx0bWFyZ2luLWJvdHRvbTogNXB4O1xuXHR9XG5cdC5nYW1lLXNpbmdsZS1jb250ZW50IC5ncy10aXRsZSB7XG5cdFx0Zm9udC1zaXplOiA0MHB4O1xuXHR9XG5cdC5yZXZpZXctcGljIGltZyB7XG5cdFx0bWluLXdpZHRoOiAxMDAlO1xuXHRcdG1hcmdpbi1ib3R0b206IDMwcHg7XG5cdH1cblx0LmNvbnRhY3QtdGV4dCB7XG5cdFx0bWFyZ2luLWJvdHRvbTogNTBweDtcblx0fVxufVxuXG4vKiBMYXJnZSBNb2JpbGUgOjQ4MHB4LiAqL1xuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG5cdC5oZWFkZXItYmFyLXdhcnAge1xuXHRcdHBhZGRpbmc6IDI1cHggMjBweCAxMHB4O1xuXHR9XG5cdC5tYWluLW1lbnUucHJpbWFyeS1tZW51IHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG5cdC5zbGlja25hdl9tZW51IHtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRiYWNrZ3JvdW5kOiAjMDgxNjI0O1xuXHR9XG5cdC5zbGlja25hdl9idG4ge1xuXHRcdG1hcmdpbi1yaWdodDogMTBweDtcblx0XHRiYWNrZ3JvdW5kOiAjM2EzYTNhO1xuXHR9XG5cdC5zbGlja25hdl9uYXYgYTpob3Zlcixcblx0LnNsaWNrbmF2X25hdiAuc2xpY2tuYXZfcm93OmhvdmVyIHtcblx0XHRiYWNrZ3JvdW5kOiAjMjUzOTRjO1xuXHRcdGNvbG9yOiAjZmZmO1xuXHR9XG5cdC5oZXJvLWl0ZW0gaDIge1xuXHRcdGZvbnQtc2l6ZTogNzBweDtcblx0fVxuXHQuaGVyby1pdGVtIHAge1xuXHRcdGZvbnQtc2l6ZTogMThweDtcblx0fVxuXHQuZm9vdGVyLXJpZ2h0LXBpYyxcblx0LmZvb3Rlci1sZWZ0LXBpYyB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxuXHQuaGVyby1zbGlkZXIgLm93bC1uYXYgLm93bC1uZXh0IHtcblx0XHR0b3A6IGF1dG87XG5cdFx0Ym90dG9tOiAzM3B4O1xuXHRcdHJpZ2h0OiAxNXB4O1xuXHRcdHotaW5kZXg6IDk5O1xuXHR9XG5cdC5oZXJvLXNsaWRlciAub3dsLWRvdHMge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGxlZnQ6IDA7XG5cdFx0cGFkZGluZy1sZWZ0OiAxNXB4O1xuXHR9XG5cdC5pbnRyby10ZXh0LWJveCB7XG5cdFx0bWFyZ2luLWJvdHRvbTogNDBweDtcblx0fVxuXHQuYmxvZy1pdGVtIC5ibG9nLXRodW1iIHtcblx0XHRmbG9hdDogbm9uZTtcblx0XHRtYXJnaW4tcmlnaHQ6IDA7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcblx0fVxuXHQuc2lkZWJhciB7XG5cdFx0cGFkZGluZy10b3A6IDYwcHg7XG5cdH1cblx0LmZlYXR1cmVkLWJnIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG5cdC5mZWF0dXJlZC1ib3gge1xuXHRcdGZsb2F0OiBub25lO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHR9XG5cdC5mZWF0dXJlZC1ib3ggLnRleHQtYm94IGgzIHtcblx0XHRmb250LXNpemU6IDQ1cHg7XG5cdH1cblx0Lm5ld3NsZXR0ZXItZm9ybSB7XG5cdFx0cGFkZGluZy1sZWZ0OiAwO1xuXHR9XG5cdC5uZXdzbGV0dGVyLWZvcm0gaW5wdXQge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdG1hcmdpbi1yaWdodDogMDtcblx0XHRtYXJnaW4tYm90dG9tOiA0MHB4O1xuXHR9XG5cdC52aWRlby10ZXh0OmFmdGVyIHtcblx0XHRsZWZ0OiAwO1xuXHR9XG5cdC5wYWdlLXRvcC1zZWN0aW9uIHtcblx0XHRoZWlnaHQ6IDQwMHB4O1xuXHRcdHBhZGRpbmctdG9wOiAyNTBweDtcblx0fVxuXHQuZ2FtZS1maWx0ZXIge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0fVxuXHQuZ2FtZS1maWx0ZXIgbGkge1xuXHRcdG1hcmdpbi1ib3R0b206IDVweDtcblx0fVxuXHQuZ2FtZS1zaW5nbGUtY29udGVudCAuZ3MtdGl0bGUge1xuXHRcdGZvbnQtc2l6ZTogNDBweDtcblx0fVxuXHQucmV2aWV3LXBpYyBpbWcge1xuXHRcdG1pbi13aWR0aDogMTAwJTtcblx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xuXHR9XG5cdC5jb250YWN0LXRleHQge1xuXHRcdG1hcmdpbi1ib3R0b206IDUwcHg7XG5cdH1cblx0LnJldmlldy1jb250ZW50IC5yYXRpbmcge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHR9XG5cdC5yZXZpZXctY29udGVudCAucmF0aW5nIGg1IHtcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdHBhZGRpbmctcmlnaHQ6IDA7XG5cdH1cbn1cblxuLyogU21hbGwgTW9iaWxlIDozMjBweC4gKi9cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzlweCkge1xuXHQuaGVyby1pdGVtIGgyIHtcblx0XHRmb250LXNpemU6IDU1cHg7XG5cdFx0bWFyZ2luLWJvdHRvbTogMjBweDtcblx0fVxuXHQuaGVyby1pdGVtIHAge1xuXHRcdGZvbnQtc2l6ZTogMTVweDtcblx0fVxuXHQudmlkZW8tdGV4dCBoMiB7XG5cdFx0Zm9udC1zaXplOiAzMHB4O1xuXHR9XG5cdC52aWRlby1wbGF5LWJ0biB7XG5cdFx0dG9wOiBjYWxjKDMwJSAtIDYxcHgpO1xuXHR9XG5cdC5mZWF0dXJlZC1ib3gge1xuXHRcdHBhZGRpbmc6IDEwMHB4IDE1cHg7XG5cdH1cblx0LmZlYXR1cmVkLWJveCAudGV4dC1ib3ggaDMsXG5cdC5uZXdzbGV0dGVyLXNlY3Rpb24gaDIge1xuXHRcdGZvbnQtc2l6ZTogMzVweDtcblx0fVxuXHQubWFpbi1tZW51IGxpIGEge1xuXHRcdG1hcmdpbi1yaWdodDogMjBweDtcblx0fVxuXHQuZ2FtZS1hdXRob3ItcGljIHtcblx0XHRmbG9hdDogbm9uZTtcblx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHR9XG59XG4udGl0dWxvXG57XG5cdGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXHRmb250LXNpemU6IDQwcHg7XG5cdGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG5cdHBhZGRpbmctYm90dG9tOiA0MHB4O1xuXHRwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/componentes/cabecera/cabecera.component.html":
/*!**************************************************************!*\
  !*** ./src/app/componentes/cabecera/cabecera.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<!-- Header section -->\n\t<header class=\"header-section\">\n      <div class=\"header-warp\">\n        <div class=\"header-bar-warp d-flex\">\n          <div>\n            <h2 class=\"titulo\">\n           Mi Sala de Juegos</h2>\n        </div>\n          <!-- site logo -->\t\t\t\t\n          <nav class=\"top-nav-area w-100\">\n            <div class=\"user-panel\">\n              <a routerLink=\"/Login\">Unirse</a> / <a routerLink=\"/Registro\">Registrarse</a>\n            </div>\n            <!-- Menu -->\n            <ul class=\"main-menu primary-menu\">\n              <li><a routerLink=\"/\">Inicio</a></li>\n              <li><a routerLink=\"/Juegos\">Juegos</a>\n                <ul class=\"sub-menu\">\n                  <li><a routerLink=\"/Listado\">Listado de Resultados</a></li>\n                </ul>\n              </li>\n              <li><a href=\"games.html\">Sobre Facundo Islas</a>\n                <ul class=\"sub-menu\">\n                  <li><a href=\"https://github.com/facundoislas\" target=\"blank\">En Github</a></li>\n                  <li><a routerLink=\"/QuienSoy\">Sobre Mi</a></li>\n                </ul>\n              </li>\n              \n              \n            </ul>\n          </nav>\n        </div>\n      </div>\n    </header>\n    <!-- Header section end -->"

/***/ }),

/***/ "./src/app/componentes/cabecera/cabecera.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/cabecera/cabecera.component.ts ***!
  \************************************************************/
/*! exports provided: CabeceraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabeceraComponent", function() { return CabeceraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CabeceraComponent = /** @class */ (function () {
    function CabeceraComponent() {
    }
    CabeceraComponent.prototype.ngOnInit = function () {
    };
    CabeceraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cabecera',
            template: __webpack_require__(/*! ./cabecera.component.html */ "./src/app/componentes/cabecera/cabecera.component.html"),
            styles: [__webpack_require__(/*! ./cabecera.component.css */ "./src/app/componentes/cabecera/cabecera.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CabeceraComponent);
    return CabeceraComponent;
}());



/***/ }),

/***/ "./src/app/componentes/error/error.component.css":
/*!*******************************************************!*\
  !*** ./src/app/componentes/error/error.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/componentes/error/error.component.html":
/*!********************************************************!*\
  !*** ./src/app/componentes/error/error.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"panel panel-default\">\n    <div class=\"hero-text\">\n        <h1 style=\"font-size:50px\">Sala de Juegos</h1>\n        <p>Octavio villegas</p>\n        <a href=\"https://github.com/octaviovillegas\"target=\"_blank\">en GitHub <i class=\"fa fa-github\"></i></a>\n        <a  routerLink=\"/QuienSoy\"target=\"_blank\">Quien Soy? <i class=\"fa fa-github\"></i></a>\n    </div>\n    <ul class=\"nav navbar-nav navbar-right\">\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span>Registrase</a></li>\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Ingresar</a></li>\n          </ul>\n</div>"

/***/ }),

/***/ "./src/app/componentes/error/error.component.ts":
/*!******************************************************!*\
  !*** ./src/app/componentes/error/error.component.ts ***!
  \******************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");



var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/componentes/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/componentes/error/error.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/componentes/footer/footer.component.css":
/*!*********************************************************!*\
  !*** ./src/app/componentes/footer/footer.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/componentes/footer/footer.component.html":
/*!**********************************************************!*\
  !*** ./src/app/componentes/footer/footer.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\n<footer class=\"page-footer font-small blue\" style=\"background-color: rgb(4, 23, 61); height: 30%;\">\n\n  <!-- Copyright -->\n  <div class=\"footer-copyright text-center py-3\"style=\"color:aliceblue\">© 2019 Copyright:\n    <h3 class=\"h3\" style=\"color:aliceblue ;font-family: monospace\"> Facundo Islas</h3>\n  </div>\n  <!-- Copyright -->\n\n</footer>\n<!-- Footer -->"

/***/ }),

/***/ "./src/app/componentes/footer/footer.component.ts":
/*!********************************************************!*\
  !*** ./src/app/componentes/footer/footer.component.ts ***!
  \********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/componentes/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/componentes/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/componentes/home/home.component.css":
/*!*****************************************************!*\
  !*** ./src/app/componentes/home/home.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* =================================\r\n------------------------------------\r\n  EndGam - Gaming Magazine Template\r\n  Version: 1.0\r\n ------------------------------------\r\n ====================================*/\r\n\r\n\r\n\r\n/*----------------------------------------*/\r\n\r\n\r\n\r\n/* Template default CSS\r\n/*----------------------------------------*/\r\n\r\n\r\n\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n\tfont-family: 'Roboto', sans-serif;\r\n\t-webkit-font-smoothing: antialiased;\r\n\tfont-smoothing: antialiased;\r\n}\r\n\r\n\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n\tmargin: 0;\r\n\tcolor: #111111;\r\n\tfont-weight: 500;\r\n}\r\n\r\n\r\n\r\nh1 {\r\n\tfont-size: 70px;\r\n}\r\n\r\n\r\n\r\nh2 {\r\n\tfont-size: 36px;\r\n}\r\n\r\n\r\n\r\nh3 {\r\n\tfont-size: 30px;\r\n}\r\n\r\n\r\n\r\nh4 {\r\n\tfont-size: 24px;\r\n}\r\n\r\n\r\n\r\nh5 {\r\n\tfont-size: 18px;\r\n}\r\n\r\n\r\n\r\nh6 {\r\n\tfont-size: 16px;\r\n}\r\n\r\n\r\n\r\np {\r\n\tfont-size: 15px;\r\n\tcolor: #585858;\r\n\tline-height: 1.6;\r\n\tfont-weight: 500;\r\n}\r\n\r\n\r\n\r\nimg {\r\n\tmax-width: 100%;\r\n}\r\n\r\n\r\n\r\ninput:focus,\r\nselect:focus,\r\nbutton:focus,\r\ntextarea:focus {\r\n\toutline: none;\r\n}\r\n\r\n\r\n\r\na:hover,\r\na:focus {\r\n\ttext-decoration: none;\r\n\toutline: none;\r\n}\r\n\r\n\r\n\r\nul,\r\nol {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n}\r\n\r\n\r\n\r\n::-webkit-input-placeholder {\r\n\tcolor: #fff;\r\n\tfont-style: italic;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n\r\n\r\n:-ms-input-placeholder {\r\n\tcolor: #fff;\r\n\tfont-style: italic;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n\r\n\r\n::-ms-input-placeholder {\r\n\tcolor: #fff;\r\n\tfont-style: italic;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n\r\n\r\n::placeholder {\r\n\tcolor: #fff;\r\n\tfont-style: italic;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n\r\n\r\n/*---------------------\r\n  Helper CSS\r\n-----------------------*/\r\n\r\n\r\n\r\n.section-title h2 {\r\n\tfont-size: 30px;\r\n\ttext-transform: uppercase;\r\n\tfont-weight: 700;\r\n\tfont-style: italic;\r\n}\r\n\r\n\r\n\r\n.set-bg {\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover;\r\n\tbackground-position: top center;\r\n}\r\n\r\n\r\n\r\n.spad {\r\n\tpadding-top: 105px;\r\n\tpadding-bottom: 105px;\r\n}\r\n\r\n\r\n\r\n.text-white h1,\r\n.text-white h2,\r\n.text-white h3,\r\n.text-white h4,\r\n.text-white h5,\r\n.text-white h6,\r\n.text-white p,\r\n.text-white span,\r\n.text-white li,\r\n.text-white a {\r\n\tcolor: #fff;\r\n}\r\n\r\n\r\n\r\n/*---------------------\r\n  Commom elements\r\n-----------------------*/\r\n\r\n\r\n\r\n/* buttons */\r\n\r\n\r\n\r\n.site-btn {\r\n\tdisplay: inline-block;\r\n\tborder: none;\r\n\tfont-size: 14px;\r\n\tfont-weight: 700;\r\n\tfont-style: italic;\r\n\tmin-width: 186px;\r\n\tpadding: 24px 30px;\r\n\tborder-radius: 0;\r\n\ttext-transform: uppercase;\r\n\tcolor: #081624;\r\n\tline-height: normal;\r\n\tcursor: pointer;\r\n\ttext-align: center;\r\n\tbackground: #fff;\r\n\tposition: relative;\r\n\tz-index: 1;\r\n}\r\n\r\n\r\n\r\n.site-btn img {\r\n\tposition: relative;\r\n\tleft: 13px;\r\n\twidth: auto !important;\r\n\tdisplay: inline-block !important;\r\n}\r\n\r\n\r\n\r\n.site-btn:after,\r\n.site-btn:before {\r\n\tposition: absolute;\r\n\tcontent: \"\";\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tleft: 9px;\r\n\ttop: 10px;\r\n\tbackground: #b01ba5;\r\n\tz-index: -2;\r\n\tbox-shadow: 0 0 9px 3px rgba(226, 30, 228, 0.24);\r\n}\r\n\r\n\r\n\r\n.site-btn:before {\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tbackground: #fff;\r\n\tz-index: -1;\r\n}\r\n\r\n\r\n\r\n.site-btn:hover {\r\n\tcolor: #081624;\r\n}\r\n\r\n\r\n\r\n/* Preloder */\r\n\r\n\r\n\r\n#preloder {\r\n\tposition: fixed;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tz-index: 999999;\r\n\tbackground: #000;\r\n}\r\n\r\n\r\n\r\n.loader {\r\n\twidth: 40px;\r\n\theight: 40px;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\tmargin-top: -13px;\r\n\tmargin-left: -13px;\r\n\tborder-radius: 60px;\r\n\tanimation: loader 0.8s linear infinite;\r\n\t-webkit-animation: loader 0.8s linear infinite;\r\n}\r\n\r\n\r\n\r\n@keyframes loader {\r\n\t0% {\r\n\t\t-webkit-transform: rotate(0deg);\r\n\t\ttransform: rotate(0deg);\r\n\t\tborder: 4px solid #f44336;\r\n\t\tborder-left-color: transparent;\r\n\t}\r\n\t50% {\r\n\t\t-webkit-transform: rotate(180deg);\r\n\t\ttransform: rotate(180deg);\r\n\t\tborder: 4px solid #673ab7;\r\n\t\tborder-left-color: transparent;\r\n\t}\r\n\t100% {\r\n\t\t-webkit-transform: rotate(360deg);\r\n\t\ttransform: rotate(360deg);\r\n\t\tborder: 4px solid #f44336;\r\n\t\tborder-left-color: transparent;\r\n\t}\r\n}\r\n\r\n\r\n\r\n@-webkit-keyframes loader {\r\n\t0% {\r\n\t\t-webkit-transform: rotate(0deg);\r\n\t\tborder: 4px solid #f44336;\r\n\t\tborder-left-color: transparent;\r\n\t}\r\n\t50% {\r\n\t\t-webkit-transform: rotate(180deg);\r\n\t\tborder: 4px solid #673ab7;\r\n\t\tborder-left-color: transparent;\r\n\t}\r\n\t100% {\r\n\t\t-webkit-transform: rotate(360deg);\r\n\t\tborder: 4px solid #f44336;\r\n\t\tborder-left-color: transparent;\r\n\t}\r\n}\r\n\r\n\r\n\r\n/*------------------\r\n  Header section\r\n---------------------*/\r\n\r\n\r\n\r\n.header-section {\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\tleft: 0;\r\n\ttop: -44px;\r\n\tz-index: 99;\r\n\tpadding: 50px 50px 0;\r\n\tbackground-image: url('/TP-Sala-de-Juegos-ANGULAR/assets/imagenes/cabecera.png');\r\n\t\r\n\r\n}\r\n\r\n\r\n\r\n.header-warp {\r\n\tmax-width: 1496px;\r\n\tmargin: 0 auto;\r\n}\r\n\r\n\r\n\r\n.header-social p,\r\n.footer-social p,\r\n.geme-social-share p {\r\n\tdisplay: inline-block;\r\n\tcolor: #9190a5;\r\n\tfont-size: 16px;\r\n\tpadding-top: 4px;\r\n}\r\n\r\n\r\n\r\n.header-social a,\r\n.footer-social a,\r\n.geme-social-share a {\r\n\tdisplay: -ms-inline-flex;\r\n\tdisplay: inline-flex;\r\n\twidth: 32px;\r\n\theight: 32px;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tborder-radius: 50%;\r\n\tcolor: #fff;\r\n\tfont-size: 12px;\r\n\tmargin-left: 13px;\r\n\ttransition: all 0.3s;\r\n}\r\n\r\n\r\n\r\n.header-social a:hover,\r\n.footer-social a:hover,\r\n.geme-social-share a:hover {\r\n\tbackground: #b01ba5;\r\n}\r\n\r\n\r\n\r\n.header-bar-warp {\r\n\tpadding: 39px 40px 0;\r\n\t\r\n\t\r\n}\r\n\r\n\r\n\r\n.site-logo {\r\n\tfloat: left;\r\n}\r\n\r\n\r\n\r\n.user-panel {\r\n\tfloat: right;\r\n\tfont-size: 16px;\r\n\tfont-weight: 500;\r\n\tcolor: #fff;\r\n\tpadding-top: 3px;\r\n}\r\n\r\n\r\n\r\n.user-panel a {\r\n\tcolor: #fff;\r\n}\r\n\r\n\r\n\r\n.user-panel a:hover {\r\n\tcolor: #b01ba5;\r\n}\r\n\r\n\r\n\r\n.main-menu {\r\n\tlist-style: none;\r\n\ttext-align: center;\r\n\tpadding-top: 3px;\r\n}\r\n\r\n\r\n\r\n.main-menu li {\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n}\r\n\r\n\r\n\r\n.main-menu li a {\r\n\tdisplay: block;\r\n\tfont-size: 40px;\r\n\tfont-weight: 500;\r\n\tcolor: rgb(41, 250, 14);\r\n\tmargin-right: 10px;\r\n\tpadding-bottom: 20px;\r\n\tposition: relative;\r\n\tpadding-right: 20px;\r\n}\r\n\r\n\r\n\r\n.main-menu li a:after {\r\n\tcontent: \"\";\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tright: 0;\r\n\ttop: 1px;\r\n\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: right center;\r\n}\r\n\r\n\r\n\r\n.main-menu li a i {\r\n\tcolor: #928d92;\r\n\tmargin-left: 5px;\r\n}\r\n\r\n\r\n\r\n.main-menu li a:hover {\r\n\tcolor: #b01ba5;\r\n}\r\n\r\n\r\n\r\n.main-menu li a:hover:after {\r\n    color: #000\r\n}\r\n\r\n\r\n\r\n.main-menu li a:hover i {\r\n\tcolor: #b01ba5;\r\n}\r\n\r\n\r\n\r\n.main-menu li:hover .sub-menu {\r\n\tvisibility: visible;\r\n\topacity: 1;\r\n\tmargin-top: 0;\r\n}\r\n\r\n\r\n\r\n.main-menu li:hover>a {\r\n\tcolor: #b01ba5;\r\n}\r\n\r\n\r\n\r\n.main-menu li:hover>a:after {\r\n\tbackground-color: #190d36\r\n}\r\n\r\n\r\n\r\n.main-menu li .sub-menu {\r\n\tposition: absolute;\r\n\tlist-style: none;\r\n\ttext-align: left;\r\n\twidth: 220px;\r\n\tleft: 0;\r\n\ttop: 100%;\r\n\tpadding: 20px 0;\r\n\tvisibility: hidden;\r\n\topacity: 0;\r\n\tmargin-top: 50px;\r\n\tbackground: rgb(233, 250, 0);\r\n\tz-index: 99;\r\n\ttransition: all 0.4s;\r\n\tbox-shadow: 2px 7px 20px rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n\r\n\r\n.main-menu li .sub-menu li {\r\n\tdisplay: block;\r\n}\r\n\r\n\r\n\r\n.main-menu li .sub-menu li a {\r\n\tdisplay: block;\r\n\tcolor: #000;\r\n\tmargin-right: 0;\r\n\tpadding: 8px 30px;\r\n\tfont-size: 20px;\r\n}\r\n\r\n\r\n\r\n.main-menu li .sub-menu li a:after {\r\n\tdisplay: none;\r\n}\r\n\r\n\r\n\r\n.main-menu li .sub-menu li a:hover {\r\n\tcolor: #b01ba5;\r\n}\r\n\r\n\r\n\r\n.slicknav_menu {\r\n\tdisplay: none;\r\n}\r\n\r\n\r\n\r\n/*------------------\r\n  Hero section\r\n---------------------*/\r\n\r\n\r\n\r\n.hero-slider .owl-dots {\r\n\tdisplay: -ms-flex;\r\n\tdisplay: flex;\r\n\tz-index: 2;\r\n\tleft: calc(50% - 740px);\r\n\tbottom: 38px;\r\n\tposition: relative;\r\n\twidth: 1496px;\r\n\tposition: absolute;\r\n}\r\n\r\n\r\n\r\n.hero-slider .owl-dots .owl-dot {\r\n\twidth: 44px;\r\n\theight: 44px;\r\n\tborder-radius: 50%;\r\n\tfont-size: 16px;\r\n\tfont-weight: 500;\r\n\tborder: 2px solid transparent;\r\n\tcolor: #fff;\r\n\tdisplay: -ms-inline-flex;\r\n\tdisplay: inline-flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n\r\n\r\n.hero-slider .owl-dots .owl-dot.active {\r\n\tcolor: #b01ba5;\r\n\tborder: 2px solid #b01ba5;\r\n}\r\n\r\n\r\n\r\n.hero-slider .owl-nav {\r\n\tmargin-top: -24px;\r\n\tdisplay: block;\r\n}\r\n\r\n\r\n\r\n.hero-slider .owl-nav .owl-next {\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tright: 100px;\r\n}\r\n\r\n\r\n\r\n.hero-item {\r\n\theight: 921px;\r\n\tpadding-top: 125px;\r\n\tborder-bottom: 2px solid #b01ba5;\r\n}\r\n\r\n\r\n\r\n.hero-item h2 {\r\n\tfont-size: 160px;\r\n\tcolor: #fff;\r\n\tfont-weight: 500;\r\n\tline-height: 1;\r\n\tposition: relative;\r\n\ttop: 100px;\r\n\topacity: 0;\r\n}\r\n\r\n\r\n\r\n.hero-item p {\r\n\tfont-size: 24px;\r\n\tcolor: rgba(255, 255, 255, 0.4);\r\n\tfont-weight: 500;\r\n\topacity: 0.39;\r\n\tmargin-bottom: 70px;\r\n\tposition: relative;\r\n\ttop: 80px;\r\n\topacity: 0;\r\n}\r\n\r\n\r\n\r\n.hero-item .site-btn {\r\n\tposition: relative;\r\n\ttop: 50px;\r\n\topacity: 0;\r\n}\r\n\r\n\r\n\r\n.hero-slider .owl-item.active .hero-item h2,\r\n.hero-slider .owl-item.active .hero-item p,\r\n.hero-slider .owl-item.active .hero-item .site-btn {\r\n\ttop: 0;\r\n\topacity: 1;\r\n}\r\n\r\n\r\n\r\n.hero-slider .owl-item.active .hero-item h2 {\r\n\ttransition: all 0.5s ease 0.4s;\r\n}\r\n\r\n\r\n\r\n.hero-slider .owl-item.active .hero-item p {\r\n\ttransition: all 0.5s ease 0.6s;\r\n}\r\n\r\n\r\n\r\n.hero-slider .owl-item.active .hero-item .site-btn {\r\n\ttransition: all 0.5s ease 0.8s;\r\n}\r\n\r\n\r\n\r\n.hero-slider .owl-item.active .hero-item .offer-card {\r\n\topacity: 1;\r\n\t-webkit-transform: rotate(0deg);\r\n\ttransform: rotate(0deg);\r\n\ttransition: all 0.5s ease 1s;\r\n}\r\n\r\n\r\n\r\n/* ----------------\r\n  Intro section\r\n---------------------*/\r\n\r\n\r\n\r\n.intro-section {\r\n\tbackground: #0c062e;\r\n\tpadding: 115px 0;\r\n}\r\n\r\n\r\n\r\n.text-box .top-meta {\r\n\tfont-size: 18px;\r\n\tfont-weight: 500;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n\r\n\r\n.text-box .top-meta a {\r\n\tcolor: #b01ba5;\r\n}\r\n\r\n\r\n\r\n.text-box h3 {\r\n\tmargin-bottom: 40px;\r\n\tmax-width: 370px;\r\n}\r\n\r\n\r\n\r\n.text-box p {\r\n\tfont-size: 15px;\r\n\tfont-weight: 500;\r\n\tcolor: #68647d;\r\n\tmargin-bottom: 35px;\r\n}\r\n\r\n\r\n\r\n.text-box .read-more {\r\n\tfont-size: 15px;\r\n\ttext-transform: uppercase;\r\n\tfont-weight: 700;\r\n\tfont-style: italic;\r\n\tcolor: #fff;\r\n}\r\n\r\n\r\n\r\n.text-box .read-more img {\r\n\tmargin-left: 13px;\r\n}\r\n\r\n\r\n\r\n/* ----------------\r\n Blog Section\r\n---------------------*/\r\n\r\n\r\n\r\n.blog-section {\r\n\t/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#501755+0,2d1854+100 */\r\n\tbackground: #501755;\r\n\t/* Old browsers */\r\n\t/* FF3.6-15 */\r\n\t/* Chrome10-25,Safari5.1-6 */\r\n\tbackground: linear-gradient(45deg, #501755 0%, #2d1854 100%);\r\n\t/* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#501755', endColorstr='#2d1854', GradientType=1);\r\n\t/* IE6-9 fallback on horizontal gradient */\r\n}\r\n\r\n\r\n\r\n.blog-section .section-title {\r\n\tmargin-bottom: 25px;\r\n}\r\n\r\n\r\n\r\n.blog-filter {\r\n\tlist-style: none;\r\n\tdisplay: block;\r\n}\r\n\r\n\r\n\r\n.blog-filter li {\r\n\tdisplay: inline-block;\r\n}\r\n\r\n\r\n\r\n.blog-filter li a {\r\n\tdisplay: block;\r\n\tcolor: #fff;\r\n\tpadding: 16px 36px;\r\n\tfont-size: 16px;\r\n\tfont-weight: 700;\r\n\tbackground: #6f2b95;\r\n\tline-height: 1.1;\r\n\tmargin-right: 7px;\r\n\ttransition: all 0.3s;\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n\r\n\r\n.blog-filter li a:hover {\r\n\tbackground: #b01ba5;\r\n}\r\n\r\n\r\n\r\n.blog-item {\r\n\tmargin-top: 86px;\r\n}\r\n\r\n\r\n\r\n.blog-item .blog-thumb {\r\n\twidth: 362px;\r\n\tfloat: left;\r\n\tmargin-right: 30px;\r\n}\r\n\r\n\r\n\r\n.blog-item .text-box {\r\n\toverflow: hidden;\r\n}\r\n\r\n\r\n\r\n.blog-item .text-box p {\r\n\tmargin-bottom: 42px;\r\n}\r\n\r\n\r\n\r\n.widget-item {\r\n\tmargin-bottom: 85px;\r\n}\r\n\r\n\r\n\r\n.widget-item:last-child {\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n\r\n\r\n.widget-item .widget-title {\r\n\tcolor: #fff;\r\n\ttext-transform: uppercase;\r\n\tfont-weight: 700;\r\n\tfont-style: italic;\r\n\tpadding-left: 38px;\r\n\tmargin-bottom: 48px;\r\n}\r\n\r\n\r\n\r\n.trending-widget .tw-item {\r\n\tmargin-bottom: 38px;\r\n}\r\n\r\n\r\n\r\n.trending-widget .tw-item:last-child {\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n\r\n\r\n.trending-widget .tw-thumb {\r\n\tfloat: left;\r\n\tmargin-right: 17px;\r\n\toverflow: hidden;\r\n}\r\n\r\n\r\n\r\n.trending-widget .tw-text .tw-meta {\r\n\tcolor: #68647d;\r\n\tfont-size: 12px;\r\n\tfont-weight: 500;\r\n\tmargin-bottom: 7px;\r\n}\r\n\r\n\r\n\r\n.trending-widget .tw-text .tw-meta a {\r\n\tcolor: #b01ba5;\r\n}\r\n\r\n\r\n\r\n.trending-widget .tw-text h5 {\r\n\tfont-size: 18px;\r\n\tcolor: #fff;\r\n\tline-height: 1.5;\r\n}\r\n\r\n\r\n\r\n.categories-widget {\r\n\tbackground: #34164b;\r\n\tpadding: 55px 0 25px;\r\n}\r\n\r\n\r\n\r\n.categories-widget ul {\r\n\tlist-style: none;\r\n\tpadding: 0 38px;\r\n}\r\n\r\n\r\n\r\n.categories-widget ul li {\r\n\tdisplay: block;\r\n}\r\n\r\n\r\n\r\n.categories-widget ul li a {\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n\tfont-size: 16px;\r\n\tcolor: #68647d;\r\n\tfont-weight: 500;\r\n\tmargin-bottom: 15px;\r\n\tpadding-right: 19px;\r\n\ttransition: all 0.2s;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: right -120% center;\r\n\tbackground-size: 11px;\r\n}\r\n\r\n\r\n\r\n.categories-widget ul li a:hover {\r\n\tcolor: #b01ba5;\r\n\tbackground-position: right center;\r\n}\r\n\r\n\r\n\r\n.search-widget {\r\n\tposition: relative;\r\n}\r\n\r\n\r\n\r\n.search-widget input {\r\n\twidth: 100%;\r\n\theight: 40px;\r\n\tborder: none;\r\n\tborder-bottom: 2px solid #72628b;\r\n\tbackground: none;\r\n\tpadding-right: 60px;\r\n\tcolor: #fff;\r\n}\r\n\r\n\r\n\r\n.search-widget button {\r\n\tposition: absolute;\r\n\tright: 0;\r\n\ttop: 0;\r\n\tcolor: #b01ba5;\r\n\tfont-weight: 700;\r\n\tfont-size: 14px;\r\n\tfont-style: italic;\r\n\tcursor: pointer;\r\n\tbackground: none;\r\n\tborder: none;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n\r\n\r\n.latest-comments .lc-item {\r\n\tmargin-bottom: 30px;\r\n}\r\n\r\n\r\n\r\n.latest-comments .lc-item:last-child {\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n\r\n\r\n.latest-comments .lc-item .lc-avatar {\r\n\twidth: 64px;\r\n\theight: 64px;\r\n\tborder-radius: 50%;\r\n\tfloat: left;\r\n\tmargin-right: 12px;\r\n}\r\n\r\n\r\n\r\n.latest-comments .lc-item .tw-text {\r\n\tpadding-top: 10px;\r\n\tfont-size: 16px;\r\n\tcolor: #fff;\r\n\tfont-weight: 500;\r\n}\r\n\r\n\r\n\r\n.latest-comments .lc-item .tw-text a {\r\n\tcolor: #b01ba5;\r\n}\r\n\r\n\r\n\r\n.latest-comments .lc-item .tw-text span {\r\n\tcolor: #68647d;\r\n}\r\n\r\n\r\n\r\n/* --------------------\r\n  Intro video section\r\n-----------------------*/\r\n\r\n\r\n\r\n.intro-video-section {\r\n\theight: 757px;\r\n\tposition: relative;\r\n}\r\n\r\n\r\n\r\n.video-play-btn {\r\n\tposition: absolute;\r\n\tleft: calc(50% - 61px);\r\n\ttop: calc(50% - 61px);\r\n\twidth: 122px;\r\n\theight: 122px;\r\n\ttext-align: center;\r\n\tpadding-top: 35px;\r\n\tborder-radius: 50%;\r\n\tbackground: rgba(255, 255, 255, 0.16);\r\n}\r\n\r\n\r\n\r\n.video-text {\r\n\tmargin-bottom: 80px;\r\n\tpadding: 27px 0;\r\n\tpadding-left: 25px;\r\n\tposition: relative;\r\n}\r\n\r\n\r\n\r\n.video-text h2 {\r\n\tfont-size: 48px;\r\n\ttext-transform: uppercase;\r\n\tfont-style: italic;\r\n\tfont-weight: 700;\r\n\tcolor: #fff;\r\n\tmargin-bottom: 1px;\r\n}\r\n\r\n\r\n\r\n.video-text p {\r\n\tfont-size: 18px;\r\n\tcolor: #a3a1b3;\r\n\tfont-weight: 500;\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n\r\n\r\n.video-text:after {\r\n\tposition: absolute;\r\n\tcontent: \"\";\r\n\twidth: 9px;\r\n\theight: 100%;\r\n\tleft: -22px;\r\n\ttop: 0;\r\n\tborder-left: 3px solid #de46d6;\r\n\tbackground: #fff;\r\n\tbox-shadow: 0 0 9px 3px rgba(226, 30, 228, 0.5);\r\n}\r\n\r\n\r\n\r\n/* ----------------\r\n  Featured section\r\n---------------------*/\r\n\r\n\r\n\r\n.featured-section {\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n}\r\n\r\n\r\n\r\n.featured-bg {\r\n\twidth: calc(50% - 156px);\r\n\tfloat: left;\r\n\theight: 100%;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tposition: absolute;\r\n}\r\n\r\n\r\n\r\n.featured-box {\r\n\tfloat: right;\r\n\twidth: calc(50% + 156px);\r\n\tbackground: #fff;\r\n\tpadding: 100px 50px 130px 79px;\r\n}\r\n\r\n\r\n\r\n.featured-box .text-box {\r\n\tmax-width: 810px;\r\n}\r\n\r\n\r\n\r\n.featured-box .text-box .top-meta {\r\n\tcolor: #68647d;\r\n}\r\n\r\n\r\n\r\n.featured-box .text-box h3 {\r\n\tfont-size: 60px;\r\n\tmax-width: 100%;\r\n}\r\n\r\n\r\n\r\n.featured-box .text-box p {\r\n\tfont-size: 16px;\r\n}\r\n\r\n\r\n\r\n.featured-box .text-box .read-more {\r\n\tcolor: #251e2f;\r\n}\r\n\r\n\r\n\r\n.gradient-bg,\r\n.newsletter-section {\r\n\tbackground: #3e0f3d;\r\n\t/* Old browsers */\r\n\t/* FF3.6-15 */\r\n\t/* Chrome10-25,Safari5.1-6 */\r\n\tbackground: linear-gradient(to right, #3e0f3d 0%, #1c0f3b 100%);\r\n\t/* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3e0f3d', endColorstr='#1c0f3b', GradientType=1);\r\n\t/* IE6-9 */\r\n}\r\n\r\n\r\n\r\n/* --------------------\r\n  Newsletter section\r\n----------------------*/\r\n\r\n\r\n\r\n.newsletter-section {\r\n\tpadding: 108px 0 95px;\r\n\ttext-align: center;\r\n}\r\n\r\n\r\n\r\n.newsletter-section h2 {\r\n\tfont-size: 48px;\r\n\tcolor: #fff;\r\n\tfont-weight: 700;\r\n\tfont-style: italic;\r\n\ttext-transform: uppercase;\r\n\tmargin-bottom: 73px;\r\n}\r\n\r\n\r\n\r\n.newsletter-form {\r\n\tpadding-left: 56px;\r\n}\r\n\r\n\r\n\r\n.newsletter-form input {\r\n\tfont-size: 14px;\r\n\tfont-weight: 700;\r\n\tfont-style: italic;\r\n\tcolor: #fff;\r\n\twidth: 787px;\r\n\tborder: none;\r\n\tborder-bottom: 2px solid #9b91a6;\r\n\tbackground: none;\r\n\theight: 63px;\r\n\tmargin-right: 26px;\r\n}\r\n\r\n\r\n\r\n/* ----------------\r\n  Footer section\r\n---------------------*/\r\n\r\n\r\n\r\n.footer-section {\r\n\ttext-align: center;\r\n\t/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#330d38+0,190d36+100 */\r\n\tbackground: #330d38;\r\n\t/* Old browsers */\r\n\t/* FF3.6-15 */\r\n\t/* Chrome10-25,Safari5.1-6 */\r\n\tbackground: linear-gradient(to right, #330d38 0%, #190d36 100%);\r\n\t/* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#330d38', endColorstr='#190d36', GradientType=1);\r\n\t/* IE6-9 */\r\n}\r\n\r\n\r\n\r\n.footer-section .container {\r\n\tposition: relative;\r\n\tpadding: 60px 15px 25px;\r\n}\r\n\r\n\r\n\r\n.footer-left-pic {\r\n\tposition: absolute;\r\n\tleft: -13px;\r\n\tbottom: 19px;\r\n}\r\n\r\n\r\n\r\n.footer-right-pic {\r\n\tposition: absolute;\r\n\tright: 50px;\r\n\tbottom: 19px;\r\n}\r\n\r\n\r\n\r\n.footer-menu {\r\n\tpadding-top: 62px;\r\n}\r\n\r\n\r\n\r\n.footer-menu li:last-child a {\r\n\tmargin-right: 0;\r\n}\r\n\r\n\r\n\r\n.footer-social {\r\n\tpadding-top: 20px;\r\n\tpadding-bottom: 40px;\r\n}\r\n\r\n\r\n\r\n.footer-social a:first-child {\r\n\tmargin-left: 0;\r\n}\r\n\r\n\r\n\r\n.copyright {\r\n\tfont-size: 12px;\r\n\tfont-weight: 500;\r\n\tcolor: #9190a5;\r\n\topacity: 0.20;\r\n}\r\n\r\n\r\n\r\n.copyright a {\r\n\tcolor: #9190a5;\r\n}\r\n\r\n\r\n\r\n.copyright a:hover {\r\n\ttext-decoration: underline;\r\n}\r\n\r\n\r\n\r\n/* ----------------\r\n  Other Pages\r\n=====================\r\n---------------------*/\r\n\r\n\r\n\r\n.page-top-section {\r\n\theight: 355px;\r\n\tpadding-top: 210px;\r\n}\r\n\r\n\r\n\r\n.page-info {\r\n\tmax-width: 1496px;\r\n\tmargin: 0 auto;\r\n\tfont-size: 16px;\r\n\tcolor: #fff;\r\n\tpadding-left: 60px;\r\n}\r\n\r\n\r\n\r\n.page-info h2 {\r\n\tcolor: #fff;\r\n\tfont-size: 48px;\r\n}\r\n\r\n\r\n\r\n.site-breadcrumb a,\r\n.site-breadcrumb span {\r\n\tfont-style: italic;\r\n\tcolor: #fff;\r\n\tmargin: 0 10px;\r\n\tfont-weight: 700;\r\n}\r\n\r\n\r\n\r\n.site-breadcrumb a:first-child {\r\n\tmargin-left: 0;\r\n}\r\n\r\n\r\n\r\n.site-breadcrumb span {\r\n\tcolor: #c313b7;\r\n}\r\n\r\n\r\n\r\n/* --------------\r\n  Games Page\r\n-----------------*/\r\n\r\n\r\n\r\n.games-section {\r\n\tpadding: 108px 0;\r\n\t/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#501755+0,2d1854+100 */\r\n\tbackground: #501755;\r\n\t/* Old browsers */\r\n\t/* FF3.6-15 */\r\n\t/* Chrome10-25,Safari5.1-6 */\r\n\tbackground: linear-gradient(45deg, #501755 0%, #2d1854 100%);\r\n\t/* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#501755', endColorstr='#2d1854', GradientType=1);\r\n\t/* IE6-9 fallback on horizontal gradient */\r\n}\r\n\r\n\r\n\r\n.game-filter {\r\n\tlist-style: none;\r\n\tmargin-bottom: 82px;\r\n}\r\n\r\n\r\n\r\n.game-filter li {\r\n\tdisplay: inline-block;\r\n\twidth: 40px;\r\n\theight: 34px;\r\n\tbackground: #503c6e;\r\n\tborder-radius: 17px;\r\n\ttransition: all 0.3s;\r\n}\r\n\r\n\r\n\r\n.game-filter li:hover {\r\n\tbackground: #c313b7;\r\n}\r\n\r\n\r\n\r\n.game-filter li a {\r\n\tfont-size: 15px;\r\n\tfont-weight: 700;\r\n\tcolor: #fff;\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\ttext-align: center;\r\n\tpadding-top: 7px;\r\n}\r\n\r\n\r\n\r\n.game-item {\r\n\tmargin-bottom: 80px;\r\n}\r\n\r\n\r\n\r\n.game-item h5 {\r\n\tfont-size: 20px;\r\n\tcolor: #fff;\r\n\tpadding-top: 30px;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n\r\n\r\n.game-item .read-more {\r\n\tfont-size: 15px;\r\n\ttext-transform: uppercase;\r\n\tfont-weight: 700;\r\n\tfont-style: italic;\r\n\tcolor: #b01ba5;\r\n}\r\n\r\n\r\n\r\n.game-item .read-more img {\r\n\tmargin-left: 13px;\r\n}\r\n\r\n\r\n\r\n.site-pagination {\r\n\tdisplay: -ms-flex;\r\n\tdisplay: flex;\r\n}\r\n\r\n\r\n\r\n.site-pagination a {\r\n\twidth: 38px;\r\n\theight: 44px;\r\n\tborder-radius: 50%;\r\n\tfont-size: 16px;\r\n\tfont-weight: 500;\r\n\tborder: 2px solid transparent;\r\n\tcolor: #fff;\r\n\tdisplay: -ms-inline-flex;\r\n\tdisplay: inline-flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\ttransition: all 0.5s;\r\n}\r\n\r\n\r\n\r\n.site-pagination a.active {\r\n\twidth: 44px;\r\n\tmargin: 0 10px;\r\n\tcolor: #b01ba5;\r\n\tborder: 2px solid #b01ba5;\r\n}\r\n\r\n\r\n\r\n.site-pagination a.active:first-child {\r\n\tmargin-left: 0;\r\n}\r\n\r\n\r\n\r\n.game-page-sideber .widget-item {\r\n\tmargin-bottom: 55px;\r\n}\r\n\r\n\r\n\r\n/* ------------------\r\n  Game single Page\r\n---------------------*/\r\n\r\n\r\n\r\n.games-single-page,\r\n.review-section,\r\n.blog-page,\r\n.contact-page {\r\n\tpadding: 104px 0;\r\n\t/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#501755+0,2d1854+100 */\r\n\tbackground: #501755;\r\n\t/* Old browsers */\r\n\t/* FF3.6-15 */\r\n\t/* Chrome10-25,Safari5.1-6 */\r\n\tbackground: linear-gradient(45deg, #501755 0%, #2d1854 100%);\r\n\t/* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#501755', endColorstr='#2d1854', GradientType=1);\r\n\t/* IE6-9 fallback on horizontal gradient */\r\n}\r\n\r\n\r\n\r\n.game-single-preview {\r\n\tmargin-bottom: 108px;\r\n}\r\n\r\n\r\n\r\n.game-single-content .gs-meta {\r\n\tfont-size: 18px;\r\n\tcolor: #68647d;\r\n\tfont-weight: 500;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n\r\n\r\n.game-single-content .gs-meta a {\r\n\tcolor: #b01ba5;\r\n}\r\n\r\n\r\n\r\n.game-single-content .gs-title {\r\n\tfont-size: 60px;\r\n\tcolor: #fff;\r\n\tmargin-bottom: 40px;\r\n}\r\n\r\n\r\n\r\n.game-single-content h4 {\r\n\tcolor: #b01ba5;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n\r\n\r\n.game-single-content p {\r\n\tfont-size: 16px;\r\n\tfont-weight: 500;\r\n\tcolor: #68647d;\r\n\tline-height: 1.8;\r\n\tmargin-bottom: 70px;\r\n}\r\n\r\n\r\n\r\n.rating-widget {\r\n\tbackground: #34164b;\r\n\tpadding: 55px 0 30px;\r\n}\r\n\r\n\r\n\r\n.rating-widget ul {\r\n\tlist-style: none;\r\n\tpadding: 0 38px;\r\n\tmargin-bottom: 30px;\r\n}\r\n\r\n\r\n\r\n.rating-widget ul li {\r\n\tdisplay: block;\r\n\tfont-size: 16px;\r\n\tcolor: #b01ba5;\r\n\tfont-weight: 500;\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n\r\n\r\n.rating-widget ul li span {\r\n\tfloat: right;\r\n\tcolor: #68647d;\r\n}\r\n\r\n\r\n\r\n.rating-widget h5 {\r\n\ttext-align: right;\r\n\tfont-size: 36px;\r\n\tcolor: #fff;\r\n\tfont-weight: 900;\r\n\tpadding-right: 38px;\r\n}\r\n\r\n\r\n\r\n.rating-widget h5 i {\r\n\tfont-weight: 500;\r\n\tfont-size: 16px;\r\n\tfont-style: italic;\r\n\tcolor: #65607b;\r\n\ttext-transform: uppercase;\r\n\tmargin-right: 18px;\r\n}\r\n\r\n\r\n\r\n.rating-widget h5 span {\r\n\tcolor: #b01ba5;\r\n}\r\n\r\n\r\n\r\n.testimonials-widget {\r\n\tbackground: #34164b;\r\n\tpadding: 55px 0 50px;\r\n}\r\n\r\n\r\n\r\n.testimonials-widget .testim-text {\r\n\tpadding: 0 30px;\r\n}\r\n\r\n\r\n\r\n.testimonials-widget .testim-text p {\r\n\tfont-size: 16px;\r\n\tfont-weight: 500;\r\n\tcolor: #68647d;\r\n\tline-height: 1.8;\r\n\tmargin-bottom: 40px;\r\n}\r\n\r\n\r\n\r\n.testimonials-widget .testim-text h6 {\r\n\tcolor: #68647d;\r\n\tpadding-left: 15px;\r\n}\r\n\r\n\r\n\r\n.testimonials-widget .testim-text h6 span {\r\n\tcolor: #b01ba5;\r\n}\r\n\r\n\r\n\r\n.game-author-section {\r\n\tbackground: #3a1854;\r\n\tpadding: 51px 0;\r\n\toverflow: hidden;\r\n}\r\n\r\n\r\n\r\n.game-author-pic {\r\n\twidth: 117px;\r\n\theight: 117px;\r\n\tborder-radius: 50%;\r\n\tfloat: left;\r\n\tmargin-right: 55px;\r\n}\r\n\r\n\r\n\r\n.game-author-info {\r\n\toverflow: hidden;\r\n\tpadding-top: 10px;\r\n}\r\n\r\n\r\n\r\n.game-author-info h4 {\r\n\tcolor: #fff;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n\r\n\r\n.game-author-info h4 span {\r\n\tcolor: #b01ba5;\r\n}\r\n\r\n\r\n\r\n.game-author-info p {\r\n\tfont-size: 16px;\r\n\tfont-weight: 500;\r\n\tcolor: #68647d;\r\n\tline-height: 1.8;\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n\r\n\r\n/* ----------------\r\n  Review section\r\n---------------------*/\r\n\r\n\r\n\r\n.review-item {\r\n\tmargin-bottom: 87px;\r\n}\r\n\r\n\r\n\r\n.review-content {\r\n\tposition: relative;\r\n}\r\n\r\n\r\n\r\n.review-content h3 {\r\n\tmax-width: 100%;\r\n\tmargin-bottom: 35px;\r\n}\r\n\r\n\r\n\r\n.review-content p {\r\n\tmargin-bottom: 40px;\r\n}\r\n\r\n\r\n\r\n.review-content .rating {\r\n\tposition: absolute;\r\n\tright: 0;\r\n\ttop: 0;\r\n}\r\n\r\n\r\n\r\n.review-content .rating h5 {\r\n\ttext-align: right;\r\n\tfont-size: 36px;\r\n\tcolor: #fff;\r\n\tfont-weight: 900;\r\n\tpadding-right: 38px;\r\n}\r\n\r\n\r\n\r\n.review-content .rating h5 i {\r\n\tfont-weight: 500;\r\n\tfont-size: 16px;\r\n\tfont-style: italic;\r\n\tcolor: #65607b;\r\n\ttext-transform: uppercase;\r\n\tmargin-right: 18px;\r\n}\r\n\r\n\r\n\r\n.review-content .rating h5 span {\r\n\tcolor: #c313b7;\r\n}\r\n\r\n\r\n\r\n/* ------------------\r\n\tBlog Page\r\n---------------------*/\r\n\r\n\r\n\r\n.blog-page .blog-filter {\r\n\tmargin-bottom: 77px;\r\n}\r\n\r\n\r\n\r\n.big-blog-item {\r\n\tmargin-bottom: 65px;\r\n}\r\n\r\n\r\n\r\n.big-blog-item .blog-thumbnail {\r\n\tmargin-bottom: 30px;\r\n}\r\n\r\n\r\n\r\n.big-blog-item .blog-content .top-meta {\r\n\tmargin-bottom: 15px;\r\n}\r\n\r\n\r\n\r\n.big-blog-item .blog-content h3 {\r\n\tmax-width: 100%;\r\n\tmargin-bottom: 25px;\r\n}\r\n\r\n\r\n\r\n.big-blog-item .blog-content p {\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n\r\n\r\n/* ----------------\r\n  Contact page\r\n---------------------*/\r\n\r\n\r\n\r\n.map iframe {\r\n\twidth: 100%;\r\n\theight: 600px;\r\n\tmargin-bottom: 104px;\r\n}\r\n\r\n\r\n\r\n.contact-form input,\r\n.contact-form textarea {\r\n\twidth: 100%;\r\n\tborder: none;\r\n\tbackground-color: transparent;\r\n\tborder-bottom: 2px solid rgba(255, 255, 255, 0.54);\r\n\tpadding-bottom: 20px;\r\n\tmargin-bottom: 30px;\r\n\tfont-weight: 500;\r\n\tfont-size: 16px;\r\n\tfont-style: italic;\r\n\tcolor: #fff;\r\n\tline-height: 1;\r\n}\r\n\r\n\r\n\r\n.contact-form textarea {\r\n\tline-height: 1.4;\r\n\theight: 156px;\r\n\tmargin-bottom: 48px;\r\n}\r\n\r\n\r\n\r\n.contact-form .site-btn img {\r\n\tleft: 5px;\r\n}\r\n\r\n\r\n\r\n.contact-text h3 {\r\n\tmargin-bottom: 25px;\r\n}\r\n\r\n\r\n\r\n.contact-text p {\r\n\tline-height: 1.9;\r\n\tcolor: #68647d;\r\n\tmargin-bottom: 50px;\r\n}\r\n\r\n\r\n\r\n.cont-info {\r\n\toverflow: hidden;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n\r\n\r\n.cont-info .ci-icon {\r\n\tfloat: left;\r\n\twidth: 32px;\r\n\tmargin-right: 26px;\r\n}\r\n\r\n\r\n\r\n.cont-info .ci-text {\r\n\toverflow: hidden;\r\n\tfont-size: 16px;\r\n\tfont-weight: 500;\r\n}\r\n\r\n\r\n\r\n/* ----------------\r\n  Responsive\r\n---------------------*/\r\n\r\n\r\n\r\n@media (min-width: 1200px) {\r\n\t.container {\r\n\t\tmax-width: 1175px;\r\n\t}\r\n}\r\n\r\n\r\n\r\n@media (max-width: 1530px) {\r\n\t.hero-slider .owl-dots {\r\n\t\twidth: 1170px;\r\n\t\tleft: calc(50% - 585px);\r\n\t}\r\n}\r\n\r\n\r\n\r\n/* Medium screen : 992px. */\r\n\r\n\r\n\r\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\r\n\t.blog-item .blog-thumb {\r\n\t\twidth: 250px;\r\n\t}\r\n\t.hero-item p {\r\n\t\tfont-size: 22px;\r\n\t}\r\n\t.hero-slider .owl-nav .owl-next {\r\n\t\tright: 30px;\r\n\t}\r\n\t.hero-slider .owl-dots {\r\n\t\twidth: 930px;\r\n\t\tleft: calc(50% - 465px);\r\n\t}\r\n\t.newsletter-form {\r\n\t\tpadding-left: 0;\r\n\t}\r\n\t.newsletter-form input {\r\n\t\twidth: 100%;\r\n\t\tmargin-right: 0;\r\n\t\tmargin-bottom: 40px;\r\n\t}\r\n\t.game-filter li {\r\n\t\twidth: 31px;\r\n\t\theight: 31px;\r\n\t}\r\n\t.game-filter li a {\r\n\t\tpadding-top: 5px;\r\n\t}\r\n}\r\n\r\n\r\n\r\n/* Tablet :768px. */\r\n\r\n\r\n\r\n@media only screen and (min-width: 768px) and (max-width: 991px) {\r\n\t.header-bar-warp {\r\n\t\tpadding: 39px 15px 0;\r\n\t}\r\n\t.main-menu li a {\r\n\t\tmargin-right: 10px;\r\n\t}\r\n\t.hero-item h2 {\r\n\t\tfont-size: 110px;\r\n\t}\r\n\t.hero-item p {\r\n\t\tfont-size: 16px;\r\n\t\tpadding: 0 30px;\r\n\t}\r\n\t.hero-slider .owl-nav .owl-next {\r\n\t\tright: 0;\r\n\t}\r\n\t.hero-slider .owl-dots {\r\n\t\twidth: 690px;\r\n\t\tleft: calc(50% - 345px);\r\n\t}\r\n\t.blog-item .blog-thumb {\r\n\t\tfloat: none;\r\n\t\tmargin-right: 0;\r\n\t\twidth: 100%;\r\n\t\tmargin-bottom: 30px;\r\n\t}\r\n\t.featured-bg {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.featured-box {\r\n\t\tfloat: none;\r\n\t\twidth: 100%;\r\n\t}\r\n\t.newsletter-form input {\r\n\t\twidth: 100%;\r\n\t\tmargin-right: 0;\r\n\t\tmargin-bottom: 40px;\r\n\t}\r\n\t.footer-right-pic {\r\n\t\tright: 15px;\r\n\t}\r\n\t.footer-left-pic {\r\n\t\tleft: -44px;\r\n\t}\r\n\t.game-filter {\r\n\t\ttext-align: center;\r\n\t}\r\n\t.game-filter li {\r\n\t\tmargin-bottom: 5px;\r\n\t}\r\n\t.game-single-content .gs-title {\r\n\t\tfont-size: 40px;\r\n\t}\r\n\t.review-pic img {\r\n\t\tmin-width: 100%;\r\n\t\tmargin-bottom: 30px;\r\n\t}\r\n\t.contact-text {\r\n\t\tmargin-bottom: 50px;\r\n\t}\r\n}\r\n\r\n\r\n\r\n/* Large Mobile :480px. */\r\n\r\n\r\n\r\n@media only screen and (max-width: 767px) {\r\n\t.header-bar-warp {\r\n\t\tpadding: 25px 20px 10px;\r\n\t}\r\n\t.main-menu.primary-menu {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.slicknav_menu {\r\n\t\tdisplay: block;\r\n\t\tbackground: #081624;\r\n\t}\r\n\t.slicknav_btn {\r\n\t\tmargin-right: 10px;\r\n\t\tbackground: #3a3a3a;\r\n\t}\r\n\t.slicknav_nav a:hover,\r\n\t.slicknav_nav .slicknav_row:hover {\r\n\t\tbackground: #25394c;\r\n\t\tcolor: #fff;\r\n\t}\r\n\t.hero-item h2 {\r\n\t\tfont-size: 70px;\r\n\t}\r\n\t.hero-item p {\r\n\t\tfont-size: 18px;\r\n\t}\r\n\t.footer-right-pic,\r\n\t.footer-left-pic {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.hero-slider .owl-nav .owl-next {\r\n\t\ttop: auto;\r\n\t\tbottom: 33px;\r\n\t\tright: 15px;\r\n\t\tz-index: 99;\r\n\t}\r\n\t.hero-slider .owl-dots {\r\n\t\twidth: 100%;\r\n\t\tleft: 0;\r\n\t\tpadding-left: 15px;\r\n\t}\r\n\t.intro-text-box {\r\n\t\tmargin-bottom: 40px;\r\n\t}\r\n\t.blog-item .blog-thumb {\r\n\t\tfloat: none;\r\n\t\tmargin-right: 0;\r\n\t\twidth: 100%;\r\n\t\tmargin-bottom: 30px;\r\n\t}\r\n\t.sidebar {\r\n\t\tpadding-top: 60px;\r\n\t}\r\n\t.featured-bg {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.featured-box {\r\n\t\tfloat: none;\r\n\t\twidth: 100%;\r\n\t}\r\n\t.featured-box .text-box h3 {\r\n\t\tfont-size: 45px;\r\n\t}\r\n\t.newsletter-form {\r\n\t\tpadding-left: 0;\r\n\t}\r\n\t.newsletter-form input {\r\n\t\twidth: 100%;\r\n\t\tmargin-right: 0;\r\n\t\tmargin-bottom: 40px;\r\n\t}\r\n\t.video-text:after {\r\n\t\tleft: 0;\r\n\t}\r\n\t.page-top-section {\r\n\t\theight: 400px;\r\n\t\tpadding-top: 250px;\r\n\t}\r\n\t.game-filter {\r\n\t\ttext-align: center;\r\n\t}\r\n\t.game-filter li {\r\n\t\tmargin-bottom: 5px;\r\n\t}\r\n\t.game-single-content .gs-title {\r\n\t\tfont-size: 40px;\r\n\t}\r\n\t.review-pic img {\r\n\t\tmin-width: 100%;\r\n\t\tmargin-bottom: 30px;\r\n\t}\r\n\t.contact-text {\r\n\t\tmargin-bottom: 50px;\r\n\t}\r\n\t.review-content .rating {\r\n\t\tposition: relative;\r\n\t\tmargin-bottom: 20px;\r\n\t}\r\n\t.review-content .rating h5 {\r\n\t\ttext-align: left;\r\n\t\tpadding-right: 0;\r\n\t}\r\n}\r\n\r\n\r\n\r\n/* Small Mobile :320px. */\r\n\r\n\r\n\r\n@media only screen and (max-width: 479px) {\r\n\t.hero-item h2 {\r\n\t\tfont-size: 55px;\r\n\t\tmargin-bottom: 20px;\r\n\t}\r\n\t.hero-item p {\r\n\t\tfont-size: 15px;\r\n\t}\r\n\t.video-text h2 {\r\n\t\tfont-size: 30px;\r\n\t}\r\n\t.video-play-btn {\r\n\t\ttop: calc(30% - 61px);\r\n\t}\r\n\t.featured-box {\r\n\t\tpadding: 100px 15px;\r\n\t}\r\n\t.featured-box .text-box h3,\r\n\t.newsletter-section h2 {\r\n\t\tfont-size: 35px;\r\n\t}\r\n\t.main-menu li a {\r\n\t\tmargin-right: 20px;\r\n\t}\r\n\t.game-author-pic {\r\n\t\tfloat: none;\r\n\t\tmargin-bottom: 20px;\r\n\t}\r\n}\r\n\r\n\r\n\r\n.titulo\r\n{\r\n\tdisplay: inline-flex;\r\n\tfont-size: 40px;\r\n\tfont-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n\tfont-weight: 500;\r\n\tcolor: rgb(255, 255, 255);\r\n\tpadding-bottom: 40px;\r\n\tpadding-right: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O3NDQUtzQzs7OztBQUl0QywyQ0FBMkM7Ozs7QUFDM0M7MkNBQzJDOzs7O0FBRTNDOztDQUVDLFlBQVk7Q0FDWixpQ0FBaUM7Q0FDakMsbUNBQW1DO0NBQ25DLDJCQUEyQjtBQUM1Qjs7OztBQUVBOzs7Ozs7Q0FNQyxTQUFTO0NBQ1QsY0FBYztDQUNkLGdCQUFnQjtBQUNqQjs7OztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7OztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7OztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7OztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7OztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7OztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7OztBQUVBO0NBQ0MsZUFBZTtDQUNmLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0FBQ2pCOzs7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOzs7O0FBRUE7Ozs7Q0FJQyxhQUFhO0FBQ2Q7Ozs7QUFFQTs7Q0FFQyxxQkFBcUI7Q0FDckIsYUFBYTtBQUNkOzs7O0FBRUE7O0NBRUMsVUFBVTtDQUNWLFNBQVM7QUFDVjs7OztBQUVBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQix5QkFBeUI7QUFDMUI7Ozs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIseUJBQXlCO0FBQzFCOzs7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLHlCQUF5QjtBQUMxQjs7OztBQUVBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQix5QkFBeUI7QUFDMUI7Ozs7QUFFQTs7d0JBRXdCOzs7O0FBRXhCO0NBQ0MsZUFBZTtDQUNmLHlCQUF5QjtDQUN6QixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25COzs7O0FBRUE7Q0FDQyw0QkFBNEI7Q0FDNUIsc0JBQXNCO0NBQ3RCLCtCQUEr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LG1CQUFtQjtDQUNwQjtDQUNBO0VBQ0MsV0FBVztFQUNYLGVBQWU7RUFDZixXQUFXO0VBQ1gsbUJBQW1CO0NBQ3BCO0NBQ0E7RUFDQyxpQkFBaUI7Q0FDbEI7Q0FDQTtFQUNDLGFBQWE7Q0FDZDtDQUNBO0VBQ0MsV0FBVztFQUNYLFdBQVc7Q0FDWjtDQUNBO0VBQ0MsZUFBZTtDQUNoQjtDQUNBO0VBQ0MsZUFBZTtDQUNoQjtDQUNBO0VBQ0MsV0FBVztFQUNYLGVBQWU7RUFDZixtQkFBbUI7Q0FDcEI7Q0FDQTtFQUNDLE9BQU87Q0FDUjtDQUNBO0VBQ0MsYUFBYTtFQUNiLGtCQUFrQjtDQUNuQjtDQUNBO0VBQ0Msa0JBQWtCO0NBQ25CO0NBQ0E7RUFDQyxrQkFBa0I7Q0FDbkI7Q0FDQTtFQUNDLGVBQWU7Q0FDaEI7Q0FDQTtFQUNDLGVBQWU7RUFDZixtQkFBbUI7Q0FDcEI7Q0FDQTtFQUNDLG1CQUFtQjtDQUNwQjtDQUNBO0VBQ0Msa0JBQWtCO0VBQ2xCLG1CQUFtQjtDQUNwQjtDQUNBO0VBQ0MsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtDQUNqQjtBQUNEOzs7O0FBRUEseUJBQXlCOzs7O0FBRXpCO0NBQ0M7RUFDQyxlQUFlO0VBQ2YsbUJBQW1CO0NBQ3BCO0NBQ0E7RUFDQyxlQUFlO0NBQ2hCO0NBQ0E7RUFDQyxlQUFlO0NBQ2hCO0NBQ0E7RUFDQyxxQkFBcUI7Q0FDdEI7Q0FDQTtFQUNDLG1CQUFtQjtDQUNwQjtDQUNBOztFQUVDLGVBQWU7Q0FDaEI7Q0FDQTtFQUNDLGtCQUFrQjtDQUNuQjtDQUNBO0VBQ0MsV0FBVztFQUNYLG1CQUFtQjtDQUNwQjtBQUNEOzs7O0FBQ0E7O0NBRUMsb0JBQW9CO0NBQ3BCLGVBQWU7Q0FDZixzSEFBc0g7Q0FDdEgsZ0JBQWdCO0NBQ2hCLHlCQUF5QjtDQUN6QixvQkFBb0I7Q0FDcEIsbUJBQW1CO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgRW5kR2FtIC0gR2FtaW5nIE1hZ2F6aW5lIFRlbXBsYXRlXHJcbiAgVmVyc2lvbjogMS4wXHJcbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qIFRlbXBsYXRlIGRlZmF1bHQgQ1NTXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG5cdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG5cdGZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxufVxyXG5cclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNiB7XHJcblx0bWFyZ2luOiAwO1xyXG5cdGNvbG9yOiAjMTExMTExO1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbmgxIHtcclxuXHRmb250LXNpemU6IDcwcHg7XHJcbn1cclxuXHJcbmgyIHtcclxuXHRmb250LXNpemU6IDM2cHg7XHJcbn1cclxuXHJcbmgzIHtcclxuXHRmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbmg0IHtcclxuXHRmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbmg1IHtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbmg2IHtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbnAge1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRjb2xvcjogIzU4NTg1ODtcclxuXHRsaW5lLWhlaWdodDogMS42O1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbmltZyB7XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyxcclxuc2VsZWN0OmZvY3VzLFxyXG5idXR0b246Zm9jdXMsXHJcbnRleHRhcmVhOmZvY3VzIHtcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5hOmhvdmVyLFxyXG5hOmZvY3VzIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5cclxudWwsXHJcbm9sIHtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdG1hcmdpbjogMDtcclxufVxyXG5cclxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRmb250LXN0eWxlOiBpdGFsaWM7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRmb250LXN0eWxlOiBpdGFsaWM7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuOjpwbGFjZWhvbGRlciB7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgSGVscGVyIENTU1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4uc2VjdGlvbi10aXRsZSBoMiB7XHJcblx0Zm9udC1zaXplOiAzMHB4O1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi5zZXQtYmcge1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xyXG59XHJcblxyXG4uc3BhZCB7XHJcblx0cGFkZGluZy10b3A6IDEwNXB4O1xyXG5cdHBhZGRpbmctYm90dG9tOiAxMDVweDtcclxufVxyXG5cclxuLnRleHQtd2hpdGUgaDEsXHJcbi50ZXh0LXdoaXRlIGgyLFxyXG4udGV4dC13aGl0ZSBoMyxcclxuLnRleHQtd2hpdGUgaDQsXHJcbi50ZXh0LXdoaXRlIGg1LFxyXG4udGV4dC13aGl0ZSBoNixcclxuLnRleHQtd2hpdGUgcCxcclxuLnRleHQtd2hpdGUgc3BhbixcclxuLnRleHQtd2hpdGUgbGksXHJcbi50ZXh0LXdoaXRlIGEge1xyXG5cdGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIENvbW1vbSBlbGVtZW50c1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4vKiBidXR0b25zICovXHJcblxyXG4uc2l0ZS1idG4ge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG5cdG1pbi13aWR0aDogMTg2cHg7XHJcblx0cGFkZGluZzogMjRweCAzMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDA7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRjb2xvcjogIzA4MTYyNDtcclxuXHRsaW5lLWhlaWdodDogbm9ybWFsO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ei1pbmRleDogMTtcclxufVxyXG5cclxuLnNpdGUtYnRuIGltZyB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGxlZnQ6IDEzcHg7XHJcblx0d2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNpdGUtYnRuOmFmdGVyLFxyXG4uc2l0ZS1idG46YmVmb3JlIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0Y29udGVudDogXCJcIjtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0bGVmdDogOXB4O1xyXG5cdHRvcDogMTBweDtcclxuXHRiYWNrZ3JvdW5kOiAjYjAxYmE1O1xyXG5cdHotaW5kZXg6IC0yO1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDlweCAzcHggcmdiYSgyMjYsIDMwLCAyMjgsIDAuMjQpO1xyXG5cdGJveC1zaGFkb3c6IDAgMCA5cHggM3B4IHJnYmEoMjI2LCAzMCwgMjI4LCAwLjI0KTtcclxufVxyXG5cclxuLnNpdGUtYnRuOmJlZm9yZSB7XHJcblx0bGVmdDogMDtcclxuXHR0b3A6IDA7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHR6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLnNpdGUtYnRuOmhvdmVyIHtcclxuXHRjb2xvcjogIzA4MTYyNDtcclxufVxyXG5cclxuLyogUHJlbG9kZXIgKi9cclxuXHJcbiNwcmVsb2RlciB7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHR6LWluZGV4OiA5OTk5OTk7XHJcblx0YmFja2dyb3VuZDogIzAwMDtcclxufVxyXG5cclxuLmxvYWRlciB7XHJcblx0d2lkdGg6IDQwcHg7XHJcblx0aGVpZ2h0OiA0MHB4O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDUwJTtcclxuXHRsZWZ0OiA1MCU7XHJcblx0bWFyZ2luLXRvcDogLTEzcHg7XHJcblx0bWFyZ2luLWxlZnQ6IC0xM3B4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDYwcHg7XHJcblx0YW5pbWF0aW9uOiBsb2FkZXIgMC44cyBsaW5lYXIgaW5maW5pdGU7XHJcblx0LXdlYmtpdC1hbmltYXRpb246IGxvYWRlciAwLjhzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBsb2FkZXIge1xyXG5cdDAlIHtcclxuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuXHRcdGJvcmRlcjogNHB4IHNvbGlkICNmNDQzMzY7XHJcblx0XHRib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0fVxyXG5cdDUwJSB7XHJcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG5cdFx0Ym9yZGVyOiA0cHggc29saWQgIzY3M2FiNztcclxuXHRcdGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHR9XHJcblx0MTAwJSB7XHJcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG5cdFx0Ym9yZGVyOiA0cHggc29saWQgI2Y0NDMzNjtcclxuXHRcdGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHR9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkZXIge1xyXG5cdDAlIHtcclxuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcblx0XHRib3JkZXI6IDRweCBzb2xpZCAjZjQ0MzM2O1xyXG5cdFx0Ym9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdH1cclxuXHQ1MCUge1xyXG5cdFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG5cdFx0Ym9yZGVyOiA0cHggc29saWQgIzY3M2FiNztcclxuXHRcdGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHR9XHJcblx0MTAwJSB7XHJcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcblx0XHRib3JkZXI6IDRweCBzb2xpZCAjZjQ0MzM2O1xyXG5cdFx0Ym9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdH1cclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS1cclxuICBIZWFkZXIgc2VjdGlvblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmhlYWRlci1zZWN0aW9uIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bGVmdDogMDtcclxuXHR0b3A6IC00NHB4O1xyXG5cdHotaW5kZXg6IDk5O1xyXG5cdHBhZGRpbmc6IDUwcHggNTBweCAwO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VuZXMvY2FiZWNlcmEucG5nXCIpO1xyXG5cdFxyXG5cclxufVxyXG5cclxuLmhlYWRlci13YXJwIHtcclxuXHRtYXgtd2lkdGg6IDE0OTZweDtcclxuXHRtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmhlYWRlci1zb2NpYWwgcCxcclxuLmZvb3Rlci1zb2NpYWwgcCxcclxuLmdlbWUtc29jaWFsLXNoYXJlIHAge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRjb2xvcjogIzkxOTBhNTtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0cGFkZGluZy10b3A6IDRweDtcclxufVxyXG5cclxuLmhlYWRlci1zb2NpYWwgYSxcclxuLmZvb3Rlci1zb2NpYWwgYSxcclxuLmdlbWUtc29jaWFsLXNoYXJlIGEge1xyXG5cdGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG5cdHdpZHRoOiAzMnB4O1xyXG5cdGhlaWdodDogMzJweDtcclxuXHQtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG5cdC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHQtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcblx0LW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0bWFyZ2luLWxlZnQ6IDEzcHg7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuXHQtby10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLmhlYWRlci1zb2NpYWwgYTpob3ZlcixcclxuLmZvb3Rlci1zb2NpYWwgYTpob3ZlcixcclxuLmdlbWUtc29jaWFsLXNoYXJlIGE6aG92ZXIge1xyXG5cdGJhY2tncm91bmQ6ICNiMDFiYTU7XHJcbn1cclxuXHJcbi5oZWFkZXItYmFyLXdhcnAge1xyXG5cdHBhZGRpbmc6IDM5cHggNDBweCAwO1xyXG5cdFxyXG5cdFxyXG59XHJcblxyXG4uc2l0ZS1sb2dvIHtcclxuXHRmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLnVzZXItcGFuZWwge1xyXG5cdGZsb2F0OiByaWdodDtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRwYWRkaW5nLXRvcDogM3B4O1xyXG59XHJcblxyXG4udXNlci1wYW5lbCBhIHtcclxuXHRjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnVzZXItcGFuZWwgYTpob3ZlciB7XHJcblx0Y29sb3I6ICNiMDFiYTU7XHJcbn1cclxuXHJcbi5tYWluLW1lbnUge1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHBhZGRpbmctdG9wOiAzcHg7XHJcbn1cclxuXHJcbi5tYWluLW1lbnUgbGkge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5tYWluLW1lbnUgbGkgYSB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC1zaXplOiA0MHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0Y29sb3I6IHJnYig0MSwgMjUwLCAxNCk7XHJcblx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cdHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ubWFpbi1tZW51IGxpIGE6YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0d2lkdGg6IDIwcHg7XHJcblx0aGVpZ2h0OiAyMHB4O1xyXG5cdHJpZ2h0OiAwO1xyXG5cdHRvcDogMXB4O1xyXG5cclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjtcclxufVxyXG5cclxuLm1haW4tbWVudSBsaSBhIGkge1xyXG5cdGNvbG9yOiAjOTI4ZDkyO1xyXG5cdG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5tYWluLW1lbnUgbGkgYTpob3ZlciB7XHJcblx0Y29sb3I6ICNiMDFiYTU7XHJcbn1cclxuXHJcbi5tYWluLW1lbnUgbGkgYTpob3ZlcjphZnRlciB7XHJcbiAgICBjb2xvcjogIzAwMFxyXG59XHJcblxyXG4ubWFpbi1tZW51IGxpIGE6aG92ZXIgaSB7XHJcblx0Y29sb3I6ICNiMDFiYTU7XHJcbn1cclxuXHJcbi5tYWluLW1lbnUgbGk6aG92ZXIgLnN1Yi1tZW51IHtcclxuXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG5cdG9wYWNpdHk6IDE7XHJcblx0bWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLm1haW4tbWVudSBsaTpob3Zlcj5hIHtcclxuXHRjb2xvcjogI2IwMWJhNTtcclxufVxyXG5cclxuLm1haW4tbWVudSBsaTpob3Zlcj5hOmFmdGVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTkwZDM2XHJcbn1cclxuXHJcbi5tYWluLW1lbnUgbGkgLnN1Yi1tZW51IHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdHdpZHRoOiAyMjBweDtcclxuXHRsZWZ0OiAwO1xyXG5cdHRvcDogMTAwJTtcclxuXHRwYWRkaW5nOiAyMHB4IDA7XHJcblx0dmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdG9wYWNpdHk6IDA7XHJcblx0bWFyZ2luLXRvcDogNTBweDtcclxuXHRiYWNrZ3JvdW5kOiByZ2IoMjMzLCAyNTAsIDApO1xyXG5cdHotaW5kZXg6IDk5O1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcblx0LW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAycHggN3B4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG5cdGJveC1zaGFkb3c6IDJweCA3cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuXHJcbi5tYWluLW1lbnUgbGkgLnN1Yi1tZW51IGxpIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLm1haW4tbWVudSBsaSAuc3ViLW1lbnUgbGkgYSB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Y29sb3I6ICMwMDA7XHJcblx0bWFyZ2luLXJpZ2h0OiAwO1xyXG5cdHBhZGRpbmc6IDhweCAzMHB4O1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLm1haW4tbWVudSBsaSAuc3ViLW1lbnUgbGkgYTphZnRlciB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLm1haW4tbWVudSBsaSAuc3ViLW1lbnUgbGkgYTpob3ZlciB7XHJcblx0Y29sb3I6ICNiMDFiYTU7XHJcbn1cclxuXHJcbi5zbGlja25hdl9tZW51IHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIEhlcm8gc2VjdGlvblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmhlcm8tc2xpZGVyIC5vd2wtZG90cyB7XHJcblx0ZGlzcGxheTogLW1zLWZsZXg7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHR6LWluZGV4OiAyO1xyXG5cdGxlZnQ6IGNhbGMoNTAlIC0gNzQwcHgpO1xyXG5cdGJvdHRvbTogMzhweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0d2lkdGg6IDE0OTZweDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5oZXJvLXNsaWRlciAub3dsLWRvdHMgLm93bC1kb3Qge1xyXG5cdHdpZHRoOiA0NHB4O1xyXG5cdGhlaWdodDogNDRweDtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0Ym9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0ZGlzcGxheTogLW1zLWlubGluZS1mbGV4O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcclxuXHRkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XHJcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XHJcblx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuXHQtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0LXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG5cdC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmhlcm8tc2xpZGVyIC5vd2wtZG90cyAub3dsLWRvdC5hY3RpdmUge1xyXG5cdGNvbG9yOiAjYjAxYmE1O1xyXG5cdGJvcmRlcjogMnB4IHNvbGlkICNiMDFiYTU7XHJcbn1cclxuXHJcbi5oZXJvLXNsaWRlciAub3dsLW5hdiB7XHJcblx0bWFyZ2luLXRvcDogLTI0cHg7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5oZXJvLXNsaWRlciAub3dsLW5hdiAub3dsLW5leHQge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDUwJTtcclxuXHRyaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5oZXJvLWl0ZW0ge1xyXG5cdGhlaWdodDogOTIxcHg7XHJcblx0cGFkZGluZy10b3A6IDEyNXB4O1xyXG5cdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYjAxYmE1O1xyXG59XHJcblxyXG4uaGVyby1pdGVtIGgyIHtcclxuXHRmb250LXNpemU6IDE2MHB4O1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0bGluZS1oZWlnaHQ6IDE7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHRvcDogMTAwcHg7XHJcblx0b3BhY2l0eTogMDtcclxufVxyXG5cclxuLmhlcm8taXRlbSBwIHtcclxuXHRmb250LXNpemU6IDI0cHg7XHJcblx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG5cdG9wYWNpdHk6IDAuMzk7XHJcblx0bWFyZ2luLWJvdHRvbTogNzBweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0dG9wOiA4MHB4O1xyXG5cdG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5oZXJvLWl0ZW0gLnNpdGUtYnRuIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0dG9wOiA1MHB4O1xyXG5cdG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5oZXJvLXNsaWRlciAub3dsLWl0ZW0uYWN0aXZlIC5oZXJvLWl0ZW0gaDIsXHJcbi5oZXJvLXNsaWRlciAub3dsLWl0ZW0uYWN0aXZlIC5oZXJvLWl0ZW0gcCxcclxuLmhlcm8tc2xpZGVyIC5vd2wtaXRlbS5hY3RpdmUgLmhlcm8taXRlbSAuc2l0ZS1idG4ge1xyXG5cdHRvcDogMDtcclxuXHRvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uaGVyby1zbGlkZXIgLm93bC1pdGVtLmFjdGl2ZSAuaGVyby1pdGVtIGgyIHtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMC40cztcclxuXHQtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlIDAuNHM7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAwLjRzO1xyXG59XHJcblxyXG4uaGVyby1zbGlkZXIgLm93bC1pdGVtLmFjdGl2ZSAuaGVyby1pdGVtIHAge1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAwLjZzO1xyXG5cdC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMC42cztcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlIDAuNnM7XHJcbn1cclxuXHJcbi5oZXJvLXNsaWRlciAub3dsLWl0ZW0uYWN0aXZlIC5oZXJvLWl0ZW0gLnNpdGUtYnRuIHtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMC44cztcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMC44cztcclxuXHQtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlIDAuOHM7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAwLjhzO1xyXG59XHJcblxyXG4uaGVyby1zbGlkZXIgLm93bC1pdGVtLmFjdGl2ZSAuaGVyby1pdGVtIC5vZmZlci1jYXJkIHtcclxuXHRvcGFjaXR5OiAxO1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcblx0LW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG5cdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAxcztcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMXM7XHJcblx0LW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAxcztcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlIDFzO1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tXHJcbiAgSW50cm8gc2VjdGlvblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmludHJvLXNlY3Rpb24ge1xyXG5cdGJhY2tncm91bmQ6ICMwYzA2MmU7XHJcblx0cGFkZGluZzogMTE1cHggMDtcclxufVxyXG5cclxuLnRleHQtYm94IC50b3AtbWV0YSB7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnRleHQtYm94IC50b3AtbWV0YSBhIHtcclxuXHRjb2xvcjogI2IwMWJhNTtcclxufVxyXG5cclxuLnRleHQtYm94IGgzIHtcclxuXHRtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG5cdG1heC13aWR0aDogMzcwcHg7XHJcbn1cclxuXHJcbi50ZXh0LWJveCBwIHtcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRjb2xvcjogIzY4NjQ3ZDtcclxuXHRtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG59XHJcblxyXG4udGV4dC1ib3ggLnJlYWQtbW9yZSB7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRmb250LXN0eWxlOiBpdGFsaWM7XHJcblx0Y29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi50ZXh0LWJveCAucmVhZC1tb3JlIGltZyB7XHJcblx0bWFyZ2luLWxlZnQ6IDEzcHg7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS1cclxuIEJsb2cgU2VjdGlvblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmJsb2ctc2VjdGlvbiB7XHJcblx0LyogUGVybWFsaW5rIC0gdXNlIHRvIGVkaXQgYW5kIHNoYXJlIHRoaXMgZ3JhZGllbnQ6IGh0dHA6Ly9jb2xvcnppbGxhLmNvbS9ncmFkaWVudC1lZGl0b3IvIzUwMTc1NSswLDJkMTg1NCsxMDAgKi9cclxuXHRiYWNrZ3JvdW5kOiAjNTAxNzU1O1xyXG5cdC8qIE9sZCBicm93c2VycyAqL1xyXG5cdC8qIEZGMy42LTE1ICovXHJcblx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsICM1MDE3NTUgMCUsICMyZDE4NTQgMTAwJSk7XHJcblx0LyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cclxuXHRiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDVkZWcsICM1MDE3NTUgMCUsICMyZDE4NTQgMTAwJSk7XHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNTAxNzU1IDAlLCAjMmQxODU0IDEwMCUpO1xyXG5cdC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xyXG5cdGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjNTAxNzU1JywgZW5kQ29sb3JzdHI9JyMyZDE4NTQnLCBHcmFkaWVudFR5cGU9MSk7XHJcblx0LyogSUU2LTkgZmFsbGJhY2sgb24gaG9yaXpvbnRhbCBncmFkaWVudCAqL1xyXG59XHJcblxyXG4uYmxvZy1zZWN0aW9uIC5zZWN0aW9uLXRpdGxlIHtcclxuXHRtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4uYmxvZy1maWx0ZXIge1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5ibG9nLWZpbHRlciBsaSB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uYmxvZy1maWx0ZXIgbGkgYSB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0cGFkZGluZzogMTZweCAzNnB4O1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdGJhY2tncm91bmQ6ICM2ZjJiOTU7XHJcblx0bGluZS1oZWlnaHQ6IDEuMTtcclxuXHRtYXJnaW4tcmlnaHQ6IDdweDtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG5cdC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5ibG9nLWZpbHRlciBsaSBhOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kOiAjYjAxYmE1O1xyXG59XHJcblxyXG4uYmxvZy1pdGVtIHtcclxuXHRtYXJnaW4tdG9wOiA4NnB4O1xyXG59XHJcblxyXG4uYmxvZy1pdGVtIC5ibG9nLXRodW1iIHtcclxuXHR3aWR0aDogMzYycHg7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0bWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uYmxvZy1pdGVtIC50ZXh0LWJveCB7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmJsb2ctaXRlbSAudGV4dC1ib3ggcCB7XHJcblx0bWFyZ2luLWJvdHRvbTogNDJweDtcclxufVxyXG5cclxuLndpZGdldC1pdGVtIHtcclxuXHRtYXJnaW4tYm90dG9tOiA4NXB4O1xyXG59XHJcblxyXG4ud2lkZ2V0LWl0ZW06bGFzdC1jaGlsZCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLndpZGdldC1pdGVtIC53aWRnZXQtdGl0bGUge1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRmb250LXN0eWxlOiBpdGFsaWM7XHJcblx0cGFkZGluZy1sZWZ0OiAzOHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDQ4cHg7XHJcbn1cclxuXHJcbi50cmVuZGluZy13aWRnZXQgLnR3LWl0ZW0ge1xyXG5cdG1hcmdpbi1ib3R0b206IDM4cHg7XHJcbn1cclxuXHJcbi50cmVuZGluZy13aWRnZXQgLnR3LWl0ZW06bGFzdC1jaGlsZCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLnRyZW5kaW5nLXdpZGdldCAudHctdGh1bWIge1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdG1hcmdpbi1yaWdodDogMTdweDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udHJlbmRpbmctd2lkZ2V0IC50dy10ZXh0IC50dy1tZXRhIHtcclxuXHRjb2xvcjogIzY4NjQ3ZDtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRtYXJnaW4tYm90dG9tOiA3cHg7XHJcbn1cclxuXHJcbi50cmVuZGluZy13aWRnZXQgLnR3LXRleHQgLnR3LW1ldGEgYSB7XHJcblx0Y29sb3I6ICNiMDFiYTU7XHJcbn1cclxuXHJcbi50cmVuZGluZy13aWRnZXQgLnR3LXRleHQgaDUge1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG4uY2F0ZWdvcmllcy13aWRnZXQge1xyXG5cdGJhY2tncm91bmQ6ICMzNDE2NGI7XHJcblx0cGFkZGluZzogNTVweCAwIDI1cHg7XHJcbn1cclxuXHJcbi5jYXRlZ29yaWVzLXdpZGdldCB1bCB7XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxuXHRwYWRkaW5nOiAwIDM4cHg7XHJcbn1cclxuXHJcbi5jYXRlZ29yaWVzLXdpZGdldCB1bCBsaSB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5jYXRlZ29yaWVzLXdpZGdldCB1bCBsaSBhIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRjb2xvcjogIzY4NjQ3ZDtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblx0cGFkZGluZy1yaWdodDogMTlweDtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG5cdC1vLXRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgLTEyMCUgY2VudGVyO1xyXG5cdGJhY2tncm91bmQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuLmNhdGVnb3JpZXMtd2lkZ2V0IHVsIGxpIGE6aG92ZXIge1xyXG5cdGNvbG9yOiAjYjAxYmE1O1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjtcclxufVxyXG5cclxuLnNlYXJjaC13aWRnZXQge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnNlYXJjaC13aWRnZXQgaW5wdXQge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogNDBweDtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM3MjYyOGI7XHJcblx0YmFja2dyb3VuZDogbm9uZTtcclxuXHRwYWRkaW5nLXJpZ2h0OiA2MHB4O1xyXG5cdGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uc2VhcmNoLXdpZGdldCBidXR0b24ge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRyaWdodDogMDtcclxuXHR0b3A6IDA7XHJcblx0Y29sb3I6ICNiMDFiYTU7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRiYWNrZ3JvdW5kOiBub25lO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4ubGF0ZXN0LWNvbW1lbnRzIC5sYy1pdGVtIHtcclxuXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4ubGF0ZXN0LWNvbW1lbnRzIC5sYy1pdGVtOmxhc3QtY2hpbGQge1xyXG5cdG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5sYXRlc3QtY29tbWVudHMgLmxjLWl0ZW0gLmxjLWF2YXRhciB7XHJcblx0d2lkdGg6IDY0cHg7XHJcblx0aGVpZ2h0OiA2NHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRmbG9hdDogbGVmdDtcclxuXHRtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbi5sYXRlc3QtY29tbWVudHMgLmxjLWl0ZW0gLnR3LXRleHQge1xyXG5cdHBhZGRpbmctdG9wOiAxMHB4O1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ubGF0ZXN0LWNvbW1lbnRzIC5sYy1pdGVtIC50dy10ZXh0IGEge1xyXG5cdGNvbG9yOiAjYjAxYmE1O1xyXG59XHJcblxyXG4ubGF0ZXN0LWNvbW1lbnRzIC5sYy1pdGVtIC50dy10ZXh0IHNwYW4ge1xyXG5cdGNvbG9yOiAjNjg2NDdkO1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIEludHJvIHZpZGVvIHNlY3Rpb25cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmludHJvLXZpZGVvLXNlY3Rpb24ge1xyXG5cdGhlaWdodDogNzU3cHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udmlkZW8tcGxheS1idG4ge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRsZWZ0OiBjYWxjKDUwJSAtIDYxcHgpO1xyXG5cdHRvcDogY2FsYyg1MCUgLSA2MXB4KTtcclxuXHR3aWR0aDogMTIycHg7XHJcblx0aGVpZ2h0OiAxMjJweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0cGFkZGluZy10b3A6IDM1cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNik7XHJcbn1cclxuXHJcbi52aWRlby10ZXh0IHtcclxuXHRtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG5cdHBhZGRpbmc6IDI3cHggMDtcclxuXHRwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udmlkZW8tdGV4dCBoMiB7XHJcblx0Zm9udC1zaXplOiA0OHB4O1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0bWFyZ2luLWJvdHRvbTogMXB4O1xyXG59XHJcblxyXG4udmlkZW8tdGV4dCBwIHtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0Y29sb3I6ICNhM2ExYjM7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4udmlkZW8tdGV4dDphZnRlciB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0d2lkdGg6IDlweDtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0bGVmdDogLTIycHg7XHJcblx0dG9wOiAwO1xyXG5cdGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2RlNDZkNjtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDlweCAzcHggcmdiYSgyMjYsIDMwLCAyMjgsIDAuNSk7XHJcblx0Ym94LXNoYWRvdzogMCAwIDlweCAzcHggcmdiYSgyMjYsIDMwLCAyMjgsIDAuNSk7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS1cclxuICBGZWF0dXJlZCBzZWN0aW9uXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4uZmVhdHVyZWQtc2VjdGlvbiB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5mZWF0dXJlZC1iZyB7XHJcblx0d2lkdGg6IGNhbGMoNTAlIC0gMTU2cHgpO1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRsZWZ0OiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmZlYXR1cmVkLWJveCB7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdHdpZHRoOiBjYWxjKDUwJSArIDE1NnB4KTtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdHBhZGRpbmc6IDEwMHB4IDUwcHggMTMwcHggNzlweDtcclxufVxyXG5cclxuLmZlYXR1cmVkLWJveCAudGV4dC1ib3gge1xyXG5cdG1heC13aWR0aDogODEwcHg7XHJcbn1cclxuXHJcbi5mZWF0dXJlZC1ib3ggLnRleHQtYm94IC50b3AtbWV0YSB7XHJcblx0Y29sb3I6ICM2ODY0N2Q7XHJcbn1cclxuXHJcbi5mZWF0dXJlZC1ib3ggLnRleHQtYm94IGgzIHtcclxuXHRmb250LXNpemU6IDYwcHg7XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZmVhdHVyZWQtYm94IC50ZXh0LWJveCBwIHtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5mZWF0dXJlZC1ib3ggLnRleHQtYm94IC5yZWFkLW1vcmUge1xyXG5cdGNvbG9yOiAjMjUxZTJmO1xyXG59XHJcblxyXG4uZ3JhZGllbnQtYmcsXHJcbi5uZXdzbGV0dGVyLXNlY3Rpb24ge1xyXG5cdGJhY2tncm91bmQ6ICMzZTBmM2Q7XHJcblx0LyogT2xkIGJyb3dzZXJzICovXHJcblx0LyogRkYzLjYtMTUgKi9cclxuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjM2UwZjNkIDAlLCAjMWMwZjNiIDEwMCUpO1xyXG5cdC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXHJcblx0YmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20oIzNlMGYzZCksIHRvKCMxYzBmM2IpKTtcclxuXHRiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgIzNlMGYzZCAwJSwgIzFjMGYzYiAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzZTBmM2QgMCUsICMxYzBmM2IgMTAwJSk7XHJcblx0LyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXHJcblx0ZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyMzZTBmM2QnLCBlbmRDb2xvcnN0cj0nIzFjMGYzYicsIEdyYWRpZW50VHlwZT0xKTtcclxuXHQvKiBJRTYtOSAqL1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIE5ld3NsZXR0ZXIgc2VjdGlvblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5uZXdzbGV0dGVyLXNlY3Rpb24ge1xyXG5cdHBhZGRpbmc6IDEwOHB4IDAgOTVweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uZXdzbGV0dGVyLXNlY3Rpb24gaDIge1xyXG5cdGZvbnQtc2l6ZTogNDhweDtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdG1hcmdpbi1ib3R0b206IDczcHg7XHJcbn1cclxuXHJcbi5uZXdzbGV0dGVyLWZvcm0ge1xyXG5cdHBhZGRpbmctbGVmdDogNTZweDtcclxufVxyXG5cclxuLm5ld3NsZXR0ZXItZm9ybSBpbnB1dCB7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdHdpZHRoOiA3ODdweDtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM5YjkxYTY7XHJcblx0YmFja2dyb3VuZDogbm9uZTtcclxuXHRoZWlnaHQ6IDYzcHg7XHJcblx0bWFyZ2luLXJpZ2h0OiAyNnB4O1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tXHJcbiAgRm9vdGVyIHNlY3Rpb25cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5mb290ZXItc2VjdGlvbiB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdC8qIFBlcm1hbGluayAtIHVzZSB0byBlZGl0IGFuZCBzaGFyZSB0aGlzIGdyYWRpZW50OiBodHRwOi8vY29sb3J6aWxsYS5jb20vZ3JhZGllbnQtZWRpdG9yLyMzMzBkMzgrMCwxOTBkMzYrMTAwICovXHJcblx0YmFja2dyb3VuZDogIzMzMGQzODtcclxuXHQvKiBPbGQgYnJvd3NlcnMgKi9cclxuXHQvKiBGRjMuNi0xNSAqL1xyXG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICMzMzBkMzggMCUsICMxOTBkMzYgMTAwJSk7XHJcblx0LyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cclxuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgZnJvbSgjMzMwZDM4KSwgdG8oIzE5MGQzNikpO1xyXG5cdGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMzMwZDM4IDAlLCAjMTkwZDM2IDEwMCUpO1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzMzMGQzOCAwJSwgIzE5MGQzNiAxMDAlKTtcclxuXHQvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cclxuXHRmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzMzMGQzOCcsIGVuZENvbG9yc3RyPScjMTkwZDM2JywgR3JhZGllbnRUeXBlPTEpO1xyXG5cdC8qIElFNi05ICovXHJcbn1cclxuXHJcbi5mb290ZXItc2VjdGlvbiAuY29udGFpbmVyIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0cGFkZGluZzogNjBweCAxNXB4IDI1cHg7XHJcbn1cclxuXHJcbi5mb290ZXItbGVmdC1waWMge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRsZWZ0OiAtMTNweDtcclxuXHRib3R0b206IDE5cHg7XHJcbn1cclxuXHJcbi5mb290ZXItcmlnaHQtcGljIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cmlnaHQ6IDUwcHg7XHJcblx0Ym90dG9tOiAxOXB4O1xyXG59XHJcblxyXG4uZm9vdGVyLW1lbnUge1xyXG5cdHBhZGRpbmctdG9wOiA2MnB4O1xyXG59XHJcblxyXG4uZm9vdGVyLW1lbnUgbGk6bGFzdC1jaGlsZCBhIHtcclxuXHRtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5mb290ZXItc29jaWFsIHtcclxuXHRwYWRkaW5nLXRvcDogMjBweDtcclxuXHRwYWRkaW5nLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLmZvb3Rlci1zb2NpYWwgYTpmaXJzdC1jaGlsZCB7XHJcblx0bWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5jb3B5cmlnaHQge1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG5cdGNvbG9yOiAjOTE5MGE1O1xyXG5cdG9wYWNpdHk6IDAuMjA7XHJcbn1cclxuXHJcbi5jb3B5cmlnaHQgYSB7XHJcblx0Y29sb3I6ICM5MTkwYTU7XHJcbn1cclxuXHJcbi5jb3B5cmlnaHQgYTpob3ZlciB7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS1cclxuICBPdGhlciBQYWdlc1xyXG49PT09PT09PT09PT09PT09PT09PT1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5wYWdlLXRvcC1zZWN0aW9uIHtcclxuXHRoZWlnaHQ6IDM1NXB4O1xyXG5cdHBhZGRpbmctdG9wOiAyMTBweDtcclxufVxyXG5cclxuLnBhZ2UtaW5mbyB7XHJcblx0bWF4LXdpZHRoOiAxNDk2cHg7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdHBhZGRpbmctbGVmdDogNjBweDtcclxufVxyXG5cclxuLnBhZ2UtaW5mbyBoMiB7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0Zm9udC1zaXplOiA0OHB4O1xyXG59XHJcblxyXG4uc2l0ZS1icmVhZGNydW1iIGEsXHJcbi5zaXRlLWJyZWFkY3J1bWIgc3BhbiB7XHJcblx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdG1hcmdpbjogMCAxMHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5zaXRlLWJyZWFkY3J1bWIgYTpmaXJzdC1jaGlsZCB7XHJcblx0bWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5zaXRlLWJyZWFkY3J1bWIgc3BhbiB7XHJcblx0Y29sb3I6ICNjMzEzYjc7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tXHJcbiAgR2FtZXMgUGFnZVxyXG4tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4uZ2FtZXMtc2VjdGlvbiB7XHJcblx0cGFkZGluZzogMTA4cHggMDtcclxuXHQvKiBQZXJtYWxpbmsgLSB1c2UgdG8gZWRpdCBhbmQgc2hhcmUgdGhpcyBncmFkaWVudDogaHR0cDovL2NvbG9yemlsbGEuY29tL2dyYWRpZW50LWVkaXRvci8jNTAxNzU1KzAsMmQxODU0KzEwMCAqL1xyXG5cdGJhY2tncm91bmQ6ICM1MDE3NTU7XHJcblx0LyogT2xkIGJyb3dzZXJzICovXHJcblx0LyogRkYzLjYtMTUgKi9cclxuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgIzUwMTc1NSAwJSwgIzJkMTg1NCAxMDAlKTtcclxuXHQvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xyXG5cdGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0NWRlZywgIzUwMTc1NSAwJSwgIzJkMTg1NCAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM1MDE3NTUgMCUsICMyZDE4NTQgMTAwJSk7XHJcblx0LyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXHJcblx0ZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyM1MDE3NTUnLCBlbmRDb2xvcnN0cj0nIzJkMTg1NCcsIEdyYWRpZW50VHlwZT0xKTtcclxuXHQvKiBJRTYtOSBmYWxsYmFjayBvbiBob3Jpem9udGFsIGdyYWRpZW50ICovXHJcbn1cclxuXHJcbi5nYW1lLWZpbHRlciB7XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxuXHRtYXJnaW4tYm90dG9tOiA4MnB4O1xyXG59XHJcblxyXG4uZ2FtZS1maWx0ZXIgbGkge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR3aWR0aDogNDBweDtcclxuXHRoZWlnaHQ6IDM0cHg7XHJcblx0YmFja2dyb3VuZDogIzUwM2M2ZTtcclxuXHRib3JkZXItcmFkaXVzOiAxN3B4O1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcblx0LW8tdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5nYW1lLWZpbHRlciBsaTpob3ZlciB7XHJcblx0YmFja2dyb3VuZDogI2MzMTNiNztcclxufVxyXG5cclxuLmdhbWUtZmlsdGVyIGxpIGEge1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0cGFkZGluZy10b3A6IDdweDtcclxufVxyXG5cclxuLmdhbWUtaXRlbSB7XHJcblx0bWFyZ2luLWJvdHRvbTogODBweDtcclxufVxyXG5cclxuLmdhbWUtaXRlbSBoNSB7XHJcblx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdHBhZGRpbmctdG9wOiAzMHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5nYW1lLWl0ZW0gLnJlYWQtbW9yZSB7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRmb250LXN0eWxlOiBpdGFsaWM7XHJcblx0Y29sb3I6ICNiMDFiYTU7XHJcbn1cclxuXHJcbi5nYW1lLWl0ZW0gLnJlYWQtbW9yZSBpbWcge1xyXG5cdG1hcmdpbi1sZWZ0OiAxM3B4O1xyXG59XHJcblxyXG4uc2l0ZS1wYWdpbmF0aW9uIHtcclxuXHRkaXNwbGF5OiAtbXMtZmxleDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uc2l0ZS1wYWdpbmF0aW9uIGEge1xyXG5cdHdpZHRoOiAzOHB4O1xyXG5cdGhlaWdodDogNDRweDtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0Ym9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0ZGlzcGxheTogLW1zLWlubGluZS1mbGV4O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcclxuXHRkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XHJcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XHJcblx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuXHQtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0LXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG5cdC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG5cdC1vLXRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG59XHJcblxyXG4uc2l0ZS1wYWdpbmF0aW9uIGEuYWN0aXZlIHtcclxuXHR3aWR0aDogNDRweDtcclxuXHRtYXJnaW46IDAgMTBweDtcclxuXHRjb2xvcjogI2IwMWJhNTtcclxuXHRib3JkZXI6IDJweCBzb2xpZCAjYjAxYmE1O1xyXG59XHJcblxyXG4uc2l0ZS1wYWdpbmF0aW9uIGEuYWN0aXZlOmZpcnN0LWNoaWxkIHtcclxuXHRtYXJnaW4tbGVmdDogMDtcclxufVxyXG5cclxuLmdhbWUtcGFnZS1zaWRlYmVyIC53aWRnZXQtaXRlbSB7XHJcblx0bWFyZ2luLWJvdHRvbTogNTVweDtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgR2FtZSBzaW5nbGUgUGFnZVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmdhbWVzLXNpbmdsZS1wYWdlLFxyXG4ucmV2aWV3LXNlY3Rpb24sXHJcbi5ibG9nLXBhZ2UsXHJcbi5jb250YWN0LXBhZ2Uge1xyXG5cdHBhZGRpbmc6IDEwNHB4IDA7XHJcblx0LyogUGVybWFsaW5rIC0gdXNlIHRvIGVkaXQgYW5kIHNoYXJlIHRoaXMgZ3JhZGllbnQ6IGh0dHA6Ly9jb2xvcnppbGxhLmNvbS9ncmFkaWVudC1lZGl0b3IvIzUwMTc1NSswLDJkMTg1NCsxMDAgKi9cclxuXHRiYWNrZ3JvdW5kOiAjNTAxNzU1O1xyXG5cdC8qIE9sZCBicm93c2VycyAqL1xyXG5cdC8qIEZGMy42LTE1ICovXHJcblx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsICM1MDE3NTUgMCUsICMyZDE4NTQgMTAwJSk7XHJcblx0LyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cclxuXHRiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDVkZWcsICM1MDE3NTUgMCUsICMyZDE4NTQgMTAwJSk7XHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNTAxNzU1IDAlLCAjMmQxODU0IDEwMCUpO1xyXG5cdC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xyXG5cdGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjNTAxNzU1JywgZW5kQ29sb3JzdHI9JyMyZDE4NTQnLCBHcmFkaWVudFR5cGU9MSk7XHJcblx0LyogSUU2LTkgZmFsbGJhY2sgb24gaG9yaXpvbnRhbCBncmFkaWVudCAqL1xyXG59XHJcblxyXG4uZ2FtZS1zaW5nbGUtcHJldmlldyB7XHJcblx0bWFyZ2luLWJvdHRvbTogMTA4cHg7XHJcbn1cclxuXHJcbi5nYW1lLXNpbmdsZS1jb250ZW50IC5ncy1tZXRhIHtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0Y29sb3I6ICM2ODY0N2Q7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uZ2FtZS1zaW5nbGUtY29udGVudCAuZ3MtbWV0YSBhIHtcclxuXHRjb2xvcjogI2IwMWJhNTtcclxufVxyXG5cclxuLmdhbWUtc2luZ2xlLWNvbnRlbnQgLmdzLXRpdGxlIHtcclxuXHRmb250LXNpemU6IDYwcHg7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0bWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLmdhbWUtc2luZ2xlLWNvbnRlbnQgaDQge1xyXG5cdGNvbG9yOiAjYjAxYmE1O1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5nYW1lLXNpbmdsZS1jb250ZW50IHAge1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG5cdGNvbG9yOiAjNjg2NDdkO1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjg7XHJcblx0bWFyZ2luLWJvdHRvbTogNzBweDtcclxufVxyXG5cclxuLnJhdGluZy13aWRnZXQge1xyXG5cdGJhY2tncm91bmQ6ICMzNDE2NGI7XHJcblx0cGFkZGluZzogNTVweCAwIDMwcHg7XHJcbn1cclxuXHJcbi5yYXRpbmctd2lkZ2V0IHVsIHtcclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG5cdHBhZGRpbmc6IDAgMzhweDtcclxuXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4ucmF0aW5nLXdpZGdldCB1bCBsaSB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdGNvbG9yOiAjYjAxYmE1O1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnJhdGluZy13aWRnZXQgdWwgbGkgc3BhbiB7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdGNvbG9yOiAjNjg2NDdkO1xyXG59XHJcblxyXG4ucmF0aW5nLXdpZGdldCBoNSB7XHJcblx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0Zm9udC1zaXplOiAzNnB4O1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGZvbnQtd2VpZ2h0OiA5MDA7XHJcblx0cGFkZGluZy1yaWdodDogMzhweDtcclxufVxyXG5cclxuLnJhdGluZy13aWRnZXQgaDUgaSB7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG5cdGNvbG9yOiAjNjU2MDdiO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0bWFyZ2luLXJpZ2h0OiAxOHB4O1xyXG59XHJcblxyXG4ucmF0aW5nLXdpZGdldCBoNSBzcGFuIHtcclxuXHRjb2xvcjogI2IwMWJhNTtcclxufVxyXG5cclxuLnRlc3RpbW9uaWFscy13aWRnZXQge1xyXG5cdGJhY2tncm91bmQ6ICMzNDE2NGI7XHJcblx0cGFkZGluZzogNTVweCAwIDUwcHg7XHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbHMtd2lkZ2V0IC50ZXN0aW0tdGV4dCB7XHJcblx0cGFkZGluZzogMCAzMHB4O1xyXG59XHJcblxyXG4udGVzdGltb25pYWxzLXdpZGdldCAudGVzdGltLXRleHQgcCB7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0Y29sb3I6ICM2ODY0N2Q7XHJcblx0bGluZS1oZWlnaHQ6IDEuODtcclxuXHRtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4udGVzdGltb25pYWxzLXdpZGdldCAudGVzdGltLXRleHQgaDYge1xyXG5cdGNvbG9yOiAjNjg2NDdkO1xyXG5cdHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG5cclxuLnRlc3RpbW9uaWFscy13aWRnZXQgLnRlc3RpbS10ZXh0IGg2IHNwYW4ge1xyXG5cdGNvbG9yOiAjYjAxYmE1O1xyXG59XHJcblxyXG4uZ2FtZS1hdXRob3Itc2VjdGlvbiB7XHJcblx0YmFja2dyb3VuZDogIzNhMTg1NDtcclxuXHRwYWRkaW5nOiA1MXB4IDA7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmdhbWUtYXV0aG9yLXBpYyB7XHJcblx0d2lkdGg6IDExN3B4O1xyXG5cdGhlaWdodDogMTE3cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdG1hcmdpbi1yaWdodDogNTVweDtcclxufVxyXG5cclxuLmdhbWUtYXV0aG9yLWluZm8ge1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0cGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5nYW1lLWF1dGhvci1pbmZvIGg0IHtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uZ2FtZS1hdXRob3ItaW5mbyBoNCBzcGFuIHtcclxuXHRjb2xvcjogI2IwMWJhNTtcclxufVxyXG5cclxuLmdhbWUtYXV0aG9yLWluZm8gcCB7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0Y29sb3I6ICM2ODY0N2Q7XHJcblx0bGluZS1oZWlnaHQ6IDEuODtcclxuXHRtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tXHJcbiAgUmV2aWV3IHNlY3Rpb25cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5yZXZpZXctaXRlbSB7XHJcblx0bWFyZ2luLWJvdHRvbTogODdweDtcclxufVxyXG5cclxuLnJldmlldy1jb250ZW50IHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5yZXZpZXctY29udGVudCBoMyB7XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbn1cclxuXHJcbi5yZXZpZXctY29udGVudCBwIHtcclxuXHRtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4ucmV2aWV3LWNvbnRlbnQgLnJhdGluZyB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdHRvcDogMDtcclxufVxyXG5cclxuLnJldmlldy1jb250ZW50IC5yYXRpbmcgaDUge1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cdGZvbnQtc2l6ZTogMzZweDtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRmb250LXdlaWdodDogOTAwO1xyXG5cdHBhZGRpbmctcmlnaHQ6IDM4cHg7XHJcbn1cclxuXHJcbi5yZXZpZXctY29udGVudCAucmF0aW5nIGg1IGkge1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcclxuXHRjb2xvcjogIzY1NjA3YjtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdG1hcmdpbi1yaWdodDogMThweDtcclxufVxyXG5cclxuLnJldmlldy1jb250ZW50IC5yYXRpbmcgaDUgc3BhbiB7XHJcblx0Y29sb3I6ICNjMzEzYjc7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdEJsb2cgUGFnZVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmJsb2ctcGFnZSAuYmxvZy1maWx0ZXIge1xyXG5cdG1hcmdpbi1ib3R0b206IDc3cHg7XHJcbn1cclxuXHJcbi5iaWctYmxvZy1pdGVtIHtcclxuXHRtYXJnaW4tYm90dG9tOiA2NXB4O1xyXG59XHJcblxyXG4uYmlnLWJsb2ctaXRlbSAuYmxvZy10aHVtYm5haWwge1xyXG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5iaWctYmxvZy1pdGVtIC5ibG9nLWNvbnRlbnQgLnRvcC1tZXRhIHtcclxuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uYmlnLWJsb2ctaXRlbSAuYmxvZy1jb250ZW50IGgzIHtcclxuXHRtYXgtd2lkdGg6IDEwMCU7XHJcblx0bWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLmJpZy1ibG9nLWl0ZW0gLmJsb2ctY29udGVudCBwIHtcclxuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tXHJcbiAgQ29udGFjdCBwYWdlXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4ubWFwIGlmcmFtZSB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiA2MDBweDtcclxuXHRtYXJnaW4tYm90dG9tOiAxMDRweDtcclxufVxyXG5cclxuLmNvbnRhY3QtZm9ybSBpbnB1dCxcclxuLmNvbnRhY3QtZm9ybSB0ZXh0YXJlYSB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTQpO1xyXG5cdHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcblxyXG4uY29udGFjdC1mb3JtIHRleHRhcmVhIHtcclxuXHRsaW5lLWhlaWdodDogMS40O1xyXG5cdGhlaWdodDogMTU2cHg7XHJcblx0bWFyZ2luLWJvdHRvbTogNDhweDtcclxufVxyXG5cclxuLmNvbnRhY3QtZm9ybSAuc2l0ZS1idG4gaW1nIHtcclxuXHRsZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5jb250YWN0LXRleHQgaDMge1xyXG5cdG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5jb250YWN0LXRleHQgcCB7XHJcblx0bGluZS1oZWlnaHQ6IDEuOTtcclxuXHRjb2xvcjogIzY4NjQ3ZDtcclxuXHRtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uY29udC1pbmZvIHtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5jb250LWluZm8gLmNpLWljb24ge1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdHdpZHRoOiAzMnB4O1xyXG5cdG1hcmdpbi1yaWdodDogMjZweDtcclxufVxyXG5cclxuLmNvbnQtaW5mbyAuY2ktdGV4dCB7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLVxyXG4gIFJlc3BvbnNpdmVcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuXHQuY29udGFpbmVyIHtcclxuXHRcdG1heC13aWR0aDogMTE3NXB4O1xyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDE1MzBweCkge1xyXG5cdC5oZXJvLXNsaWRlciAub3dsLWRvdHMge1xyXG5cdFx0d2lkdGg6IDExNzBweDtcclxuXHRcdGxlZnQ6IGNhbGMoNTAlIC0gNTg1cHgpO1xyXG5cdH1cclxufVxyXG5cclxuLyogTWVkaXVtIHNjcmVlbiA6IDk5MnB4LiAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG5cdC5ibG9nLWl0ZW0gLmJsb2ctdGh1bWIge1xyXG5cdFx0d2lkdGg6IDI1MHB4O1xyXG5cdH1cclxuXHQuaGVyby1pdGVtIHAge1xyXG5cdFx0Zm9udC1zaXplOiAyMnB4O1xyXG5cdH1cclxuXHQuaGVyby1zbGlkZXIgLm93bC1uYXYgLm93bC1uZXh0IHtcclxuXHRcdHJpZ2h0OiAzMHB4O1xyXG5cdH1cclxuXHQuaGVyby1zbGlkZXIgLm93bC1kb3RzIHtcclxuXHRcdHdpZHRoOiA5MzBweDtcclxuXHRcdGxlZnQ6IGNhbGMoNTAlIC0gNDY1cHgpO1xyXG5cdH1cclxuXHQubmV3c2xldHRlci1mb3JtIHtcclxuXHRcdHBhZGRpbmctbGVmdDogMDtcclxuXHR9XHJcblx0Lm5ld3NsZXR0ZXItZm9ybSBpbnB1dCB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdG1hcmdpbi1yaWdodDogMDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDQwcHg7XHJcblx0fVxyXG5cdC5nYW1lLWZpbHRlciBsaSB7XHJcblx0XHR3aWR0aDogMzFweDtcclxuXHRcdGhlaWdodDogMzFweDtcclxuXHR9XHJcblx0LmdhbWUtZmlsdGVyIGxpIGEge1xyXG5cdFx0cGFkZGluZy10b3A6IDVweDtcclxuXHR9XHJcbn1cclxuXHJcbi8qIFRhYmxldCA6NzY4cHguICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuXHQuaGVhZGVyLWJhci13YXJwIHtcclxuXHRcdHBhZGRpbmc6IDM5cHggMTVweCAwO1xyXG5cdH1cclxuXHQubWFpbi1tZW51IGxpIGEge1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cdH1cclxuXHQuaGVyby1pdGVtIGgyIHtcclxuXHRcdGZvbnQtc2l6ZTogMTEwcHg7XHJcblx0fVxyXG5cdC5oZXJvLWl0ZW0gcCB7XHJcblx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRwYWRkaW5nOiAwIDMwcHg7XHJcblx0fVxyXG5cdC5oZXJvLXNsaWRlciAub3dsLW5hdiAub3dsLW5leHQge1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0fVxyXG5cdC5oZXJvLXNsaWRlciAub3dsLWRvdHMge1xyXG5cdFx0d2lkdGg6IDY5MHB4O1xyXG5cdFx0bGVmdDogY2FsYyg1MCUgLSAzNDVweCk7XHJcblx0fVxyXG5cdC5ibG9nLWl0ZW0gLmJsb2ctdGh1bWIge1xyXG5cdFx0ZmxvYXQ6IG5vbmU7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDA7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblx0fVxyXG5cdC5mZWF0dXJlZC1iZyB7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuXHQuZmVhdHVyZWQtYm94IHtcclxuXHRcdGZsb2F0OiBub25lO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0fVxyXG5cdC5uZXdzbGV0dGVyLWZvcm0gaW5wdXQge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDA7XHJcblx0XHRtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG5cdH1cclxuXHQuZm9vdGVyLXJpZ2h0LXBpYyB7XHJcblx0XHRyaWdodDogMTVweDtcclxuXHR9XHJcblx0LmZvb3Rlci1sZWZ0LXBpYyB7XHJcblx0XHRsZWZ0OiAtNDRweDtcclxuXHR9XHJcblx0LmdhbWUtZmlsdGVyIHtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblx0LmdhbWUtZmlsdGVyIGxpIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDVweDtcclxuXHR9XHJcblx0LmdhbWUtc2luZ2xlLWNvbnRlbnQgLmdzLXRpdGxlIHtcclxuXHRcdGZvbnQtc2l6ZTogNDBweDtcclxuXHR9XHJcblx0LnJldmlldy1waWMgaW1nIHtcclxuXHRcdG1pbi13aWR0aDogMTAwJTtcclxuXHRcdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblx0fVxyXG5cdC5jb250YWN0LXRleHQge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogNTBweDtcclxuXHR9XHJcbn1cclxuXHJcbi8qIExhcmdlIE1vYmlsZSA6NDgwcHguICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcblx0LmhlYWRlci1iYXItd2FycCB7XHJcblx0XHRwYWRkaW5nOiAyNXB4IDIwcHggMTBweDtcclxuXHR9XHJcblx0Lm1haW4tbWVudS5wcmltYXJ5LW1lbnUge1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblx0LnNsaWNrbmF2X21lbnUge1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRiYWNrZ3JvdW5kOiAjMDgxNjI0O1xyXG5cdH1cclxuXHQuc2xpY2tuYXZfYnRuIHtcclxuXHRcdG1hcmdpbi1yaWdodDogMTBweDtcclxuXHRcdGJhY2tncm91bmQ6ICMzYTNhM2E7XHJcblx0fVxyXG5cdC5zbGlja25hdl9uYXYgYTpob3ZlcixcclxuXHQuc2xpY2tuYXZfbmF2IC5zbGlja25hdl9yb3c6aG92ZXIge1xyXG5cdFx0YmFja2dyb3VuZDogIzI1Mzk0YztcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdH1cclxuXHQuaGVyby1pdGVtIGgyIHtcclxuXHRcdGZvbnQtc2l6ZTogNzBweDtcclxuXHR9XHJcblx0Lmhlcm8taXRlbSBwIHtcclxuXHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHR9XHJcblx0LmZvb3Rlci1yaWdodC1waWMsXHJcblx0LmZvb3Rlci1sZWZ0LXBpYyB7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuXHQuaGVyby1zbGlkZXIgLm93bC1uYXYgLm93bC1uZXh0IHtcclxuXHRcdHRvcDogYXV0bztcclxuXHRcdGJvdHRvbTogMzNweDtcclxuXHRcdHJpZ2h0OiAxNXB4O1xyXG5cdFx0ei1pbmRleDogOTk7XHJcblx0fVxyXG5cdC5oZXJvLXNsaWRlciAub3dsLWRvdHMge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAxNXB4O1xyXG5cdH1cclxuXHQuaW50cm8tdGV4dC1ib3gge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogNDBweDtcclxuXHR9XHJcblx0LmJsb2ctaXRlbSAuYmxvZy10aHVtYiB7XHJcblx0XHRmbG9hdDogbm9uZTtcclxuXHRcdG1hcmdpbi1yaWdodDogMDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHR9XHJcblx0LnNpZGViYXIge1xyXG5cdFx0cGFkZGluZy10b3A6IDYwcHg7XHJcblx0fVxyXG5cdC5mZWF0dXJlZC1iZyB7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuXHQuZmVhdHVyZWQtYm94IHtcclxuXHRcdGZsb2F0OiBub25lO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0fVxyXG5cdC5mZWF0dXJlZC1ib3ggLnRleHQtYm94IGgzIHtcclxuXHRcdGZvbnQtc2l6ZTogNDVweDtcclxuXHR9XHJcblx0Lm5ld3NsZXR0ZXItZm9ybSB7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDA7XHJcblx0fVxyXG5cdC5uZXdzbGV0dGVyLWZvcm0gaW5wdXQge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDA7XHJcblx0XHRtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG5cdH1cclxuXHQudmlkZW8tdGV4dDphZnRlciB7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdH1cclxuXHQucGFnZS10b3Atc2VjdGlvbiB7XHJcblx0XHRoZWlnaHQ6IDQwMHB4O1xyXG5cdFx0cGFkZGluZy10b3A6IDI1MHB4O1xyXG5cdH1cclxuXHQuZ2FtZS1maWx0ZXIge1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHQuZ2FtZS1maWx0ZXIgbGkge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cdH1cclxuXHQuZ2FtZS1zaW5nbGUtY29udGVudCAuZ3MtdGl0bGUge1xyXG5cdFx0Zm9udC1zaXplOiA0MHB4O1xyXG5cdH1cclxuXHQucmV2aWV3LXBpYyBpbWcge1xyXG5cdFx0bWluLXdpZHRoOiAxMDAlO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHR9XHJcblx0LmNvbnRhY3QtdGV4dCB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG5cdH1cclxuXHQucmV2aWV3LWNvbnRlbnQgLnJhdGluZyB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cdH1cclxuXHQucmV2aWV3LWNvbnRlbnQgLnJhdGluZyBoNSB7XHJcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdFx0cGFkZGluZy1yaWdodDogMDtcclxuXHR9XHJcbn1cclxuXHJcbi8qIFNtYWxsIE1vYmlsZSA6MzIwcHguICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3OXB4KSB7XHJcblx0Lmhlcm8taXRlbSBoMiB7XHJcblx0XHRmb250LXNpemU6IDU1cHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cdH1cclxuXHQuaGVyby1pdGVtIHAge1xyXG5cdFx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdH1cclxuXHQudmlkZW8tdGV4dCBoMiB7XHJcblx0XHRmb250LXNpemU6IDMwcHg7XHJcblx0fVxyXG5cdC52aWRlby1wbGF5LWJ0biB7XHJcblx0XHR0b3A6IGNhbGMoMzAlIC0gNjFweCk7XHJcblx0fVxyXG5cdC5mZWF0dXJlZC1ib3gge1xyXG5cdFx0cGFkZGluZzogMTAwcHggMTVweDtcclxuXHR9XHJcblx0LmZlYXR1cmVkLWJveCAudGV4dC1ib3ggaDMsXHJcblx0Lm5ld3NsZXR0ZXItc2VjdGlvbiBoMiB7XHJcblx0XHRmb250LXNpemU6IDM1cHg7XHJcblx0fVxyXG5cdC5tYWluLW1lbnUgbGkgYSB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcblx0fVxyXG5cdC5nYW1lLWF1dGhvci1waWMge1xyXG5cdFx0ZmxvYXQ6IG5vbmU7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cdH1cclxufVxyXG4udGl0dWxvXHJcbntcclxuXHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuXHRmb250LXNpemU6IDQwcHg7XHJcblx0Zm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG5cdGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcblx0cGFkZGluZy1ib3R0b206IDQwcHg7XHJcblx0cGFkZGluZy1yaWdodDogMjBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/componentes/home/home.component.html":
/*!******************************************************!*\
  !*** ./src/app/componentes/home/home.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"zxx\">\n<head>\n\t<title>EndGam - Gaming Magazine Template</title>\n\t<meta charset=\"UTF-8\">\n\t<meta name=\"description\" content=\"EndGam Gaming Magazine Template\">\n\t<meta name=\"keywords\" content=\"endGam,gGaming, magazine, html\">\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\t<!-- Favicon -->\n\t<link href=\"img/favicon.ico\" rel=\"shortcut icon\"/>\n\n\t<!-- Google Font -->\n\t<link href=\"https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i,900,900i\" rel=\"stylesheet\">\n\n\n\t<!-- Stylesheets -->\n\t\n\n\n\n\n\t<!--[if lt IE 9]>\n\t\t  <script src=\"https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js\"></script>\n\t  <script src=\"https://oss.maxcdn.com/respond/1.4.2/respond.min.js\"></script>\n\t<![endif]-->\n\n</head>\n<body>\n\t\n\n\t<!-- Header section -->\n\t<header class=\"header-section\">\n\t\t<div class=\"header-warp\">\n\t\t\t<div class=\"header-bar-warp d-flex\">\n\t\t\t\t<div>\n\t\t\t\t\t<h2 class=\"titulo\">\n\t\t\t\t Mi Sala de Juegos</h2>\n\t\t\t</div>\n\t\t\t\t<!-- site logo -->\t\t\t\t\n\t\t\t\t<nav class=\"top-nav-area w-100\">\n\t\t\t\t\t<div class=\"user-panel\">\n\t\t\t\t\t\t<a href=\"\">Unirse</a> / <a href=\"\">Registrarse</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- Menu -->\n\t\t\t\t\t<ul class=\"main-menu primary-menu\">\n\t\t\t\t\t\t<li><a href=\"home.html\">Inicio</a></li>\n\t\t\t\t\t\t<li><a href=\"games.html\">Juegos</a>\n\t\t\t\t\t\t\t<ul class=\"sub-menu\">\n\t\t\t\t\t\t\t\t<li><a href=\"game-single.html\">Listado de Resultados</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li><a href=\"games.html\">Sobre Facundo Islas</a>\n\t\t\t\t\t\t\t<ul class=\"sub-menu\">\n\t\t\t\t\t\t\t\t<li><a href=\"game-single.html\">En Github</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"game-single.html\">Sobre Mi</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t</ul>\n\t\t\t\t</nav>\n\t\t\t</div>\n\t\t</div>\n\t</header>\n\t<!-- Header section end -->\n\n\t</body>\n</html>\n"

/***/ }),

/***/ "./src/app/componentes/home/home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/componentes/home/home.component.ts ***!
  \****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/componentes/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/componentes/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/componentes/input-jugadores/input-jugadores.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/componentes/input-jugadores/input-jugadores.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2lucHV0LWp1Z2Fkb3Jlcy9pbnB1dC1qdWdhZG9yZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/componentes/input-jugadores/input-jugadores.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/componentes/input-jugadores/input-jugadores.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  input-jugadores works!\n</p>\n"

/***/ }),

/***/ "./src/app/componentes/input-jugadores/input-jugadores.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/componentes/input-jugadores/input-jugadores.component.ts ***!
  \**************************************************************************/
/*! exports provided: InputJugadoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputJugadoresComponent", function() { return InputJugadoresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputJugadoresComponent = /** @class */ (function () {
    function InputJugadoresComponent() {
    }
    InputJugadoresComponent.prototype.ngOnInit = function () {
    };
    InputJugadoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input-jugadores',
            template: __webpack_require__(/*! ./input-jugadores.component.html */ "./src/app/componentes/input-jugadores/input-jugadores.component.html"),
            styles: [__webpack_require__(/*! ./input-jugadores.component.css */ "./src/app/componentes/input-jugadores/input-jugadores.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InputJugadoresComponent);
    return InputJugadoresComponent;
}());



/***/ }),

/***/ "./src/app/componentes/juegos/juegos.component.css":
/*!*********************************************************!*\
  !*** ./src/app/componentes/juegos/juegos.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2p1ZWdvcy9qdWVnb3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/componentes/juegos/juegos.component.html":
/*!**********************************************************!*\
  !*** ./src/app/componentes/juegos/juegos.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-menu></app-menu>\n<div style=\"text-align:center\">\n  <h1>\n   Sala de Juegos\n  </h1>\n </div>\n <router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/componentes/juegos/juegos.component.ts":
/*!********************************************************!*\
  !*** ./src/app/componentes/juegos/juegos.component.ts ***!
  \********************************************************/
/*! exports provided: JuegosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegosComponent", function() { return JuegosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JuegosComponent = /** @class */ (function () {
    function JuegosComponent() {
    }
    JuegosComponent.prototype.ngOnInit = function () {
    };
    JuegosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-juegos',
            template: __webpack_require__(/*! ./juegos.component.html */ "./src/app/componentes/juegos/juegos.component.html"),
            styles: [__webpack_require__(/*! ./juegos.component.css */ "./src/app/componentes/juegos/juegos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JuegosComponent);
    return JuegosComponent;
}());



/***/ }),

/***/ "./src/app/componentes/jugadores-listado/jugadores-listado.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/componentes/jugadores-listado/jugadores-listado.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2p1Z2Fkb3Jlcy1saXN0YWRvL2p1Z2Fkb3Jlcy1saXN0YWRvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/componentes/jugadores-listado/jugadores-listado.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/componentes/jugadores-listado/jugadores-listado.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pills nav-justified\">\n  <li class=\"active\"><a routerLink=\"/Principal\">Ir a inicio</a></li>\n  <li><a (click)=\"TraerTodos()\">Todos los jugadores</a></li>\n  <li><a (click)=\"TraerGanadores()\">Los ganadores</a></li>\n  <li><a (click)=\"TraerPerdedores()\">Los perdedores</a></li>\n</ul>\n\n\n\n<table class=\"table table-condensed\">\n  <thead>\n    <tr>\n      <th>usuario</th>\n      <th>cuit</th>\n      <th>sexo</th>\n      <th>gano</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let jugador of listado\" >\n      <td>{{jugador.usuario}} </td>\n      <td>{{jugador.cuit}} </td> \n      <td>{{jugador.sexo | sexo| uppercase}} </td> \n      <td>{{jugador.gano}} </td> \n      \n    </tr>\n   \n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/componentes/jugadores-listado/jugadores-listado.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/componentes/jugadores-listado/jugadores-listado.component.ts ***!
  \******************************************************************************/
/*! exports provided: JugadoresListadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JugadoresListadoComponent", function() { return JugadoresListadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/jugadores.service */ "./src/app/servicios/jugadores.service.ts");



var JugadoresListadoComponent = /** @class */ (function () {
    function JugadoresListadoComponent(serviceJugadores) {
        this.miJugadoresServicio = serviceJugadores;
    }
    JugadoresListadoComponent.prototype.ngOnInit = function () {
    };
    JugadoresListadoComponent.prototype.TraerTodos = function () {
        var _this = this;
        //alert("totos");
        this.miJugadoresServicio.traertodos('jugadores/', 'todos').then(function (data) {
            //console.info("jugadores listado",(data));
            _this.listado = data;
        });
    };
    JugadoresListadoComponent.prototype.TraerGanadores = function () {
        var _this = this;
        this.miJugadoresServicio.traertodos('jugadores/', 'ganadores').then(function (data) {
            //console.info("jugadores listado",(data));
            _this.listado = data;
        });
    };
    JugadoresListadoComponent.prototype.TraerPerdedores = function () {
        var _this = this;
        this.miJugadoresServicio.traertodos('jugadores/', 'perdedores').then(function (data) {
            //console.info("jugadores listado",(data));
            _this.listado = data;
        });
    };
    JugadoresListadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jugadores-listado',
            template: __webpack_require__(/*! ./jugadores-listado.component.html */ "./src/app/componentes/jugadores-listado/jugadores-listado.component.html"),
            styles: [__webpack_require__(/*! ./jugadores-listado.component.css */ "./src/app/componentes/jugadores-listado/jugadores-listado.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_2__["JugadoresService"]])
    ], JugadoresListadoComponent);
    return JugadoresListadoComponent;
}());



/***/ }),

/***/ "./src/app/componentes/listado-de-paises/listado-de-paises.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/componentes/listado-de-paises/listado-de-paises.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2xpc3RhZG8tZGUtcGFpc2VzL2xpc3RhZG8tZGUtcGFpc2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/componentes/listado-de-paises/listado-de-paises.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/componentes/listado-de-paises/listado-de-paises.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n Listado de paises\n</h1>\n<table class=\"table table-condensed\">\n  <thead>\n    <tr>\n      <th>Pais</th>\n      <th>Región</th>\n      <th>Nombre local</th>\n      <th>Sub Región</th>\n      <th>Población</th>\n      <th>Bandera</th>\n      <th>Capital</th>\n      <th>GPS</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let pais of listadoDePaises\">\n      <td>{{pais.name}} </td>\n      <td>{{pais.region}} </td> \n      <td>{{pais.nativeName}} </td> \n      <td>{{pais.subregion}} </td>       \n      <td>{{pais.population}} </td> \n      <td><img src='{{pais.flag}}' width=\"50px\"/> </td> \n      <td>{{pais.capital}} </td> \n      <td>{{pais.borders}} </td> \n      <td>{{pais.latlng}} </td> \n    </tr>\n   \n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/componentes/listado-de-paises/listado-de-paises.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/componentes/listado-de-paises/listado-de-paises.component.ts ***!
  \******************************************************************************/
/*! exports provided: ListadoDePaisesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoDePaisesComponent", function() { return ListadoDePaisesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_paises_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/paises.service */ "./src/app/servicios/paises.service.ts");



var ListadoDePaisesComponent = /** @class */ (function () {
    function ListadoDePaisesComponent(servicioPaises) {
        this.miServicioDePaises = servicioPaises;
    }
    ListadoDePaisesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.miServicioDePaises.listar()
            .then(function (datos) {
            console.info("listado de paises", datos);
            _this.listadoDePaises = datos;
        });
    };
    ListadoDePaisesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listado-de-paises',
            template: __webpack_require__(/*! ./listado-de-paises.component.html */ "./src/app/componentes/listado-de-paises/listado-de-paises.component.html"),
            styles: [__webpack_require__(/*! ./listado-de-paises.component.css */ "./src/app/componentes/listado-de-paises/listado-de-paises.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_paises_service__WEBPACK_IMPORTED_MODULE_2__["PaisesService"]])
    ], ListadoDePaisesComponent);
    return ListadoDePaisesComponent;
}());



/***/ }),

/***/ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/componentes/listado-de-resultados/listado-de-resultados.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2xpc3RhZG8tZGUtcmVzdWx0YWRvcy9saXN0YWRvLWRlLXJlc3VsdGFkb3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/componentes/listado-de-resultados/listado-de-resultados.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--div *ngFor=\"let juego of listado\">\n\n<p> {{juego.nombre}} </p>\n<p> {{juego.jugador}} </p>\n\n</div-->\n\n<table class=\"table table-condensed\">\n    <thead>\n      <tr>\n        <th>Juego</th>\n        <th>Jugador</th>\n        <th>Resultado</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let juego of listado\">\n        <td>{{juego.nombre}} </td>\n        <td>{{juego.jugador}} </td> \n        <td *ngIf=\"juego.gano\">Gano </td>   \n        <td *ngIf=\"!juego.gano\">Perdio</td>     \n      </tr>\n     \n    </tbody>\n  </table>"

/***/ }),

/***/ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ListadoDeResultadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoDeResultadosComponent", function() { return ListadoDeResultadosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListadoDeResultadosComponent = /** @class */ (function () {
    function ListadoDeResultadosComponent() {
    }
    ListadoDeResultadosComponent.prototype.ngOnInit = function () {
    };
    ListadoDeResultadosComponent.prototype.ver = function () {
        console.info(this.listado);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ListadoDeResultadosComponent.prototype, "listado", void 0);
    ListadoDeResultadosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listado-de-resultados',
            template: __webpack_require__(/*! ./listado-de-resultados.component.html */ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.html"),
            styles: [__webpack_require__(/*! ./listado-de-resultados.component.css */ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListadoDeResultadosComponent);
    return ListadoDeResultadosComponent;
}());



/***/ }),

/***/ "./src/app/componentes/listado/listado.component.css":
/*!***********************************************************!*\
  !*** ./src/app/componentes/listado/listado.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Style all font awesome icons */\n.fa {\n    padding: 20px;\n    font-size: 30px;\n    width: 50px;\n    text-align: center;\n    text-decoration: none;\n    border-radius: 50%;\n}\n/* Add a hover effect if you want */\n.fa:hover {\n    opacity: 0.7;\n}\n/* Set a specific color for each brand */\n/* Facebook */\n.fa-facebook {\n    background: #3B5998;\n    color: white;\n}\n/* Twitter */\n.fa-twitter {\n    background: #55ACEE;\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbGlzdGFkby9saXN0YWRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUNBQWlDO0FBQ2pDO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7QUFFQSxtQ0FBbUM7QUFDbkM7SUFDSSxZQUFZO0FBQ2hCO0FBRUEsd0NBQXdDO0FBRXhDLGFBQWE7QUFDYjtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCO0FBRUEsWUFBWTtBQUNaO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9saXN0YWRvL2xpc3RhZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFN0eWxlIGFsbCBmb250IGF3ZXNvbWUgaWNvbnMgKi9cbi5mYSB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIEFkZCBhIGhvdmVyIGVmZmVjdCBpZiB5b3Ugd2FudCAqL1xuLmZhOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG5cbi8qIFNldCBhIHNwZWNpZmljIGNvbG9yIGZvciBlYWNoIGJyYW5kICovXG5cbi8qIEZhY2Vib29rICovXG4uZmEtZmFjZWJvb2sge1xuICAgIGJhY2tncm91bmQ6ICMzQjU5OTg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiBUd2l0dGVyICovXG4uZmEtdHdpdHRlciB7XG4gICAgYmFja2dyb3VuZDogIzU1QUNFRTtcbiAgICBjb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/componentes/listado/listado.component.html":
/*!************************************************************!*\
  !*** ./src/app/componentes/listado/listado.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--input type=\"button\" (click)=\"llamaService()\" class=\"btn btn-info\" value=\"Pulsame\" > \n<input type=\"button\" (click)=\"llamaServicePromesa()\" class=\"btn btn-info\" value=\"Pulsame Promesa\" --> \n\n<!-- Centered Pills -->\n<ul class=\"nav nav-pills nav-justified\">\n    <li class=\"active\"><a routerLink=\"/Principal\">Sala de Juegos</a></li>\n    <li><a (click)=\"llamaService()\">Servicio</a></li>\n    <li><a (click)=\"llamaServicePromesa()\">Serv Promesa</a></li>\n    <li><a (click)=\"llamaServicePromesa()\">Serv observable</a></li>\n  </ul>\n  \n<app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>\n\n"

/***/ }),

/***/ "./src/app/componentes/listado/listado.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/componentes/listado/listado.component.ts ***!
  \**********************************************************/
/*! exports provided: ListadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoComponent", function() { return ListadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/juego-service.service */ "./src/app/servicios/juego-service.service.ts");



var ListadoComponent = /** @class */ (function () {
    function ListadoComponent(servicioJuego) {
        this.miServicioJuego = servicioJuego;
    }
    ListadoComponent.prototype.ngOnInit = function () {
    };
    ListadoComponent.prototype.llamaService = function () {
        console.log("llamaService");
        this.listadoParaCompartir = this.miServicioJuego.listar();
    };
    ListadoComponent.prototype.llamaServicePromesa = function () {
        var _this = this;
        console.log("llamaServicePromesa");
        this.miServicioJuego.listarPromesa().then(function (listado) {
            _this.listadoParaCompartir = listado;
        });
    };
    ListadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listado',
            template: __webpack_require__(/*! ./listado.component.html */ "./src/app/componentes/listado/listado.component.html"),
            styles: [__webpack_require__(/*! ./listado.component.css */ "./src/app/componentes/listado/listado.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_2__["JuegoServiceService"]])
    ], ListadoComponent);
    return ListadoComponent;
}());



/***/ }),

/***/ "./src/app/componentes/listados/listados.component.css":
/*!*************************************************************!*\
  !*** ./src/app/componentes/listados/listados.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2xpc3RhZG9zL2xpc3RhZG9zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/componentes/listados/listados.component.html":
/*!**************************************************************!*\
  !*** ./src/app/componentes/listados/listados.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  listados works!\n</p>\n"

/***/ }),

/***/ "./src/app/componentes/listados/listados.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/listados/listados.component.ts ***!
  \************************************************************/
/*! exports provided: ListadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadosComponent", function() { return ListadosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListadosComponent = /** @class */ (function () {
    function ListadosComponent() {
    }
    ListadosComponent.prototype.ngOnInit = function () {
    };
    ListadosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listados',
            template: __webpack_require__(/*! ./listados.component.html */ "./src/app/componentes/listados/listados.component.html"),
            styles: [__webpack_require__(/*! ./listados.component.css */ "./src/app/componentes/listados/listados.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListadosComponent);
    return ListadosComponent;
}());



/***/ }),

/***/ "./src/app/componentes/login/login.component.css":
/*!*******************************************************!*\
  !*** ./src/app/componentes/login/login.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nform {\n    border: 10px solid #f1f1f1;\n    padding: 10px;\n    background:gray;\n}\n\ninput[type=text], input[type=password] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n}\n\nbutton {\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n}\n\nbutton:hover {\n    opacity: 0.8;\n}\n\n.cancelbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #f44336;\n}\n\n.aceptbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #3664F4;\n}\n\n.imgcontainer {\n    text-align: center;\n    margin: 24px 0 12px 0;\n}\n\nimg.avatar {\n    width: 40%;\n    border-radius: 50%;\n}\n\n.container {\n    padding: 16px;\n}\n\nspan.psw {\n    float: right;\n    padding-top: 16px;\n}\n\n/* Change styles for span and cancel button on extra small screens */\n\n@media screen and (max-width: 300px) {\n    span.psw {\n       display: block;\n       float: none;\n    }\n    .cancelbtn {\n       width: 100%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQSxvRUFBb0U7O0FBQ3BFO0lBQ0k7T0FDRyxjQUFjO09BQ2QsV0FBVztJQUNkO0lBQ0E7T0FDRyxXQUFXO0lBQ2Q7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmZvcm0ge1xuICAgIGJvcmRlcjogMTBweCBzb2xpZCAjZjFmMWYxO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDpncmF5O1xufVxuXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgIG1hcmdpbjogOHB4IDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5idXR0b246aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuODtcbn1cblxuLmNhbmNlbGJ0biB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgcGFkZGluZzogMTBweCAxOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG59XG4uYWNlcHRidG4ge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHggMThweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY2NEY0O1xufVxuLmltZ2NvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMjRweCAwIDEycHggMDtcbn1cblxuaW1nLmF2YXRhciB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG59XG5cbnNwYW4ucHN3IHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcGFkZGluZy10b3A6IDE2cHg7XG59XG5cbi8qIENoYW5nZSBzdHlsZXMgZm9yIHNwYW4gYW5kIGNhbmNlbCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcbiAgICBzcGFuLnBzdyB7XG4gICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgfVxuICAgIC5jYW5jZWxidG4ge1xuICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/componentes/login/login.component.html":
/*!********************************************************!*\
  !*** ./src/app/componentes/login/login.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--div style=\"margin: 20% auto; width: 30%;\">\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      Usuario\n    </div>\n    <div class=\"col-lg-6\">\n      <input type=\"text\"  [(ngModel)]=\"usuario\">\n    </div>\n  </div>\n  <div class=\"row\" style=\"margin-top: 5px\">\n    <div class=\"col-lg-6\">\n      Clave\n    </div>\n    <div class=\"col-lg-6\">\n      <input type=\"password\" [(ngModel)]=\"clave\">\n    </div>\n  </div>\n  <div class=\"row\" style=\"text-align: center; margin-top: 10px\">\n    <div class=\"col-lg-12\">\n      <button (click)=\"Entrar()\" class=\"btn btn-info btn-lg\" >Entrar</button>\n    </div>\n  </div>\n</div-->\n <div class=\"container\" >\n  <div class=\"jumbotron\" style=\"padding:50px;\">\n    <form action=\"return true;\">\n      <div class=\"imgcontainer\">\n        <img src=\"./assets/imagenes/login.png\" alt=\"Avatar\" class=\"avatar\" max-width=\"104\" >\n      </div>\n\n      <div class=\"container\">\n        <label><b>Usuario</b></label>\n        <input type=\"text\" placeholder=\"Usuario\"  [(ngModel)]=\"usuario\"  name=\"uname\" required>\n\n        <label><b>Clave</b></label>\n        <input type=\"password\" placeholder=\"Clave\"  [(ngModel)]=\"clave\" name=\"psw\" required>\n            \n        <button *ngIf=\"logeando\"  (click)=\"MoverBarraDeProgreso()\" >Ingresar</button>\n       \n        <div *ngIf=\"!logeando\" class=\"progress\">\n            <div class=\"progress-bar progress-bar-info progress-bar-striped active\" [class]=\"clase\" role=\"progressbar\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width]=\"ProgresoDeAncho\" >\n              {{progresoMensaje}} - {{progreso}}%\n            </div>\n        </div>\n       \n        <input type=\"checkbox\" checked=\"checked\"> Recordar mis datos\n      </div>\n\n      <div class=\"container\" style=\"background-color:#f1f1f1\">\n        <button type=\"button\" class=\"cancelbtn\">Cancelar</button>\n        <button type=\"button\" class=\"aceptbtn\" routerLink=\"/Registro\" >Registrarse</button>\n        <span class=\"psw\">Te olvidaste <a href=\"#\">la clave?</a></span>\n      </div>\n     \n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/componentes/login/login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/componentes/login/login.component.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_observable_TimerObservable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/observable/TimerObservable */ "./node_modules/rxjs-compat/_esm5/observable/TimerObservable.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router) {
        this.route = route;
        this.router = router;
        this.usuario = '';
        this.clave = '';
        this.progresoMensaje = "esperando...";
        this.logeando = true;
        this.clase = "progress-bar progress-bar-info progress-bar-striped ";
        this.progreso = 0;
        this.ProgresoDeAncho = "0%";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.Entrar = function () {
        if (this.usuario === 'admin' && this.clave === 'admin') {
            this.router.navigate(['/Principal']);
        }
    };
    LoginComponent.prototype.MoverBarraDeProgreso = function () {
        var _this = this;
        this.logeando = false;
        this.clase = "progress-bar progress-bar-danger progress-bar-striped active";
        this.progresoMensaje = "NSA spy...";
        var timer = rxjs_observable_TimerObservable__WEBPACK_IMPORTED_MODULE_3__["TimerObservable"].create(200, 50);
        this.subscription = timer.subscribe(function (t) {
            console.log("inicio");
            _this.progreso = _this.progreso + 1;
            _this.ProgresoDeAncho = _this.progreso + 20 + "%";
            switch (_this.progreso) {
                case 15:
                    _this.clase = "progress-bar progress-bar-warning progress-bar-striped active";
                    _this.progresoMensaje = "Verificando ADN...";
                    break;
                case 30:
                    _this.clase = "progress-bar progress-bar-Info progress-bar-striped active";
                    _this.progresoMensaje = "Adjustando encriptación..";
                    break;
                case 60:
                    _this.clase = "progress-bar progress-bar-success progress-bar-striped active";
                    _this.progresoMensaje = "Recompilando Info del dispositivo..";
                    break;
                case 75:
                    _this.clase = "progress-bar progress-bar-success progress-bar-striped active";
                    _this.progresoMensaje = "Recompilando claves facebook, gmail, chats..";
                    break;
                case 85:
                    _this.clase = "progress-bar progress-bar-success progress-bar-striped active";
                    _this.progresoMensaje = "Instalando KeyLogger..";
                    break;
                case 100:
                    console.log("final");
                    _this.subscription.unsubscribe();
                    _this.Entrar();
                    break;
            }
        });
        //this.logeando=true;
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/componentes/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/componentes/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/componentes/mapa-de-google/mapa-de-google.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/componentes/mapa-de-google/mapa-de-google.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n    height: 300px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbWFwYS1kZS1nb29nbGUvbWFwYS1kZS1nb29nbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7RUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL21hcGEtZGUtZ29vZ2xlL21hcGEtZGUtZ29vZ2xlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/componentes/mapa-de-google/mapa-de-google.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/componentes/mapa-de-google/mapa-de-google.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{ title }}</h1>\n\n<!-- this creates a google map on the page with the given lat/lng from -->\n<!-- the component as the initial center of the map: -->\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\"  (mapClick)=\"mapClicked($event)\">\n   \n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n</agm-map>\n<input type =\"text\" [(ngModel)]=\"lat\" />\n<input type=\"text\" [(ngModel)]=\"lng\"/> "

/***/ }),

/***/ "./src/app/componentes/mapa-de-google/mapa-de-google.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/componentes/mapa-de-google/mapa-de-google.component.ts ***!
  \************************************************************************/
/*! exports provided: MapaDeGoogleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaDeGoogleComponent", function() { return MapaDeGoogleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MapaDeGoogleComponent = /** @class */ (function () {
    function MapaDeGoogleComponent() {
        this.title = 'El Primer mapa';
        this.lat = 33.678418;
        this.lng = 5.809007;
        // google maps zoom level
        this.zoom = 8;
    }
    MapaDeGoogleComponent.prototype.ngOnInit = function () {
    };
    MapaDeGoogleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mapa-de-google',
            template: __webpack_require__(/*! ./mapa-de-google.component.html */ "./src/app/componentes/mapa-de-google/mapa-de-google.component.html"),
            styles: [__webpack_require__(/*! ./mapa-de-google.component.css */ "./src/app/componentes/mapa-de-google/mapa-de-google.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MapaDeGoogleComponent);
    return MapaDeGoogleComponent;
}());



/***/ }),

/***/ "./src/app/componentes/menu-card/menu-card.component.css":
/*!***************************************************************!*\
  !*** ./src/app/componentes/menu-card/menu-card.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n    transition: 0.3s;\n    border-radius: 5px; /* 5px rounded corners */\n    max-width: 300px;\n   height: 100%;\n    margin: 10px;\n    padding-bottom: 10px;\n    float: left;\n  background-color: #DEF3A6;\n    text-align: center;\n}\n\n/* Add rounded corners to the top left and the top right corner of the image */\n\nimg {\n    border-radius: 5px 5px 0 0;\n    width: 200px;\n    height: 200px;\n}\n\n/* Add some padding inside the card container */\n\n.container {\n    padding: 2px 16px;\n}\n\n.button{\n    margin-left: 1px;\n    display: inline-block;\n    width: 90%;\n    padding: 5px 15px;\n    font-size: 24px;\n    text-align: center;\n    cursor: pointer;\n    outline: none;\n    color: #fff;\n    background-color: #4CAF50;\n    border: none;\n    border-radius: 15px;\n    box-shadow: 0 9px #999;\n\n    border: none;\n    outline: 0;\n \n    padding: 8px;\n    color: white;\n   /* background-color: #000;*/\n    text-align: center;\n    cursor: pointer;\n    width: 100%;\n  }\n\n.button:hover {background-color: #3e8e41}\n\n.button:active {\n    background-color: #3e8e41;\n    box-shadow: 0 5px #666;\n    -webkit-transform: translateY(4px);\n            transform: translateY(4px);\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbWVudS1jYXJkL21lbnUtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUNBQXVDO0lBQ3ZDLGdCQUFnQjtJQUNoQixrQkFBa0IsRUFBRSx3QkFBd0I7SUFDNUMsZ0JBQWdCO0dBQ2pCLFlBQVk7SUFDWCxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLFdBQVc7RUFDYix5QkFBeUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBLDhFQUE4RTs7QUFDOUU7SUFDSSwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBQUMsK0NBQStDOztBQUNoRDtJQUNJLGlCQUFpQjtBQUNyQjs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhO0lBQ2IsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHNCQUFzQjs7SUFFdEIsWUFBWTtJQUNaLFVBQVU7O0lBRVYsWUFBWTtJQUNaLFlBQVk7R0FDYiwyQkFBMkI7SUFDMUIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0VBQ2I7O0FBRUEsZUFBZSx5QkFBeUI7O0FBRXhDO0lBQ0UseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixrQ0FBMEI7WUFBMUIsMEJBQTBCO0VBQzVCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvbWVudS1jYXJkL21lbnUtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgLyogNXB4IHJvdW5kZWQgY29ybmVycyAqL1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREVGM0E2O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogQWRkIHJvdW5kZWQgY29ybmVycyB0byB0aGUgdG9wIGxlZnQgYW5kIHRoZSB0b3AgcmlnaHQgY29ybmVyIG9mIHRoZSBpbWFnZSAqL1xuaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn0vKiBBZGQgc29tZSBwYWRkaW5nIGluc2lkZSB0aGUgY2FyZCBjb250YWluZXIgKi9cbi5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDJweCAxNnB4O1xufVxuXG5cbi5idXR0b257XG4gICAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYm94LXNoYWRvdzogMCA5cHggIzk5OTtcblxuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiAwO1xuIFxuICAgIHBhZGRpbmc6IDhweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwOyovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLmJ1dHRvbjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MX1cbiAgXG4gIC5idXR0b246YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4ZTQxO1xuICAgIGJveC1zaGFkb3c6IDAgNXB4ICM2NjY7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/componentes/menu-card/menu-card.component.html":
/*!****************************************************************!*\
  !*** ./src/app/componentes/menu-card/menu-card.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\n    <div class=\"card\">\n      <img class=\"img-thumbnail\"   src=\"./assets/imagenes/cerebro.jpg\" alt=\"Avatar\" style=\"width:100%\">\n      <h1>Velocidad y agilidad aritmética </h1>\n      <p class=\"title\">Juego de agilidad mental</p>\n      <p>UTN FRA </p>\n  \n      <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a> \n      <a href=\"#\"><i class=\"fa fa-twitter\"></i></a> \n      <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> \n      <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> \n      <p>           <button class=\"button\"  (click)=\"Juego('Agilidad')\">Jugar</button></p>\n    \n    </div>\n  \n    <div class=\"card\">\n      <img class=\"img-thumbnail\" src=\"./assets/imagenes/ppt.jpg\" alt=\"Avatar\" style=\"width:100%\">\n      <h1>Piedra Papel o Tijera</h1>\n      <p class=\"title\">Juega contra la máquina</p>\n      <p>UTN FRA </p>\n      \n      <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a> \n      <a href=\"#\"><i class=\"fa fa-twitter\"></i></a> \n      <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> \n      <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> \n      <p>           <button class=\"button\"  (click)=\"Juego('PPT')\">Jugar</button></p>\n    </div>\n    <div class=\"card\">\n      <img  class=\"img-thumbnail\"  src=\"./assets/imagenes/adivina.png\" alt=\"Avatar\" style=\"width:100%\">\n      <h1>Adivina el número secreto</h1>\n      <p class=\"title\">Juega de estrategia</p>\n      <p>UTN FRA </p>\n      \n      <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a> \n      <a href=\"#\"><i class=\"fa fa-twitter\"></i></a> \n      <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> \n      <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> \n      <p>           <button class=\"button\"  (click)=\"Juego('Adivina')\">Jugar</button></p>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/componentes/menu-card/menu-card.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/componentes/menu-card/menu-card.component.ts ***!
  \**************************************************************/
/*! exports provided: MenuCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuCardComponent", function() { return MenuCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var MenuCardComponent = /** @class */ (function () {
    function MenuCardComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    MenuCardComponent.prototype.ngOnInit = function () {
    };
    MenuCardComponent.prototype.Juego = function (tipo) {
        switch (tipo) {
            case 'Adivina':
                this.router.navigate(['/Juegos/Adivina']);
                break;
            case 'Agilidad':
                this.router.navigate(['/Juegos/Agilidad']);
                break;
            case 'AdivinaMasListado':
                this.router.navigate(['/Juegos/AdivinaMasListado']);
                break;
            case 'AgilidadaMasListado':
                this.router.navigate(['/Juegos/AgilidadaMasListado']);
                break;
        }
    };
    MenuCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu-card',
            template: __webpack_require__(/*! ./menu-card.component.html */ "./src/app/componentes/menu-card/menu-card.component.html"),
            styles: [__webpack_require__(/*! ./menu-card.component.css */ "./src/app/componentes/menu-card/menu-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MenuCardComponent);
    return MenuCardComponent;
}());



/***/ }),

/***/ "./src/app/componentes/menu-principal/menu-principal.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/componentes/menu-principal/menu-principal.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* GLOBAL STYLES\r\n-------------------------------------------------- */\r\n/* Padding below the footer and lighter body text */\r\n.fondo{\r\n  display: inline-flex;\r\n  background-image: url('slider-bg-2.jpg');\r\n  -webkit-margin-before: 181px;\r\n          margin-block-start: 181px;\r\n}\r\n/* CUSTOMIZE THE CAROUSEL\r\n  -------------------------------------------------- */\r\n/* MARKETING CONTENT\r\n  -------------------------------------------------- */\r\n/* Center align the text within the three columns below the carousel */\r\n.marketing .col-lg-6 {\r\n    margin-bottom: 1.5rem;\r\n    text-align: center;\r\n    \r\n  }\r\n.marketing h2 {\r\n    font-weight: normal;\r\n  }\r\n.fondo .col-lg-6 p {\r\n    margin-right: 10.75rem;\r\n    margin-left: -7.25rem;\r\n  \r\n  }\r\np{\r\n    text-align: center;\r\n    color:white;\r\n    font-size: 20px;\r\n  }\r\nh2\r\n  {\r\n    color:yellowgreen;\r\n    text-align: left;\r\n  }\r\n/* Featurettes\r\n  ------------------------- */\r\n.featurette-divider {\r\n    margin: 5rem 0; /* Space out the Bootstrap <hr> more */\r\n  }\r\n/* RESPONSIVE CSS\r\n  -------------------------------------------------- */\r\n@media (min-width: 40em) {\r\n    /* Bump up size of carousel content */\r\n    .carousel-caption p {\r\n      margin-bottom: 1.25rem;\r\n      font-size: 1.25rem;\r\n      line-height: 1.4;\r\n    }\r\n  \r\n    .featurette-heading {\r\n      font-size: 50px;\r\n    }\r\n  }\r\n@media (min-width: 62em) {\r\n    .featurette-heading {\r\n      margin-top: 7rem;\r\n    }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbWVudS1wcmluY2lwYWwvbWVudS1wcmluY2lwYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtvREFDb0Q7QUFDcEQsbURBQW1EO0FBRW5EO0VBQ0Usb0JBQW9CO0VBQ3BCLHdDQUF1RTtFQUN2RSw0QkFBeUI7VUFBekIseUJBQXlCO0FBQzNCO0FBSUU7c0RBQ29EO0FBSXBEO3NEQUNvRDtBQUVwRCxzRUFBc0U7QUFDdEU7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCOztFQUVwQjtBQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSxzQkFBc0I7SUFDdEIscUJBQXFCOztFQUV2QjtBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0VBQ2pCO0FBQ0E7O0lBRUUsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjtBQUdBOzZCQUMyQjtBQUUzQjtJQUNFLGNBQWMsRUFBRSxzQ0FBc0M7RUFDeEQ7QUFFQTtzREFDb0Q7QUFFcEQ7SUFDRSxxQ0FBcUM7SUFDckM7TUFDRSxzQkFBc0I7TUFDdEIsa0JBQWtCO01BQ2xCLGdCQUFnQjtJQUNsQjs7SUFFQTtNQUNFLGVBQWU7SUFDakI7RUFDRjtBQUVBO0lBQ0U7TUFDRSxnQkFBZ0I7SUFDbEI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL21lbnUtcHJpbmNpcGFsL21lbnUtcHJpbmNpcGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHTE9CQUwgU1RZTEVTXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi8qIFBhZGRpbmcgYmVsb3cgdGhlIGZvb3RlciBhbmQgbGlnaHRlciBib2R5IHRleHQgKi9cclxuXHJcbi5mb25kb3tcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi4vLi4vLi4vZG9jcy9hc3NldHMvaW1hZ2VuZXMvc2xpZGVyLWJnLTIuanBnXCIpO1xyXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMTgxcHg7XHJcbn1cclxuXHJcblxyXG4gIFxyXG4gIC8qIENVU1RPTUlaRSBUSEUgQ0FST1VTRUxcclxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8qIE1BUktFVElORyBDT05URU5UXHJcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICBcclxuICAvKiBDZW50ZXIgYWxpZ24gdGhlIHRleHQgd2l0aGluIHRoZSB0aHJlZSBjb2x1bW5zIGJlbG93IHRoZSBjYXJvdXNlbCAqL1xyXG4gIC5tYXJrZXRpbmcgLmNvbC1sZy02IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG4gIH1cclxuICAubWFya2V0aW5nIGgyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgfVxyXG4gIC5mb25kbyAuY29sLWxnLTYgcCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwLjc1cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC03LjI1cmVtO1xyXG4gIFxyXG4gIH1cclxuICBwe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIGgyXHJcbiAge1xyXG4gICAgY29sb3I6eWVsbG93Z3JlZW47XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKiBGZWF0dXJldHRlc1xyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICBcclxuICAuZmVhdHVyZXR0ZS1kaXZpZGVyIHtcclxuICAgIG1hcmdpbjogNXJlbSAwOyAvKiBTcGFjZSBvdXQgdGhlIEJvb3RzdHJhcCA8aHI+IG1vcmUgKi9cclxuICB9XHJcbiAgXHJcbiAgLyogUkVTUE9OU0lWRSBDU1NcclxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0MGVtKSB7XHJcbiAgICAvKiBCdW1wIHVwIHNpemUgb2YgY2Fyb3VzZWwgY29udGVudCAqL1xyXG4gICAgLmNhcm91c2VsLWNhcHRpb24gcCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgIH1cclxuICBcclxuICAgIC5mZWF0dXJldHRlLWhlYWRpbmcge1xyXG4gICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA2MmVtKSB7XHJcbiAgICAuZmVhdHVyZXR0ZS1oZWFkaW5nIHtcclxuICAgICAgbWFyZ2luLXRvcDogN3JlbTtcclxuICAgIH1cclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/componentes/menu-principal/menu-principal.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/componentes/menu-principal/menu-principal.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fondo\">\n    <!-- Three columns of text below the carousel -->\n    <div class=\"row\" style=\"    margin-top: 20px;\n    margin-left: 224px;\">\n      <div class=\"col-lg-6\">\n          <img _ngcontent-c3=\"\" alt=\"Generic placeholder image\" class=\"rounded-circle\" height=\"235\" src=\"./assets/imagenes/saladejuegos.png\" width=\"243\">\n        <h2>Sala de Juegos</h2>\n        <p>Los mejores juegos para agilizar tu mente y poder entretenerte. La mas divertida experiencia</p>\n        <p><a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\" routerLink=\"/Juegos\">Jugar</a></p>\n      </div><!-- /.col-lg-4 -->\n      <div class=\"col-lg-6\">\n          <img _ngcontent-c3=\"\" alt=\"Generic placeholder image\" class=\"rounded-circle\" height=\"235\" src=\"./assets/imagenes/listado.jpg\" width=\"243\">\n        <h2>Listados de puntos</h2>\n        <p>Conoce quienes son los jugadores mas ganadores y con mejores puntajes</p>\n        <p><a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\" routerLink=\"/Listado\">Ver listado</a></p>\n      </div><!-- /.col-lg-4 -->\n      <div class=\"col-lg-6\"><br><br><br>\n          <img _ngcontent-c3=\"\" alt=\"Generic placeholder image\" class=\"rounded-circle\" height=\"235\" src=\"./assets/imagenes/jugadores.png\" width=\"243\">\n        <h2 style=\"margin-left:55px;\">Jugadores</h2>\n        <p>Listado de los jugadores de esta web</p>\n        <p><a class=\"btn btn-danger btn-lg\" href=\"#\" role=\"button\" routerLink=\"/Jugadores\">Jugadores</a></p>\n      </div><!-- /.col-lg-4 -->\n      <div class=\"col-lg-6\"><br><br>\n          <img _ngcontent-c3=\"\" alt=\"Generic placeholder image\" class=\"rounded-circle\" height=\"235\" src=\"./assets/imagenes/Configuracion.png\" width=\"243\">\n        <h2>Configuracion</h2>\n        <p>Ingresa para realizar las configuraciones que prefieras en los juegos</p>\n        <p><a class=\"btn btn-danger btn-lg\" href=\"#\" role=\"button\" routerLink=\"/Configuracion\">Configurar</a></p>\n      </div><!-- /.col-lg-4 -->\n    </div><!-- /.row -->\n\n"

/***/ }),

/***/ "./src/app/componentes/menu-principal/menu-principal.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/componentes/menu-principal/menu-principal.component.ts ***!
  \************************************************************************/
/*! exports provided: MenuPrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPrincipalComponent", function() { return MenuPrincipalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuPrincipalComponent = /** @class */ (function () {
    function MenuPrincipalComponent() {
    }
    MenuPrincipalComponent.prototype.ngOnInit = function () {
    };
    MenuPrincipalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu-principal',
            template: __webpack_require__(/*! ./menu-principal.component.html */ "./src/app/componentes/menu-principal/menu-principal.component.html"),
            styles: [__webpack_require__(/*! ./menu-principal.component.css */ "./src/app/componentes/menu-principal/menu-principal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuPrincipalComponent);
    return MenuPrincipalComponent;
}());



/***/ }),

/***/ "./src/app/componentes/menu/menu.component.css":
/*!*****************************************************!*\
  !*** ./src/app/componentes/menu/menu.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL21lbnUvbWVudS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/componentes/menu/menu.component.html":
/*!******************************************************!*\
  !*** ./src/app/componentes/menu/menu.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--div>\n    <button routerLink=\"/Principal\">Principal</button>\n    <button (click)=\"Juego('Adivina')\">Adivina</button>\n    <button (click)=\"Juego('Agilidad')\">Agilidad</button>\n    <button (click)=\"Juego('AdivinaMasListado')\">Adivina+listado</button>\n    <button (click)=\"Juego('AgilidadaMasListado')\">Agilidad+listado</button>  \n    <button routerLink=\"/error\">Error</button>\n  \n</div-->\n\n<!--nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" routerLink=\"/Principal\">Inicio</a>\n      </div>\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a routerLink=\"/Juegos\">Juegos</a></li>\n        <li><a data-toggle=\"tooltip\" title=\"Hooray!\" (click)=\"Juego('Adivina')\">Adivina</a></li>\n        <li><a  (click)=\"Juego('Agilidad')\">Agilidad</a></li>\n        <li><a  (click)=\"Juego('AdivinaMasListado')\">Adivina+listado</a></li>\n        <li><a  (click)=\"Juego('AgilidadaMasListado')\">Agilidad+listado</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n          <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Mis Datos</a></li>\n          <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-out\"></span> Salir</a></li>\n        </ul>\n    </div>\n  </nav-->\n  <nav class=\"navbar navbar-inverse\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n            <span class=\"icon-bar\"></span>\n                                  \n          </button>\n          <a class=\"navbar-brand\" routerLink=\"/Principal\">Inicio</a>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n            <ul class=\"nav navbar-nav\">\n                <li class=\"active\"><a routerLink=\"/Juegos\">Menú de Juegos</a></li>\n                <li><a data-toggle=\"tooltip\" title=\"Hooray!\" (click)=\"Juego('Adivina')\">Adivina</a></li>\n                <li><a  (click)=\"Juego('Agilidad')\">Agilidad</a></li>\n                <li><a  (click)=\"Juego('AdivinaMasListado')\">Adivina+listado</a></li>\n                <li><a  (click)=\"Juego('AgilidadaMasListado')\">Agilidad+listado</a></li>\n              </ul>\n              <ul class=\"nav navbar-nav navbar-right\">\n                  <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Mis Datos</a></li>\n                  <li><a href=\"/Login\"><span class=\"glyphicon glyphicon-log-out\"></span> Salir</a></li>\n                </ul>\n        </div>\n      </div>\n    </nav>\n      \n   "

/***/ }),

/***/ "./src/app/componentes/menu/menu.component.ts":
/*!****************************************************!*\
  !*** ./src/app/componentes/menu/menu.component.ts ***!
  \****************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var MenuComponent = /** @class */ (function () {
    function MenuComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.Juego = function (tipo) {
        switch (tipo) {
            case 'Adivina':
                this.router.navigate(['/Juegos/Adivina']);
                break;
            case 'Agilidad':
                this.router.navigate(['/Juegos/Agilidad']);
                break;
            case 'AdivinaMasListado':
                this.router.navigate(['/Juegos/AdivinaMasListado']);
                break;
            case 'AgilidadaMasListado':
                this.router.navigate(['/Juegos/AgilidadaMasListado']);
                break;
        }
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/componentes/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/componentes/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/componentes/principal/principal.component.css":
/*!***************************************************************!*\
  !*** ./src/app/componentes/principal/principal.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imagenDeMenu{\nwidth: 80px;\nheight: 70px;\n}\n\n.hero-text {\n    text-align: center;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    color: #100000;\n    }\n\n.fondo{\n    background-image: url('/TP-Sala-de-Juegos-ANGULAR/assets/imagenes/color_principal.jpg');\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcHJpbmNpcGFsL3ByaW5jaXBhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsV0FBVztBQUNYLFlBQVk7QUFDWjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCx3Q0FBZ0M7WUFBaEMsZ0NBQWdDO0lBQ2hDLGNBQWM7SUFDZDs7QUFFSjtJQUNJLHVGQUE2RDs7QUFFakUiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9wcmluY2lwYWwvcHJpbmNpcGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2VuRGVNZW51e1xud2lkdGg6IDgwcHg7XG5oZWlnaHQ6IDcwcHg7XG59XG5cbi5oZXJvLXRleHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGNvbG9yOiAjMTAwMDAwO1xuICAgIH1cblxuLmZvbmRve1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VuZXMvY29sb3JfcHJpbmNpcGFsLmpwZ1wiKTtcbiAgICBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/componentes/principal/principal.component.html":
/*!****************************************************************!*\
  !*** ./src/app/componentes/principal/principal.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-cabecera>  </app-cabecera>\n<app-menu-principal></app-menu-principal>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/componentes/principal/principal.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/componentes/principal/principal.component.ts ***!
  \**************************************************************/
/*! exports provided: PrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalComponent", function() { return PrincipalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PrincipalComponent = /** @class */ (function () {
    function PrincipalComponent() {
        this.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
    }
    PrincipalComponent.prototype.ngOnInit = function () {
    };
    PrincipalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-principal',
            template: __webpack_require__(/*! ./principal.component.html */ "./src/app/componentes/principal/principal.component.html"),
            styles: [__webpack_require__(/*! ./principal.component.css */ "./src/app/componentes/principal/principal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PrincipalComponent);
    return PrincipalComponent;
}());



/***/ }),

/***/ "./src/app/componentes/quien-soy/quien-soy.component.css":
/*!***************************************************************!*\
  !*** ./src/app/componentes/quien-soy/quien-soy.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imagenDeQuienSoy{\n    width: 100%;\n   \n    }\nbody {\n    font: 20px Montserrat, sans-serif;\n    line-height: 1.8;\n    color: #f5f6f7;\n}\np {font-size: 16px;}\n.margin {margin-bottom: 45px;}\n.bg-1 { \n    background-color: #1abc9c; /* Green */\n    color: #ffffff;\n}\n.bg-2 { \n    background-color: #474e5d; /* Dark Blue */\n    color: #ffffff;\n}\n.bg-3 { \n    background-color: #ffffff; /* White */\n    color: #555555;\n}\n.bg-4 { \n    background-color: #2f2f2f; /* Black Gray */\n    color: #fff;\n}\n.container-fluid {\n    padding-top: 70px;\n    padding-bottom: 70px;\n}\n.navbar {\n    padding-top: 15px;\n    padding-bottom: 15px;\n    border: 0;\n    border-radius: 0;\n    margin-bottom: 0;\n    font-size: 12px;\n    letter-spacing: 5px;\n}\n.navbar-nav  li a:hover {\n    color: #1abc9c !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcXVpZW4tc295L3F1aWVuLXNveS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVzs7SUFFWDtBQUNKO0lBQ0ksaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0EsR0FBRyxlQUFlLENBQUM7QUFDbkIsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QjtJQUNJLHlCQUF5QixFQUFFLFVBQVU7SUFDckMsY0FBYztBQUNsQjtBQUNBO0lBQ0kseUJBQXlCLEVBQUUsY0FBYztJQUN6QyxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx5QkFBeUIsRUFBRSxVQUFVO0lBQ3JDLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHlCQUF5QixFQUFFLGVBQWU7SUFDMUMsV0FBVztBQUNmO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3F1aWVuLXNveS9xdWllbi1zb3kuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZW5EZVF1aWVuU295e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgXG4gICAgfVxuYm9keSB7XG4gICAgZm9udDogMjBweCBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XG4gICAgY29sb3I6ICNmNWY2Zjc7XG59XG5wIHtmb250LXNpemU6IDE2cHg7fVxuLm1hcmdpbiB7bWFyZ2luLWJvdHRvbTogNDVweDt9XG4uYmctMSB7IFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYWJjOWM7IC8qIEdyZWVuICovXG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG4uYmctMiB7IFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzRlNWQ7IC8qIERhcmsgQmx1ZSAqL1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuLmJnLTMgeyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyAvKiBXaGl0ZSAqL1xuICAgIGNvbG9yOiAjNTU1NTU1O1xufVxuLmJnLTQgeyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYyZjJmOyAvKiBCbGFjayBHcmF5ICovXG4gICAgY29sb3I6ICNmZmY7XG59XG4uY29udGFpbmVyLWZsdWlkIHtcbiAgICBwYWRkaW5nLXRvcDogNzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNzBweDtcbn1cbi5uYXZiYXIge1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XG59XG4ubmF2YmFyLW5hdiAgbGkgYTpob3ZlciB7XG4gICAgY29sb3I6ICMxYWJjOWMgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/componentes/quien-soy/quien-soy.component.html":
/*!****************************************************************!*\
  !*** ./src/app/componentes/quien-soy/quien-soy.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <nav class=\"navbar navbar-default\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>                        \n        </button>\n        <a class=\"navbar-brand\" href=\"./\">Sala De Juegos</a>\n      </div>\n      <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><a href=\"./QuienSoy#quien\">Quien</a></li>\n          <li><a href=\"/TP_LAV4_2017/QuienSoy#que\">Ques es</a></li>\n          <li><a href=\"./QuienSoy#donde\">Donde</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  \n  <!-- First Container -->\n  <div id =\"quiwn\"class=\"container-fluid bg-1 text-center\">\n    <h3 class=\"margin\">Quién Soy?</h3>\n    <img src=\"./assets/imagenes/quiensoy.jpg\" class=\"img-responsive img-circle margin\" style=\"display:inline\" alt=\"Bird\" width=\"350\" height=\"350\">\n    <h3>Soy Un alumno de la UTN FRA</h3>\n  </div>\n  \n  <!-- Second Container -->\n  <div id =\"que\" class=\"container-fluid bg-2 text-center\">\n    <h3 class=\"margin\">Esto es un trabajo práctico</h3>\n    <p>Cada universidad, cada facultad, cada carrera y obviamente cada materia en particular tiene estrategias didácticas y formas de evaluación diferentes. A pesar de que en muchos casos las universidades intentan estandarizar la forma de dictar clase para generar un orden en las planificaciones cuatrimestre a cuatrimestre, las formas de evaluación son elementales tanto para las instituciones y profesores como para los alumnos. A través de la evaluación formativa el educador busca información en el alumno para lograr comprender cómo se está\n      produciendo el proceso de aprendizaje y poder reajustar los objetivos pedagógicos. Y para el alumno es una muestra del progreso que está logrando y si puede aplicar, materializar y darle visibilidad a la comprensión del tema. Según Black y William (1998), la evaluación formativa, ayuda a que los estudiantes sean independientes a la hora del aprendizaje, es decir, se presenta como receptor, autorregulador y centro de esa misma evaluación. </p>\n    <a href=\"#\" class=\"btn btn-default btn-lg\">\n      <span class=\"glyphicon glyphicon-file\"></span> Descargar PDF\n    </a>\n  </div>\n  \n  <!-- Third Container (Grid) -->\n  <div id =\"donde\" class=\"container-fluid bg-3 text-center\">    \n    <h3 class=\"margin\">Dónde Funciona?</h3><br>\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <p>Con las tecnologias WEB que permiten desarrollar aplicaciones multiplataforma</p>\n        <img src=\"./assets/imagenes/quiensoy1.png\" class=\"img-responsive margin imagenDeQuienSoy\"  alt=\"Image\">\n      </div>\n      <div class=\"col-sm-4\"> \n        <p>Principalmente orientada a la experiencia del usuario, garantizando que su funcionamieto sea fluido y pensado en el comportamiento del usuario y en la funcionalidad.</p>\n        <img src=\"./assets/imagenes/quiensoy2.jpg\" class=\"img-responsive margin imagenDeQuienSoy\" alt=\"Image\">\n      </div>\n      <div class=\"col-sm-4\"> \n        <p>Para los sistemas operativos lideres en el mercado del consumo masivo</p>\n        <img src=\"./assets/imagenes/quiensoy3.png\" class=\"img-responsive margin imagenDeQuienSoy\" alt=\"Image\">\n      </div>\n    </div>\n  </div>\n  \n  <!-- Footer -->\n  <footer class=\"container-fluid bg-4 text-center\">\n    <p>Modificado por <a href=\"https://www.octavio.com.ar\">www.octavio.com.ar</a></p> \n  </footer>"

/***/ }),

/***/ "./src/app/componentes/quien-soy/quien-soy.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/componentes/quien-soy/quien-soy.component.ts ***!
  \**************************************************************/
/*! exports provided: QuienSoyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuienSoyComponent", function() { return QuienSoyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QuienSoyComponent = /** @class */ (function () {
    function QuienSoyComponent() {
    }
    QuienSoyComponent.prototype.ngOnInit = function () {
    };
    QuienSoyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quien-soy',
            template: __webpack_require__(/*! ./quien-soy.component.html */ "./src/app/componentes/quien-soy/quien-soy.component.html"),
            styles: [__webpack_require__(/*! ./quien-soy.component.css */ "./src/app/componentes/quien-soy/quien-soy.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuienSoyComponent);
    return QuienSoyComponent;
}());



/***/ }),

/***/ "./src/app/componentes/registro/registro.component.css":
/*!*************************************************************!*\
  !*** ./src/app/componentes/registro/registro.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=text], input[type=password] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n}\n\n/* Set a style for all buttons */\n\nbutton {\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n}\n\n/* Extra styles for the cancel button */\n\n.cancelbtn {\n    padding: 14px 20px;\n    background-color: #f44336;\n}\n\n/* Float cancel and signup buttons and add an equal width */\n\n.cancelbtn,.signupbtn {float:left;width:50%}\n\n/* Add padding to container elements */\n\n.container {\n    padding: 16px;\n}\n\n/* The Modal (background) */\n\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n    padding-top: 60px;\n}\n\n/* Modal Content/Box */\n\n.modal-content {\n    background-color: #fefefe;\n    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\n    border: 1px solid #888;\n    width: 98%; /* Could be more or less, depending on screen size */\n}\n\n/* The Close Button (x) */\n\n.close {\n    position: absolute;\n    right: 35px;\n    top: 15px;\n    color: #000;\n    font-size: 40px;\n    font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n    color: red;\n    cursor: pointer;\n}\n\n/* Clear floats */\n\n.clearfix::after {\n    content: \"\";\n    clear: both;\n    display: table;\n}\n\n/* Change styles for cancel button and signup button on extra small screens */\n\n@media screen and (max-width: 300px) {\n    .cancelbtn, .signupbtn {\n       width: 100%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcmVnaXN0cm8vcmVnaXN0cm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsc0JBQXNCO0FBQzFCOztBQUVBLGdDQUFnQzs7QUFDaEM7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUEsdUNBQXVDOztBQUN2QztJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBRUEsMkRBQTJEOztBQUMzRCx1QkFBdUIsVUFBVSxDQUFDLFNBQVM7O0FBRTNDLHNDQUFzQzs7QUFDdEM7SUFDSSxhQUFhO0FBQ2pCOztBQUVBLDJCQUEyQjs7QUFDM0I7SUFDSSxhQUFhLEVBQUUsc0JBQXNCO0lBQ3JDLGVBQWUsRUFBRSxrQkFBa0I7SUFDbkMsVUFBVSxFQUFFLGVBQWU7SUFDM0IsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXLEVBQUUsZUFBZTtJQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0lBQzlCLGNBQWMsRUFBRSw0QkFBNEI7SUFDNUMsNEJBQTRCLEVBQUUsbUJBQW1CO0lBQ2pELGlDQUFpQyxFQUFFLHFCQUFxQjtJQUN4RCxpQkFBaUI7QUFDckI7O0FBRUEsc0JBQXNCOztBQUN0QjtJQUNJLHlCQUF5QjtJQUN6Qix3QkFBd0IsRUFBRSxzREFBc0Q7SUFDaEYsc0JBQXNCO0lBQ3RCLFVBQVUsRUFBRSxvREFBb0Q7QUFDcEU7O0FBRUEseUJBQXlCOztBQUN6QjtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUVBLGlCQUFpQjs7QUFDakI7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUEsNkVBQTZFOztBQUM3RTtJQUNJO09BQ0csV0FBVztJQUNkO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9yZWdpc3Ryby9yZWdpc3Ryby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xuYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBFeHRyYSBzdHlsZXMgZm9yIHRoZSBjYW5jZWwgYnV0dG9uICovXG4uY2FuY2VsYnRuIHtcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbn1cblxuLyogRmxvYXQgY2FuY2VsIGFuZCBzaWdudXAgYnV0dG9ucyBhbmQgYWRkIGFuIGVxdWFsIHdpZHRoICovXG4uY2FuY2VsYnRuLC5zaWdudXBidG4ge2Zsb2F0OmxlZnQ7d2lkdGg6NTAlfVxuXG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXIgZWxlbWVudHMgKi9cbi5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG59XG5cbi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cbi5tb2RhbCB7XG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cbiAgICBwYWRkaW5nLXRvcDogNjBweDtcbn1cblxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cbi5tb2RhbC1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAgIG1hcmdpbjogNSUgYXV0byAxNSUgYXV0bzsgLyogNSUgZnJvbSB0aGUgdG9wLCAxNSUgZnJvbSB0aGUgYm90dG9tIGFuZCBjZW50ZXJlZCAqL1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gICAgd2lkdGg6IDk4JTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cbn1cblxuLyogVGhlIENsb3NlIEJ1dHRvbiAoeCkgKi9cbi5jbG9zZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAzNXB4O1xuICAgIHRvcDogMTVweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jbG9zZTpob3Zlcixcbi5jbG9zZTpmb2N1cyB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIENsZWFyIGZsb2F0cyAqL1xuLmNsZWFyZml4OjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBjbGVhcjogYm90aDtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLyogQ2hhbmdlIHN0eWxlcyBmb3IgY2FuY2VsIGJ1dHRvbiBhbmQgc2lnbnVwIGJ1dHRvbiBvbiBleHRyYSBzbWFsbCBzY3JlZW5zICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xuICAgIC5jYW5jZWxidG4sIC5zaWdudXBidG4ge1xuICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/componentes/registro/registro.component.html":
/*!**************************************************************!*\
  !*** ./src/app/componentes/registro/registro.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"jumbotron\">\n    <h2 id=\"terminos\">Terminos y condiciones</h2>\n    <p>El Gobierno de la República Argentina (en adelante el “Gobierno Nacional”) no es responsable por los daños y perjuicios que puedan surgir, incluyendo, sin límite, daños, pérdidas o gastos directos, indirectos, que surjan en relación con el uso de los Activos Digitales o la imposibilidad de uso, en relación con cualquier falla en el vencimiento, error, omisión, interrupción, defecto, demora en la operación o transmisión, virus de computadora o falla del sistema de línea, aún en el caso de que el Gobierno Nacional o sus representantes fueran informados sobre la posibilidad de dichos daños, pérdidas o gastos.</p>\n    <p>El Gobierno Nacional no controla ni garantiza la ausencia de virus ni de otros elementos en los contenidos que puedan producir alteraciones en su sistema informático (software y hardware) o en los documentos electrónicos y ficheros almacenados en su sistema informático.</p>\n    <p>El Gobierno Nacional no puede garantizar que la transmisión de información por parte de los Usuarios sea completamente segura. El Usuario asume este riesgo.</p>\n   \n  </div>\n  <strong><p>No leer lo anterior, es solo un ejemplo sacado de https://www.argentina.gob.ar/terminos-y-condiciones </p></strong>\n  <button onclick=\"document.getElementById('id01').style.display='block'\" style=\"width:auto;\">Acepto</button>\n  <button  class=\"cancelbtn\"  routerLink=\"/Principal\" style=\"width:auto;\">No acepto</button>\n  <div id=\"id01\" class=\"modal\">\n    <span onclick=\"document.getElementById('id01').style.display='none'\" class=\"close\" title=\"Close Modal\">×</span>\n    <form class=\"modal-content animate\" >\n      <div class=\"container\">\n        <label><b>Email</b></label>\n        <input type=\"text\" placeholder=\"Ingresa tu correo\" name=\"email\" required>\n  \n        <label><b>Clave</b></label>\n        <input type=\"password\" placeholder=\"Aca la clave\" name=\"psw\" required>\n  \n        <label><b>Repita la clave</b></label>\n        <input type=\"password\" placeholder=\"Aca repeti la misa clave  de arriba\" name=\"psw-repeat\" required>\n        <input type=\"checkbox\" checked=\"checked\">Recordar mis datos\n        <p>creando la cuenta aceptando los<a  onclick=\"document.getElementById('id01').style.display='none'\"  >Terminos y condiciones</a>.</p>\n  \n        <div class=\"clearfix\">\n          <button type=\"button\" onclick=\"document.getElementById('id01').style.display='none'\" class=\"cancelbtn\">Me arrepenti</button>\n          <button type=\"submit\" class=\"signupbtn\">Registrarme</button>\n        </div>\n      </div>\n    </form>\n  </div>\n  \n  <script>\n  // Get the modal\n  var modal = document.getElementById('id01');\n  \n  // When the user clicks anywhere outside of the modal, close it\n  window.onclick = function(event) {\n      if (event.target == modal) {\n          modal.style.display = \"none\";\n      }\n  }\n  </script>\n  \n  </body>"

/***/ }),

/***/ "./src/app/componentes/registro/registro.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/registro/registro.component.ts ***!
  \************************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


//para poder hacer las validaciones
//import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
var RegistroComponent = /** @class */ (function () {
    /* constructor( private miConstructor:FormBuilder) { }
     email=new FormControl('',[Validators.email]);
     formRegistro:FormGroup=this.miConstructor.group({
       usuario:this.email
     });*/
    function RegistroComponent() {
    }
    RegistroComponent.prototype.ngOnInit = function () {
    };
    RegistroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registro',
            template: __webpack_require__(/*! ./registro.component.html */ "./src/app/componentes/registro/registro.component.html"),
            styles: [__webpack_require__(/*! ./registro.component.css */ "./src/app/componentes/registro/registro.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegistroComponent);
    return RegistroComponent;
}());



/***/ }),

/***/ "./src/app/pipes/sexo.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/sexo.pipe.ts ***!
  \************************************/
/*! exports provided: SexoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SexoPipe", function() { return SexoPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SexoPipe = /** @class */ (function () {
    function SexoPipe() {
    }
    SexoPipe.prototype.transform = function (value, args) {
        if (value = 'M') {
            return "machito";
        }
        else {
            return "señorita";
        }
    };
    SexoPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'sexo'
        })
    ], SexoPipe);
    return SexoPipe;
}());



/***/ }),

/***/ "./src/app/ruteando/ruteando.module.ts":
/*!*********************************************!*\
  !*** ./src/app/ruteando/ruteando.module.ts ***!
  \*********************************************/
/*! exports provided: RuteandoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuteandoModule", function() { return RuteandoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../componentes/adivina-el-numero/adivina-el-numero.component */ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../componentes/login/login.component */ "./src/app/componentes/login/login.component.ts");
/* harmony import */ var _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../componentes/error/error.component */ "./src/app/componentes/error/error.component.ts");
/* harmony import */ var _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../componentes/principal/principal.component */ "./src/app/componentes/principal/principal.component.ts");
/* harmony import */ var _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../componentes/agilidad-aritmetica/agilidad-aritmetica.component */ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../componentes/adivina-mas-listado/adivina-mas-listado.component */ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts");
/* harmony import */ var _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../componentes/agilidad-mas-listado/agilidad-mas-listado.component */ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts");
/* harmony import */ var _componentes_listado_listado_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../componentes/listado/listado.component */ "./src/app/componentes/listado/listado.component.ts");
/* harmony import */ var _componentes_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../componentes/juegos/juegos.component */ "./src/app/componentes/juegos/juegos.component.ts");
/* harmony import */ var _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../componentes/registro/registro.component */ "./src/app/componentes/registro/registro.component.ts");
/* harmony import */ var _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../componentes/menu-card/menu-card.component */ "./src/app/componentes/menu-card/menu-card.component.ts");
/* harmony import */ var _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../componentes/quien-soy/quien-soy.component */ "./src/app/componentes/quien-soy/quien-soy.component.ts");
/* harmony import */ var _componentes_listado_de_paises_listado_de_paises_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../componentes/listado-de-paises/listado-de-paises.component */ "./src/app/componentes/listado-de-paises/listado-de-paises.component.ts");
/* harmony import */ var _componentes_mapa_de_google_mapa_de_google_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../componentes/mapa-de-google/mapa-de-google.component */ "./src/app/componentes/mapa-de-google/mapa-de-google.component.ts");
/* harmony import */ var _componentes_jugadores_listado_jugadores_listado_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../componentes/jugadores-listado/jugadores-listado.component */ "./src/app/componentes/jugadores-listado/jugadores-listado.component.ts");
/* harmony import */ var _componentes_home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../componentes/home/home.component */ "./src/app/componentes/home/home.component.ts");


// importo del module principal

















// declaro donde quiero que se dirija
var MiRuteo = [
    { path: 'Jugadores', component: _componentes_jugadores_listado_jugadores_listado_component__WEBPACK_IMPORTED_MODULE_17__["JugadoresListadoComponent"] },
    { path: '', component: _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_6__["PrincipalComponent"] },
    { path: 'Login', component: _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'Mapa', component: _componentes_mapa_de_google_mapa_de_google_component__WEBPACK_IMPORTED_MODULE_16__["MapaDeGoogleComponent"] },
    { path: 'QuienSoy', component: _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_14__["QuienSoyComponent"] },
    { path: 'Registro', component: _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_12__["RegistroComponent"] },
    { path: 'Principal', component: _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_6__["PrincipalComponent"] },
    { path: 'Listado', component: _componentes_listado_listado_component__WEBPACK_IMPORTED_MODULE_10__["ListadoComponent"] },
    { path: 'Paises', component: _componentes_listado_de_paises_listado_de_paises_component__WEBPACK_IMPORTED_MODULE_15__["ListadoDePaisesComponent"] },
    { path: 'Home', component: _componentes_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"] },
    { path: 'Juegos',
        component: _componentes_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_11__["JuegosComponent"],
        children: [{ path: '', component: _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_13__["MenuCardComponent"] },
            { path: 'Adivina', component: _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_3__["AdivinaElNumeroComponent"] },
            { path: 'AdivinaMasListado', component: _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_8__["AdivinaMasListadoComponent"] },
            { path: 'AgilidadaMasListado', component: _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_9__["AgilidadMasListadoComponent"] },
            { path: 'Agilidad', component: _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_7__["AgilidadAritmeticaComponent"] }]
    },
    { path: '**', component: _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"] },
    { path: 'error', component: _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"] }
];
var RuteandoModule = /** @class */ (function () {
    function RuteandoModule() {
    }
    RuteandoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(MiRuteo)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], RuteandoModule);
    return RuteandoModule;
}());



/***/ }),

/***/ "./src/app/servicios/archivos-jugadores.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/servicios/archivos-jugadores.service.ts ***!
  \*********************************************************/
/*! exports provided: ArchivosJugadoresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivosJugadoresService", function() { return ArchivosJugadoresService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mi-http/mi-http.service */ "./src/app/servicios/mi-http/mi-http.service.ts");



var ArchivosJugadoresService = /** @class */ (function () {
    function ArchivosJugadoresService(miHttp) {
        this.miHttp = miHttp;
        this.api = "http://localhost:8080/jugadoresarchivo/apirestjugadores/";
    }
    ArchivosJugadoresService.prototype.traerJugadores = function (ruta) {
        return this.miHttp.httpGetO(this.api + ruta)
            .toPromise()
            .then(function (data) {
            console.log("Archivo jugadores");
            // console.log( data );
            return data;
        }, function (err) {
            console.log(err);
        });
    };
    ArchivosJugadoresService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_2__["MiHttpService"]])
    ], ArchivosJugadoresService);
    return ArchivosJugadoresService;
}());



/***/ }),

/***/ "./src/app/servicios/juego-service.service.ts":
/*!****************************************************!*\
  !*** ./src/app/servicios/juego-service.service.ts ***!
  \****************************************************/
/*! exports provided: JuegoServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoServiceService", function() { return JuegoServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../clases/juego-adivina */ "./src/app/clases/juego-adivina.ts");
/* harmony import */ var _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mi-http/mi-http.service */ "./src/app/servicios/mi-http/mi-http.service.ts");




var JuegoServiceService = /** @class */ (function () {
    function JuegoServiceService(miHttp) {
        this.miHttp = miHttp;
        this.peticion = this.miHttp.httpGetO("http://localhost:3003");
        //    this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
    }
    JuegoServiceService.prototype.listar = function () {
        this.miHttp.httpGetP("https://restcountries.eu/rest/v2/all")
            .then(function (data) {
            console.log(data);
        })
            .catch(function (err) {
            console.log(err);
        });
        this.peticion
            .subscribe(function (data) {
            console.log("En listar");
            console.log(data);
        }, function (err) {
            console.info("error: ", err);
        });
        var miArray = new Array();
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("Juego 1", false));
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("Pepe", true));
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("Juego 3", false));
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("Juego 4", false));
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("Juego 5", false));
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("Juego 6", false));
        return miArray;
    };
    JuegoServiceService.prototype.listarPromesa = function () {
        this.peticion
            .subscribe(function (data) {
            console.log("En listarPromesa");
            console.log(data);
        }, function (err) {
            console.log(err);
        });
        var promesa = new Promise(function (resolve, reject) {
            var miArray = new Array();
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("JuegoPromesa 1", false, "promesa"));
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("PepePromesa", true));
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("JuegoPromesa 3", false));
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("JuegoPromesa 4", false));
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("JuegoPromesa 5", false));
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("JuegoPromesa 6", false));
            resolve(miArray);
        });
        return promesa;
    };
    JuegoServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_3__["MiHttpService"]])
    ], JuegoServiceService);
    return JuegoServiceService;
}());



/***/ }),

/***/ "./src/app/servicios/jugadores.service.ts":
/*!************************************************!*\
  !*** ./src/app/servicios/jugadores.service.ts ***!
  \************************************************/
/*! exports provided: JugadoresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JugadoresService", function() { return JugadoresService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _archivos_jugadores_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./archivos-jugadores.service */ "./src/app/servicios/archivos-jugadores.service.ts");



var JugadoresService = /** @class */ (function () {
    //peticion:any;
    function JugadoresService(miHttp) {
        this.miHttp = miHttp;
        // this.peticion = this.miHttp.traerJugadores();
        //    this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
    }
    JugadoresService.prototype.traertodos = function (ruta, filtro) {
        var _this = this;
        return this.miHttp.traerJugadores(ruta).then(function (data) {
            console.info("jugadores service", data);
            _this.filtrado = data;
            var ganador;
            if (filtro == "ganadores") {
                ganador = true;
            }
            else {
                ganador = false;
            }
            _this.filtrado = _this.filtrado.filter(function (data) { return data.gano === ganador || filtro == "todos"; });
            return _this.filtrado;
        })
            .catch(function (errror) {
            console.log("error");
            return _this.filtrado;
        });
    };
    JugadoresService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_archivos_jugadores_service__WEBPACK_IMPORTED_MODULE_2__["ArchivosJugadoresService"]])
    ], JugadoresService);
    return JugadoresService;
}());



/***/ }),

/***/ "./src/app/servicios/mi-http/mi-http.service.ts":
/*!******************************************************!*\
  !*** ./src/app/servicios/mi-http/mi-http.service.ts ***!
  \******************************************************/
/*! exports provided: MiHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiHttpService", function() { return MiHttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__);







var MiHttpService = /** @class */ (function () {
    function MiHttpService(http) {
        this.http = http;
    }
    MiHttpService.prototype.httpGetP = function (url) {
        return this.http
            .get(url)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    MiHttpService.prototype.httpPostP = function (url, objeto) {
        return this.http
            .get(url)
            .subscribe(function (data) {
            console.log(data);
            return data;
        });
    };
    MiHttpService.prototype.httpGetO = function (url) {
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(err.json().error || 'Server error'); });
    };
    MiHttpService.prototype.extractData = function (res) {
        return res.json() || {};
    };
    MiHttpService.prototype.handleError = function (error) {
        return error;
    };
    MiHttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], MiHttpService);
    return MiHttpService;
}());



/***/ }),

/***/ "./src/app/servicios/paises.service.ts":
/*!*********************************************!*\
  !*** ./src/app/servicios/paises.service.ts ***!
  \*********************************************/
/*! exports provided: PaisesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaisesService", function() { return PaisesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mi-http/mi-http.service */ "./src/app/servicios/mi-http/mi-http.service.ts");



var PaisesService = /** @class */ (function () {
    function PaisesService(miHttp) {
        this.miHttp = miHttp;
    }
    PaisesService.prototype.listar = function () {
        return this.miHttp.httpGetP("https://restcountries.eu/rest/v2/all")
            .then(function (data) {
            console.log(data);
            return data;
        })
            .catch(function (err) {
            console.log(err);
            return null;
        });
        //return null;
    };
    PaisesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_2__["MiHttpService"]])
    ], PaisesService);
    return PaisesService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\fislas\Desktop\labo 4\salaJuegos\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map