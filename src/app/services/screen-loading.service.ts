/**
 * @description		Importaciones
 */
import { Injectable } from '@angular/core';
/**
 * @decorator		Injectable
 * @description		Decorador del servicio para las pantallas de cargas.
 */
@Injectable({
  providedIn: 'root'
})
/**
 * @class			AuthService
 * @description		Servicio que muestra/oculta las pantallas de cargas.
 */
export class ScreenLoadingService {
	/**
	 * @var				screenLoading
	 * @description		Bandera que sirve para ocultar/mostrar las pantallas de carga
	 */
	public screenLoading	: boolean	= true;
	/**
	 * @get				getValue
	 * @description		Consulta el valor actual de la bandera que muestra/oculta las pantallas de carga
	 */
	get getValue() : boolean {
		return this.screenLoading;
	}
	/**
	 * @get				setValue
	 * @description		Setea el valor actual de la bandera que muestra/oculta las pantallas de carga
	 */
	set setValue( value : boolean ) {
		this.screenLoading	= value;
	}
	/**
	 * @description		Constructor del Servicio que muestra/oculta las pantallas de cargas.
	 */
	constructor() { }
}
