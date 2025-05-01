/**
 * IMPORT (MODULES/COMPONENTS/SERVICES)
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
// import { MaterialModule } from './material/material.module';
// import { HomeComponent } from './components/home/home.component';
// import { SkillsComponent } from './components/skills/skills.component';
// import { WorksComponent } from './components/works/works.component';
// import { NavigationMenuComponent } from "./navigation-menu/navigation-menu.component";
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { FooterComponent } from './components/footer/footer.component';
import { IsPlatformBrowserService } from './services/is-platform-browser.service';
import { ScreenLoadingService } from './services/screen-loading.service';
/**
 * @class			AppComponent
 *
 * @description		Componente que contiene la sección de trabajos realizados
 *
 */
@Component({
	selector	: 'app-root',
	standalone	: true,
	imports		: [/*RouterOutlet*/],
	templateUrl	: './app.component.html',
	styleUrl	: './app.component.css'
})
export class AppComponent {
	// @HostListener('window:resize', ['$event'])
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
