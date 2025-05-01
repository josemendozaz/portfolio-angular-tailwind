/**
 * IMPORT (MODULES/COMPONENTS/SERVICES)
 */
import { Component, CUSTOM_ELEMENTS_SCHEMA, NgZone } from '@angular/core';
import { WorksService } from '@services/works.service';
import { Work } from '@models/work.interface';
import lgZoom from 'lightgallery/plugins/zoom';
import { LightgalleryModule } from 'lightgallery/angular';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { ScreenLoadingService } from '@services/screen-loading.service';
/**
 * @class			WorksComponent
 * @description		Componente que contiene la sección de trabajos realizados
 */
@Component({
	selector	: 'app-works',
	imports		: [ /*CUSTOM_ELEMENTS_SCHEMA*/ ],
	template	: `
		<p>
			works works!
		</p>
	`,
	styles	: ``
})
/**
 * @class			WorksComponent
 * @description		Componente que contiene la sección de trabajos realizados
 *
 */
export class WorksComponent {
	/**
	 * @var				screenLoading
	 * @description		Bandera que sirve para ocultar/mostrar las pantallas de carga
	 */
	public screenLoading	: boolean	= false;
	/**
	 * @var				slideChange
	 * @description		Almacena todos los proyectos consultados en el servicio WorksService
	 */
	slideChange : boolean = false;
	/**
	 * @var				works
	 * @description		Almacena todos los proyectos consultados en el servicio WorksService
	 */
	works : Work[] = [];
	/**
	 * @var				settings
	 * @description		Almacena la configuración para el LightgalleryModule
	 */
    settings	= {
        counter		: false,
        plugins		: [ lgZoom ],
		download	: false,
		zoom 		: false
    };
	/**
	 * @method			onBeforeSlide
	 * @description		Almacena todos los proyectos consultados en el servicio WorksService
	 */
    onBeforeSlide	= ( detail: BeforeSlideDetail )	: void => {
		const { index, prevIndex } = detail;
    };
	/**
	 * @method			constructor
	 * @description		Constructor del componente
	 */
	constructor(
		public zone					: NgZone,
		public screenLoadingService	: ScreenLoadingService,
		public worksService			: WorksService,
	) {
		this.works	= worksService.getAll();

	}
	/**
	 * @method			ngAfterViewInit
	 * @description		Ciclo de vida Init, carga despues de inicializar la vista
	 */
	ngAfterViewInit(): void {
		const bootstrapCarousel	= document.getElementById('carouselExternal')!;
		if (!bootstrapCarousel) return;
		bootstrapCarousel.addEventListener('slid.bs.carousel', () => {
			this.slideChange	= true;
			this.initSwipers();
		});
		this.initSwipers(); // Inicialización en primer render
	}
	/**
	 * @method			initSwipers
	 * @description		Inicia/Reinicia el Carousel Swipers
	 */
	initSwipers() {
		// Tiempo justo para que DOM se pinte post-transición
		setTimeout(() => {
			if ( this.slideChange ) { this.screenLoading	= true; }
			const activeItem = document.querySelector('.carousel-item.active');
			if (!activeItem) return;
			const swiperEl = activeItem.querySelector('swiper-container') as any;
			if (!swiperEl) { return; }
			if (!swiperEl.swiper) {
				swiperEl.initialize?.();
				setTimeout( () => { if ( this.slideChange ) { this.screenLoading	= false; } }, 20000);
			} else {
				swiperEl.swiper.update();
				swiperEl.swiper.slideTo(0);
				swiperEl.swiper.autoplay?.start();
				setTimeout( () => { if ( this.slideChange ) { this.screenLoading	= false; } }, 20000);
			}
		}, 200);
	}
}
