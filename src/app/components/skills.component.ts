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
		<div class="skills p-5 pt-10 pb-10 md:p-35 md:pt-10 md:pb-15">
			<div class="w-full float-end mb-2" data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
				<img loading="lazy" class="icon-code w-25 float-end" src="/skills/_.png" alt="">
			</div>
			<div class="text-center">
				<h2 class="text-light-green text-2xl" data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="1000">Habilidades</h2>
				<div class="relative w-44 h-0.5 arrow-point m-auto" data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="1000"></div>
				<h5 class="mt-4 text-white text-start text-md-center" data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="1000">Combino pasión por el código con una mentalidad en constante evolución. Cada tecnología que domino es una herramienta más para construir soluciones sólidas, modernas y escalables. Mi enfoque está en aprender siempre, mejorar continuamente y desarrollar con propósito.</h5>
				<div class="mt-5 flex flex-col md:flex-row gap-10 md:gap-40 items-center justify-center">
					<div class="w-2xs rounded-md border-l-4 border-l-[#f62ba0] bg-[#d1e7dd] text-center pt-4 pb-4" [attr.data-aos]="( isMobile ) ? 'zoom-in' : 'zoom-in-right'" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
						<div class="w-full">
							<img loading="lazy" class="w-8 mx-auto" src="/skills/icon-monitor.png" alt="">
						</div>
						<h4 class="text-2xl mt-2">
							Desarrollo Web
						</h4>
						<h6 class="text-base">
							HTML • CSS • JS • PHP • SQL
						</h6>
					</div>
					<div class="w-2xs rounded-md border-l-4 border-l-[#0054e9] bg-[#d1e7dd] text-center pt-4 pb-4" [attr.data-aos]="( isMobile ) ? 'zoom-in' : 'zoom-in-left'"   data-aos-easing="ease-out-cubic" data-aos-duration="1000">
						<div class="w-full">
							<img loading="lazy" class="w-8 mx-auto" src="/skills/icon-smartphone.png" alt="">
						</div>
						<h4 class="text-2xl mt-2">
							Desarrollo Movil
						</h4>
						<h6 class="text-base">
							iOS • Android
						</h6>
					</div>
				</div>
				<div class="flex flex-col md:flex-row mt-10">
					<div class="w-full skills-items mt-2 mb-2 md:mt-0 md:mb-0" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
						<img loading="lazy" class="w-28 mb-2 mx-auto" src="/skills/angular.png" alt="">
						<h5 class="text-light-green">
							Angular
						</h5>
						<p class="text-white text-skills">
							Es un framework para aplicaciones web desarrollado en TypeScript, de código abierto, que se utiliza para crear y mantener aplicaciones web de una sola página.
						</p>
					</div>
					<div class="w-full skills-items mt-2 mb-2 md:mt-0 md:mb-0" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
						<img loading="lazy" class="w-28 mb-2 mx-auto" src="/skills/nodejs.png" alt="">
						<h5 class="text-light-green">
							NodeJS
						</h5>
						<p class="text-white text-skills">
							Entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript.
						</p>
					</div>
					<div class="w-full skills-items mt-2 mb-2 md:mt-0 md:mb-0" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
						<img loading="lazy" class="w-28 mb-2 mx-auto" src="/skills/nest.png" alt="">
						<h5 class="text-light-green">
							NestJS
						</h5>
						<p class="text-white text-skills">
							Es un framework progresivo de Node.js para la creación de aplicaciones eficientes, confiables y escalables del lado del servidor.
						</p>
					</div>
					<div class="w-full skills-items mt-2 mb-2 md:mt-0 md:mb-0" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
						<img loading="lazy" class="w-28 mb-2 mx-auto" src="/skills/ionic.png" alt="">
						<h5 class="text-light-green">
							Ionic
						</h5>
						<p class="text-white text-skills">
							Es una estructura tecnológica (Framework)  de código abierto que se utiliza en el desarrollo de aplicaciones móviles híbridas
						</p>
					</div>
					<div class="w-full skills-items mt-2 mb-2 md:mt-0 md:mb-0" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
						<img loading="lazy" class="w-28 mb-2 mx-auto" src="/skills/codeigniter3.png" alt="">
						<h5 class="text-light-green">
							Code Igniter 3
						</h5>
						<p class="text-white text-skills">
							Es framework PHP de gran rendimiento con arquitectura compacta y liviana parar crear aplicaciones Web bajo el estandar modelo vista controlador (MVC).
						</p>
					</div>
					<div class="w-full skills-items mt-2 mb-2 md:mt-0 md:mb-0" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
						<img loading="lazy" class="w-28 mb-2 mx-auto" src="/skills/bd.png" alt="">
						<h5 class="text-light-green">
							Maria DB, MYSQL y PostgreSQL
						</h5>
						<p class="text-white text-skills">
							Sistemas de gestión de bases de datos relacional orientado a objetos y de código abierto.
						</p>
					</div>
				</div>
				<div class="row mt-2">
					<div class="w-full mt-10 text-center md:inline-block hidden items-center justify-center">
						<img loading="lazy" class="arrow w-16 cursor-pointer mx-auto" src="arrow.png" alt="" (click)="onClickButton( 'works' )">
					</div>
				</div>
			</div>
		</div>

	`,
	styles	: `
		.arrow-point {
			position	: relative;
			width		: 180px;
			height		: 2px;
			display		: flex;
			align-items	: center;
		}
		.arrow-point::before,
		.arrow-point::after {
			content				: '';
			position			: absolute;
			width				: 10px;
			height				: 10px;
			background-color	: #98FAEC;
			border-radius		: 50%;
		}
		.arrow-point::before {
			left	: 0;
		}
		.arrow-point::after {
			right	: 0;
		}
		.arrow-point { /* Línea delgada */
			background	: linear-gradient(to right, transparent 5px, #98FAEC 2px, #98FAEC calc(100% - 5px), transparent calc(100% - 30px));
		}
	`
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
