/**
 * IMPORT (MODULES/COMPONENTS/SERVICES)
 */
import { Component } from '@angular/core';
import * as AOS from 'aos';
import Bowser from "bowser"; // TypeScript

/**
 * @class			SkillsComponent
 * @description		Componente que contiene la sección de habilidades
 */
@Component({
	selector	: 'app-skills',
	standalone	: true,
	imports		: [],
	template	: `
		<p>
			skills works!
		</p>
	`,
	styles	: ``
})
/**
 * @class			SkillsComponent
 * @description		Componente que contiene la sección de habilidades
 */
export class SkillsComponent {
	/**
	 * @var				isMobile
	 * @description		Almacena booleano que indica si la pagina se está ejecutando desde telefono o desde pc
	 */
	isMobile	: boolean	= false;
	/**
	 * @function		ngOnInit
	 * @description		Ciclo de vida Init, carga al terminar de iniciar la pagina
	 */
	ngOnInit(): void {
		const parser 	= Bowser.getParser(navigator.userAgent);
		this.isMobile	= ( parser.getPlatformType() === 'mobile' ) ? true : false;
		setTimeout(() => {
			AOS.init();
			window.addEventListener('load', AOS.refresh)
		}, 100); // Ajusta este valor si quieres
	}
	/**
	 * @function		onClickButton
	 * @description		Botón del nav menu flotante
	 */
	onClickButton( fragment : string ){
		document!.querySelector( `#${fragment!}` )!.scrollIntoView();
	}
}
