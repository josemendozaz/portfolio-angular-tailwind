/**
 * IMPORT (MODULES/COMPONENTS/SERVICES)
 */
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import Bowser from 'bowser';
/**
 * @class			NavigationMenuComponent
 * @description		Componente que contiene el menu de navegación flotante
 */
@Component({
	selector: 'app-navigation-menu',
	imports: [],
	template: `
		<!-- NAVIGATION BAR FLOAT -->
		<div class="fixed top-0 left-0 right-0 m-auto h-[6px] translate-y-full w-[95%] mx-auto opacity-0 transition-all duration-200 ease-in-out -z-50 md:bottom-0 md:left-5 md:w-auto md:top-[40vh] md:h-auto md:z-10 md:translate-none md:opacity-100 md:right-auto" [class.show-nav-header]="showNavbar">
			<div class="items-center justify-center w-full border-[2px] border-solid border-white md:w-14 mx-auto md:h-auto bg-[#1a1e23] p-2.5 rounded-3xl">
				<div class="flex flex-row md:flex-col items-center justify-center gap-5 md:gap-2">
					<div class="cursor-pointer p-0 m-auto text-center ml-4 mr-4 md:ml-0 md:mr-0 md:mt-2 md:mb-2">
						<a href="#" (click)="handleClick($event, 'home')">
							<img class="w-4 md:w-7" src="menu-icons/icon-user.png" alt="">
						</a>
					</div>
					<div class="cursor-pointer p-0 m-auto text-center ml-4 mr-4 md:ml-0 md:mr-0 md:mt-2 md:mb-2">
						<a href="#" (click)="handleClick($event, 'skills')">
							<img class="w-4 md:w-7" src="menu-icons/icon-code.png" alt="">
						</a>
					</div>
					<div class="cursor-pointer p-0 m-auto text-center ml-4 mr-4 md:ml-0 md:mr-0 md:mt-2 md:mb-2">
						<a href="#" (click)="handleClick($event, 'works')">
							<img class="w-4 md:w-7" src="menu-icons/icon-monitor.png" alt="">
						</a>
					</div>
				</div>
			</div>
		</div>
	`,
	styles: `
		.show-nav-header {
			transform	: translateY(0%);
			opacity		: 1;
			z-index		: 50;
		}
	`
})
/**
 * @class			NavigationMenuComponent
 * @description		Componente que contiene el menu de navegación flotante
 */
export class NavigationMenuComponent {
	/**
	 * @var				isMobile
	 * @description		Almacena booleano que indica si la pagina se está ejecutando desde telefono o desde pc
	 */
	isMobile	: boolean	= false;



	showNavbar = false;
	/**
	 * @function		constructor
	 * @description		Constructor del componente
	 */
	constructor() {}
	@HostListener('window:scroll', [])
	onWindowScroll() {
		const parser 	= Bowser.getParser(navigator.userAgent);
		this.isMobile	= ( parser.getPlatformType() === 'mobile' ) ? true : false;
		if ( this.isMobile ) {
			this.showNavbar = window.scrollY > 100;
		}
	}
	/**
	 * @function		onClickButton
	 * @description		Botón del nav menu flotante
	 */
	onClickButton( fragment : string ){
		document!.querySelector( `#${fragment!}` )!.scrollIntoView();
	}
	/**
	 * @function		onClickButton
	 * @description		Evita el comportamiento por defecto del anchor
	 */
	handleClick(event: Event, section: string) {
		event.preventDefault(); // Evita el comportamiento por defecto del anchor
		this.onClickButton(section); // Tu lógica
	}
}
