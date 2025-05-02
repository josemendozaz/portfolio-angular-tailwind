/**
 * IMPORT (MODULES/COMPONENTS/SERVICES)
 */
import { Component } from '@angular/core';
/**
 * @class			FooterComponent
 * @description		Componente que contiene la sección de pie de pagina
 */
@Component({
	selector	: 'app-footer',
	standalone	: true,
	imports		: [],
	template	: `
		<div class="footer-area grid grid-cols-[33%_1fr_33%] md:grid-cols-[30%_1fr_30%] pt-2 pb-2 text-light-green bg-[#292f36] border-t-2 border-t-[#43454d]">
			<div class="ps-3 text-start">
				<small class="italic font-semibold">José Mendoza Zavala</small>
			</div>
			<div class="text-center flex items-center justify-center">
				<small class="italic font-semibold">Desarrollado con Angular 19 + Tailwind 4</small>
			</div>
			<div class="text-end">
				<div class="pe-3 inline-block text-center text-white m-auto cursor-pointer link-a">
					<a href="https://www.linkedin.com/in/josemz93/" target="_blank">
						<img class="text-light-green w-[14px] md:w-5" src="/social-network/linkedin.png" alt="">
					</a>
				</div>
				<div class="pe-3 inline-block text-center text-white m-auto cursor-pointer link-a">
					<a href="https://github.com/josemendozaz" target="_blank">
						<img class="text-light-green w-[14px] md:w-5" src="/social-network/github.png" alt="">
					</a>
				</div>
			</div>
		</div>
	`,
	styles		: `
	`
})
/**
 * @class			FooterComponent
 * @description		Componente que contiene la sección de pie de pagina
 */
export class FooterComponent {
	/**
	 * @function		constructor
	 * @description		Constructor del componente
	 */
	constructor(){}
}
