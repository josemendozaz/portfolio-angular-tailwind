/**
 * IMPORT MODULES
 */
import { Component, ElementRef, HostListener, Inject, inject, Injector, NgZone, PLATFORM_ID, Renderer2, ViewChild } from '@angular/core';
import {
	NavigationCancel,
	NavigationEnd,
	NavigationError,
	NavigationStart,
	Router,
	Event as RouterEvent,
	RouterModule,
	RouterOutlet
} from '@angular/router';
/**
 * IMPORT COMPONENTS
 */
import { NavigationMenuComponent } from "@components/navigation-menu.component";
import { HomeComponent } from '@components/home.component';
import { SkillsComponent } from "@components/skills.component";
import { WorksComponent } from '@components/works.component';
import { FooterComponent } from '@components/footer.component';
/**
 * IMPORT SERVICES
 */
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IsPlatformBrowserService } from '@services/is-platform-browser.service';
import { ScreenLoadingService } from '@services/screen-loading.service';
/**
 * @class			AppComponent
 *
 * @description		Componente que contiene la sección de trabajos realizados
 *
 */
@Component({
	selector	: 'app-root',
	standalone	: true,
	imports: [
		/*RouterOutlet*/
		NavigationMenuComponent,
		HomeComponent, /* COMPONENT */
		FooterComponent,
		SkillsComponent,
		WorksComponent
	],
	template	: `
		<!-- SCREEN LOADING -->
		@if( screenLoadingService.getValue ) {
			<!-- <div class="spinner-container text-center">
				<mat-spinner class="position-absolute white" strokeWidth="5" [diameter]="150"></mat-spinner>
				<img class="position-absolute spinner-logo" src="/logo_jmz.png" onError="this.onerror=null;this.src='../../../../assets/images/logos/sigesco-spinner.png';">
				<h4 class="position-absolute mt-5 w-100 h-100 d-flex text-light-green">Espere un momento por favor...</h4>
			</div> -->
		}
		<!-- NAVIGATION MENU -->
		<app-navigation-menu></app-navigation-menu>
		<!-- CONTENT -->
		<div class="min-h-screen bg-[#292F36] flex flex-col">
			<div class="flex-1">
				<!-- ABOUT ME -->
				<div id="home" class="h-full md:h-screen">
					<app-home></app-home>
				</div>
				<!-- SKILL -->
				<div id="skills" class="relative bg-[#1A1E23] h-full md:h-full">
					<div class="skills-section-bg bg-[url(/background/circuit.png)] bg-[rgba(26,30,35,1)] bg-blend-overlay bg-left bg-no-repeat bg-auto w-full h-full absolute"></div>
					<app-skills></app-skills>
				</div>
				<!-- WORKS -->
				<div id="works" class="relative bg-[#1A1E23] h-full md:h-full">
					<div class="works-section-bg bg-[url(/background/pc-bg2.jpg)] bg-[rgba(26,30,35,1)] bg-blend-overlay bg-left bg-no-repeat bg-cover w-full h-full absolute"></div>
					<app-works class="relative"></app-works>
				</div>
			</div>
			<!-- Footer que siempre estará abajo -->
			<div id="footer" class="mt-auto">
				<app-footer class="footer-section-app"></app-footer>
			</div>
		</div>
	`,
	styleUrl	: './app.component.css'
})
export class AppComponent {
	// @HostListener('window:resize', ['$event'])
	/**
	 * @var				loading : boolean
	 * @description		variable boolean que indica si se debe mostrar el spinner de carga
	 */
	title	: string	= 'Home';
	/**
	 * @var				loading : boolean
	 * @description		variable boolean que indica si se debe mostrar el spinner de carga
	 */
	loading	: boolean	= true;
	/**
	 * @var				innerHeight : number
	 * @description		variable númerica que almacena el largo de la página
	 */
	innerHeight : number	= 0;
	/**
	 * @var				fragment : string
	 * @description		variable string que almacena los id de los divs de los sections
	 */
	fragment: string | undefined;
	/**
	 * @var				isBrowser
	 * @description		Variable que almacena un booleano que indica si es navegador o no
	 */
	isBrowser	: boolean	= false;
	/**
	 * @method			onScroll
	 * @description		Método para el scroll
	 */
	@HostListener("wheel", ["$event"])
	public onScroll( event: WheelEvent ) {}
	/**
	 * @function		constructor
	 * @description		Constructor del componente
	 */
	constructor(
		private renderer						: Renderer2,
		private isPlataformBrowserService		: IsPlatformBrowserService,
		public screenLoadingService 			: ScreenLoadingService,
		@Inject(PLATFORM_ID) private platformId	: Object,
		private ngZone							: NgZone,
		private router							: Router,
	) {
		this.isBrowser = this.isPlataformBrowserService.checkPlatformBrowser( this.platformId );
		if ( this.isBrowser ) {
			this.innerHeight = window.screen.height;
		}
		router.events.subscribe( this._navigationInterceptor.bind(this) );
	}
	/**
	 * @method			_navigationInterceptor
	 * @description		Muestra y oculta la pantalla de carga durante los cambios de eventos del enrutador
	 */
	_navigationInterceptor( event: RouterEvent ) : void {
		this.loading	= this.screenLoadingService.getValue;
		//// Se ejecuta esta función fuera de la zona angular para evitar la detección de cambios
		if ( event instanceof NavigationStart ) { this.ngZone.runOutsideAngular(() => { this.loading = false; }); }
		//// Se establecen el estado de la pantalla de carga en falso en caso de: terminar de cargar la ruta o de que falle alguna solicitud
		if ( event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError ) { this.loading = false; }
		setTimeout( () => { this.screenLoadingService.setValue	= this.loading; }, 200);
  	}
	/**
	 * @method			ngAfterViewInit
	 * @description		Ciclo que inicia una vez cargada la pagina
	 */
	ngAfterViewInit(): void {
		try {
			document!.querySelector( '#' + this.fragment! )!.scrollIntoView();
		} catch (e) {}
	}
}
