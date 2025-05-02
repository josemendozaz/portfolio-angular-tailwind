import { Component, Input } from '@angular/core';

@Component({
	selector	: 'app-nav-header',
	imports		: [],
	template	: `
		<div class="menu w-full md:w-[95%]">
			<div class="grid grid-cols-[30%_20%_20%_15%_15%] md:grid-cols-[30%_20%_20%_15%_15%] md:items-center md:justify-center">
				<div class="flex items-center justify-center cursor-pointer text-center">
					<h1 class="text-[10px] text-light-green md:ml-0 md:text-3xl lg:text-2xl"> &lt;c/&gt; </h1>
					<h2 class="text-[10px] text-white md:text-3xl lg:text-2xl">&nbsp;José Mendoza</h2>
				</div>
				<div class="text-[10px] text-center text-white m-auto cursor-pointer md:text-xl">
					<a href="#" (click)="handleClick($event, 'skills')">
						Habilidades
					</a>
				</div>
				<div class="text-[10px] text-center text-white m-auto cursor-pointer md:text-xl">
					<a href="#" (click)="handleClick($event, 'works')">
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
	`,
	styles		: ``
})
export class NavHeaderComponent {
	// @Input() onClickButton!: (fragment: string) => void; // Asegúrate de que coincida con la firma
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
