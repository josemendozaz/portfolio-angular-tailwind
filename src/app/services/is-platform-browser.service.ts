/**
 * IMPORT (MODULES/COMPONENTS/SERVICES)
 */
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
/**
 * @class			IsPlatformBrowserService
 * @description		Servicio que verifica si la plataforma es navegador
 */
@Injectable({
	providedIn	: 'root'
})
/**
 * @class			IsPlatformBrowserService
 * @description		Servicio que verifica si la plataforma es navegador
 */
export class IsPlatformBrowserService {
	/**
	 * @description		Constructor del Servicio que verifica si la plataforma es navegador
	 */
	constructor( @Inject(PLATFORM_ID) private platformId: Object ) { }
	/**
	 * @method			checkPlatformBrowser
	 * @description		Metodo que verifica si la plataforma es navegador, recibe como parametro ID de la plataforma
	 */
	checkPlatformBrowser( platformId : any ) {
		if ( isPlatformBrowser( platformId ) ) {
			// Accede a propiedades del navegador aquí
			return true;
		}
		return false;
	}
}
