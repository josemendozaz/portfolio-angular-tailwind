/**
 * IMPORT (MODULES/COMPONENTS/SERVICES)
 */
import { Component, CUSTOM_ELEMENTS_SCHEMA, NgZone, Renderer2, ViewChild } from '@angular/core';
import { WorksService } from '@services/works.service';
import { Work } from '@models/work.interface';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import { LightgalleryComponent, LightgalleryModule } from 'lightgallery/angular';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { ScreenLoadingService } from '@services/screen-loading.service';
import { LightGallery } from 'lightgallery/lightgallery';
import { LightGallerySettings } from 'lightgallery/lg-settings';
/**
 * @class			WorksComponent
 * @description		Componente que contiene la sección de trabajos realizados
 */
@Component({
	selector	: 'app-works',
	standalone	: true,
	schemas		: [CUSTOM_ELEMENTS_SCHEMA],
	imports		: [
		LightgalleryModule
	],
	template	: `
		<div class="works text-white p-5 h-full relative md:p-10">
			<div class="mt-5 flex flex-col items-center justify-center pt-2 text-center mb-10" data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
				<h2 class="text-light-green text-3xl">Proyectos</h2>
				<div class="arrow-point m-auto mt-3"></div>
				<h5 class="mt-4 text-white text-base pl-0 pr-0 md:text-xl md:pl-10 md:pr-10">
					Cada proyecto es una historia de innovación, retos superados y soluciones a medida. A continuación te presento una selección de trabajos donde aplico mi experiencia técnica para dar vida a plataformas funcionales, modernas y visualmente atractivas. Explora cada uno desde una perspectiva visual y técnica, con descripciones claras y un vistazo directo a su funcionamiento.
				</h5>
			</div>
			<swiper-container
				class="w-auto h-auto pl-5 pr-5 md:pl-15 md:pr-15"
				init="true"
				[allowTouchMove]="true"
				speed="800"
				class="swiper mySwiper"
				slides-per-view="1"
				navigation="true"
				[autoplay-delay]="4000"
				[autoplay-disable-on-interaction]="true"
				[autoplay-pause-on-mouse-enter]="true"
				[autoplay]="true"
				[loop]="true"
			>
				@for (work of works; track work.id) {
					<swiper-slide lazy="true">
						<div class="grid grid-rows-1 gap-4 row-span-1 h-full md:grid-cols-[55%_45%]">
							<!-- Contenedor de imágenes -->
							<div class="bg-[#434343] rounded-md flex flex-col h-full">
								<div class="bg-[#5C5C5C] h-8 rounded-tl-md rounded-tr-md grid grid-cols-[5%_1fr]">
									<div class="flex gap-2 ps-5 items-center">
										<div class="rounded-full p-2 bg-[#434343] hover:bg-[#999999] hover:cursor-pointer"></div>
										<div class="rounded-full p-2 bg-[#434343] hover:bg-[#999999] hover:cursor-pointer"></div>
										<div class="rounded-full p-2 bg-[#434343] hover:bg-[#999999] hover:cursor-pointer"></div>
									</div>
									<div class="items-center text-center mx-auto hidden md:inline-block">
										{{ work.title }}
									</div>
								</div>
								<!-- Contenedor LightGallery -->
								<div class="m-2 rounded-md flex-grow flex flex-col">
									<lightgallery #lightGallery [settings]="settings">
										<!-- Imagen principal con thumbnail -->
										<a
											data-lg-size="1400-1400"
											[attr.data-src]="'/works/projects/' + work.alias + '/' + work.imgs[0]"
											[attr.data-thumb]="'/works/projects/' + work.alias + '/' + work.imgs[0]"
											class="gallery-item cursor-pointer"
										>
										<img
											loading="lazy"
											[src]="'/works/projects/' + work.alias + '/' + work.imgs[0]"
											class="w-full h-auto md:h-[400px] object-cover rounded-md"
											alt=""
										/>
										</a>
										<!-- Miniaturas ocultas (para lightbox) -->
										@for (img of work.imgs.slice(1); track $index) {
											<a
												data-lg-size="1400-1400"
												[attr.data-src]="'/works/projects/' + work.alias + '/' + img"
												[attr.data-thumb]="'/works/projects/' + work.alias + '/' + img"
												class="gallery-item"
											></a>
										}
									</lightgallery>
									<!-- Miniaturas visibles -->
									<div class="thumbnail-carousel gap-2 mt-2 overflow-x-auto py-2 hidden md:flex">
										@for (img of work.imgs; track $index) {
											<div
												class="flex-shrink-0 w-20 h-20 cursor-pointer"
												(click)="openGallery(work.imgs, $index, work)"
											>
												<img
													[src]="'/works/projects/' + work.alias + '/' + img"
													class="w-full h-full object-cover rounded border-2 border-transparent hover:border-blue-400"
													[class.border-blue-400]="$index === 0"
												/>
											</div>
										}
									</div>
								</div>
							</div>
							<!-- Contenido descriptivo -->
							<div class="p-5 pl-1 pr-1 items-center justify-center md:p-5 md:pl-1 md:pr-1">
								<h3 class="text-light-green text-lg text-center md:text-left md:text-3xl">{{ work.title }}</h3>
								<hr class="mt-5 mb-5">
								<br>
								<p class="text-start text-white works-description" [innerHtml]="work.description"></p>
							</div>
						</div>
				    </swiper-slide>
				  }
			</swiper-container>
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
		.lg-outer .lg-thumb-outer {
			background-color: rgba(0, 0, 0, 0.8);
		}

		.lg-thumb-item {
			border-radius: 4px;
			overflow: hidden;
		}
		.lg-thumb-item.active, .lg-thumb-item:hover {
			border: 2px solid #3b82f6; /* Azul similar a tu diseño */
		}
		.thumbnail-carousel {
			-ms-overflow-style: none;  /* Internet Explorer 10+ */
			scrollbar-width: none;  /* Firefox */
		}
		.thumbnail-carousel::-webkit-scrollbar {
			display: none;  /* Safari and Chrome */
		}


		/* Reset completo de transformaciones */
		.lg-outer .lg-item,
		.lg-outer .lg-img-wrap,
		.lg-outer .lg-image {
		  transform: none !important;
		  transition: none !important;
		  animation: none !important;
		}

		/* Fuerza transición básica */
		.lg-outer .lg-item.lg-complete {
		  transition: opacity 0.3s ease-out !important;
		}

		/* Elimina efectos 3D */
		.lg-container {
		  perspective: none !important;
		}

		@media (max-width: 768px) {
			swiper-container::part(button-prev),
			swiper-container::part(button-next) {
				/* Posición absoluta en móvil */
				color 		: white;
				position	: absolute;
				top			: 30%;
				transform	: translateY(-50%);
				width		: 20px;
				height		: 20px;
				z-index		: 10;
			}
			swiper-container::part(button-prev) {
				left	: 10px; /* Ajusta posición izquierda */
			}
			swiper-container::part(button-next) {
				right	: 10px; /* Ajusta posición derecha */
			}
			/* Opcional: Cambiar tamaño de íconos */
			swiper-container::part(button-prev)::after,
			swiper-container::part(button-next)::after {
				font-size	: 20px;
				color		: white;
			}
		}
		@media (max-height: 500px) and (orientation: landscape) {
			/* Para pantallas muy cortas (ej: móviles en landscape) */
			swiper-container::part(button-prev),
			swiper-container::part(button-next) {
				top		: 46%;
				width	: 30px;
				height	: 30px;
				opacity	: 0.7; /* Menos intrusivos */
			}
			/* Reduce el tamaño de las flechas */
			swiper-container::part(button-prev)::after,
			swiper-container::part(button-next)::after {
				font-size	: 16px;
			}
		}
	`
})
/**
 * @class			WorksComponent
 * @description		Componente que contiene la sección de trabajos realizados
 *
 */
export class WorksComponent {
	// @ViewChild('lightGallery') lightGallery!: LightGallery; // <-- Declaración correcta
	@ViewChild('lightGallery') lightGallery!: LightgalleryComponent;
	private lgInitialized = false;
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
	mode: LightGallerySettings['mode'] = 'lg-zoom-in-out'; // Tipo seguro
	/**
	 * @var				settings
	 * @description		Almacena la configuración para el LightgalleryModule
	 */
	settings = {
		counter					: false,
		download				: false,
		plugins					: [lgZoom, lgThumbnail],
		thumbnail				: true,
		// Configuración específica para thumbnails
		thumbWidth				: 80,       // Ancho del thumbnail
		thumbContHeight			: 80,  // Altura del contenedor
		thumbMargin				: 5,        // Margen entre thumbnails
		mode					: this.mode, // <-- Esto es importante, usa 'as const' para el tipo literal
		selector				: '.gallery-item',
		index					: 0,
		loadYouTubeThumbnail	: false, // Importante si no usas YouTube
		exThumbImage			: 'data-thumb' // Atributo donde buscar los thumbnails
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
		private renderer			: Renderer2
	) {
		this.works	= worksService.getAll();
	}
	/**
	 * @method			ngAfterViewInit
	 * @description		Ciclo de vida Init, carga despues de inicializar la vista
	 */
	ngAfterViewInit(): void {
		setTimeout(() => {
			this.lgInitialized = !!(this.lightGallery as any)?.lgInstance;
			console.log('LightGallery initialized:', this.lgInitialized);
		}, 0);

	}
	/**
	 * @method			openGallery
	 * @description		xxxx
	 */
	async openGallery(images: string[], index: number, work : Work ) {
		// Espera a que esté inicializado
		await new Promise(resolve => {
		  const checkInitialization = () => {
			if ((this.lightGallery as any)?.lgInstance) {
			  resolve(true);
			} else {
			  setTimeout(checkInitialization, 50);
			}
		  };
		  checkInitialization();
		});

		const lgInstance = (this.lightGallery as any).lgInstance;

		// Actualiza la galería
		lgInstance.refresh([...images.map(img => ({
		  src: `/works/projects/${work.alias}/${img}`,
		  thumb: `/works/projects/${work.alias}/${img}`
		}))]);

		lgInstance.index = index;
		lgInstance.openGallery();
	  }
}
