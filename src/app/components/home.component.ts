/**
 * IMPORT (MODULES/COMPONENTS/SERVICES)
 */
import { Component } from '@angular/core';
import * as AOS from 'aos';
import Bowser from "bowser";
/**
 * @class			WorksComponent
 * @description		Componente que contiene la sección de trabajos realizados
 */
@Component({
	selector	: 'app-home',
	imports		: [],
	template	: `
		<div class="nav-header pt-8 md:pt-10 lg:pt-5">
			<div class="menu w-full">
				<div class="grid grid-cols-[30%_20%_20%_15%_15%] md:grid-cols-[30%_20%_20%_15%_15%] md:items-center md:justify-center">
					<div class="flex items-center justify-center cursor-pointer text-center">
						<h1 class="text-[10px] text-light-green md:ml-0 md:text-3xl lg:text-2xl"> &lt;c/&gt; </h1>
						<h2 class="text-[10px] text-white md:text-3xl lg:text-2xl">&nbsp;José Mendoza</h2>
					</div>
					<div class="text-[10px] text-center text-white m-auto cursor-pointer md:text-xl">
						<a href="javascript:void(0)" (click)="onClickButton( 'skills' )">
							Habilidades
						</a>
					</div>
					<div class="text-[10px] text-center text-white m-auto cursor-pointer md:text-xl">
						<a href="javascript:void(0)" (click)="onClickButton( 'works' )">
							Trabajos
						</a>
					</div>
					<!-- LinkedIn -->
					<div class="flex items-center justify-center cursor-pointer">
						<a class="flex items-center" href="https://www.linkedin.com/in/josemz93/" target="_blank">
						<img class="w-[14px] md:w-5" src="/social-network/linkedin.png" alt="">
						<span class="text-white hidden ml-2 md:inline-block md:text-xl">LinkedIn</span>
						</a>
					</div>

					<!-- GitHub -->
					<div class="flex items-center justify-center cursor-pointer">
						<a class="flex items-center" href="https://github.com/josemendozaz" target="_blank">
						<img class="w-[14px] md:w-5" src="/social-network/github.png" alt="">
						<span class="text-white hidden ml-2 md:inline-block md:text-xl">Github</span>
						</a>
		  			</div>
				</div>
			</div>
			<div class="mt-4 mb-2">
				<div class="w-[90%] mx-auto">
					<hr class="border-[#43454d]">
				</div>
			</div>
		</div>
		<div class="title mt-5 mb-5">
			<h1 class="col-12 text-light-green text-center text-2xl md:text-5xl lg:text-4xl">
				Desarrollador de Software
			</h1>
		</div>
		<div class="about-me grid grid-cols-1 md:grid-cols-[30%_1fr_28.5%] md:pl-15 md:pr-15">
			<div class="items-center justify-center pl-12 pr-12 pb-0 md:pl-18 md:pr-18 md:pt-0 md:pb-18 my-auto" data-aos="zoom-in-right" data-aos-easing="ease-out-cubic" data-aos-duration="50">
				<div class="relative border-2 border-[#98FAEC] rounded-tl-[80px] rounded-br-[80px] p-5 pt-10 pb-10 shadow-[-2px_-1px_1px_#fff]">
					<div class="l-0 r-0">
						<img loading="lazy" class="w-36 h-36 rounded-full m-auto" src="/image/foto_jmz_profile.jpg" alt="">
					</div>
					<div class="text-center mt-4 p-3">
						<h5 class="text-light-green fw-bold text-xl font-bold">
							José Mendoza Zavala
						</h5>
						<small class="text-white text-sm font-bold">
							Full-stack developer
						</small>
						<div class="grid grid-cols-[10%_1fr] mt-4 items-center">
							<!-- EMAIL -->
							<div class="text-end">
								<img class="text-light-green" src="icon-profile/icon-mail.png" alt="">
							</div>
							<div class="text-start">
								<span class="text-white text-sm break-normal">
									${'josemendozaz1993&#64;gmail.com'}
								</span>
							</div>
						</div>
						<div class="grid grid-cols-[10%_1fr] mt-4 items-center">
							<!-- LOCATION -->
							<div class="text-end">
								<img class="text-light-green" src="icon-profile/icon-map-pin.png" alt="">
							</div>
							<div class="text-start">
								<span class="text-white text-sm break-normal">
									Venezuela
								</span>
							</div>
						</div>
						<div class="grid grid-cols-[10%_1fr] mt-4 items-center">
							<!-- EMAIL -->
							<div class="text-end">
								<img class="text-light-green" src="icon-profile/icon-briefcase.png" alt="">
							</div>
							<div class="text-start">
								<span class="text-white text-sm break-normal">
									Freelancer
								</span>
							</div>
						</div>
					</div>
					<div class="mt-1 flex flex-row items-center justify-center">
						<div class="text-[10px] text-center font-semibold ps-1 pe-1 w-11">
							<div class="bg-[#12f7d6] rounded-[10px] text-center fw-bold"> HTML </div>
						</div>
						<div class="text-[10px] text-center font-semibold ps-1 pe-1 w-11">
							<div class="bg-[#12f7d6] rounded-[10px] text-center fw-bold"> CSS </div>
						</div>
						<div class="text-[10px] text-center font-semibold ps-1 pe-1 w-11">
							<div class="bg-[#12f7d6] rounded-[10px] text-center fw-bold"> JS </div>
						</div>
						<div class="text-[10px] text-center font-semibold ps-1 pe-1 w-11">
							<div class="bg-[#12f7d6] rounded-[10px] text-center fw-bold"> PHP </div>
						</div>
						<div class="text-[10px] text-center font-semibold ps-1 pe-1 w-11">
							<div class="bg-[#12f7d6] rounded-[10px] text-center fw-bold"> SQL </div>
						</div>
					</div>
				</div>
			</div>
			<div class="pt-5 pl-15 pr-15 lg:pl-0 md:pr-0 md:pl-0 lg:pr-0 my-auto" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="50">
				<div class="box-about-me text-light-green">
					<small class="text-sm"> &lt;h1&gt; </small>
					<h1 class="text-xl ps-3 font-bold">
						Hola!,<br>
						Soy <span class="text-light-green">José Mendoza</span><small class="text-sm fw-normal"> &lt;/h1&gt;</small>
					</h1>
					<br>
					<small class="text-sm"> &lt;p&gt; </small>
					<p class="mb-0 ps-3 text-white">
							Ingeniero en Sistemas con enfoque en desarrollo web, especializado en tecnologías como HTML, CSS, JavaScript y PHP. Apasionado por la programación limpia y eficiente, me destaco por ser una persona proactiva, optimista y comprometida con cada proyecto. Siempre en búsqueda de nuevos conocimientos, me esfuerzo continuamente por mejorar mis habilidades y mantenerme al día con las mejores prácticas del desarrollo moderno.
					</p>
					<small class="text-sm"> &lt;/p&gt; </small>
				</div>
				<div class="w-full mt-10 text-center md:inline-block hidden items-center justify-center">
					<img loading="lazy" class="arrow w-16 cursor-pointer mx-auto" src="arrow.png" alt="" (click)="onClickButton( 'skills' )">
				</div>
			</div>
			<div class="pt-4 pb-4 my-auto" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="50">
				<div class="w-58 box-items p-10 rounded-[80px] bg-[#1a1e23] mx-auto">
					<div class="grid grid-cols-[20%_1fr] mt-4 items-center">
						<div class="text-center">
							<h2 class="text-3xl m-auto text-light-green">4</h2>
						</div>
						<div class="text-start">
							<span class="text-white text-sm break-normal">
								Lenguajes de Programación
							</span>
						</div>
					</div>
					<div class="grid grid-cols-[20%_1fr] mt-4 items-center">
						<div class="text-center">
							<h2 class="text-3xl m-auto text-light-green">5</h2>
						</div>
						<div class="text-start">
							<span class="text-white text-sm break-normal">
								Herramientas de desarollo
							</span>
						</div>
					</div>
					<div class="grid grid-cols-[20%_1fr] mt-4 items-center">
						<div class="text-center">
							<h2 class="text-3xl m-auto text-light-green">6</h2>
						</div>
						<div class="text-start">
							<span class="text-white text-sm break-normal">
								Años de Experiencia
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	`,
	styles		: ``
})
/**
 * @class			WorksComponent
 * @description		Componente que contiene la sección de trabajos realizados
 */
export class HomeComponent {
	/**
	 * @var				isMobile
	 * @description		Almacena booleano que indica si la pagina se está ejecutando desde telefono o desde pc
	 */
	isMobile	: boolean	= false;
	/**
	 * @function		constructor
	 * @description		Constructor del componente
	 */
	constructor() {}
	/**
	 * @function		ngOnInit
	 * @description		Ciclo de vida Init, carga al terminar de iniciar la pagina
	 */
	ngOnInit(): void {
		setTimeout(() => {
			AOS.init();
			window.addEventListener('load', AOS.refresh)
		}, 12000);
		const parser 	= Bowser.getParser(navigator.userAgent);
		this.isMobile	= ( parser.getPlatformType() === 'mobile' ) ? true : false;
	}
	/**
	 * @function		onClickButton
	 * @description		Botón del nav menu flotante
	 */
	onClickButton( fragment : string ){
		document!.querySelector( `#${fragment!}` )!.scrollIntoView();
	}
}
