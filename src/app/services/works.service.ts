/**
 * IMPORT (MODULES/COMPONENTS/SERVICES)
 */
import { Injectable } from '@angular/core';
import { Work } from '@models/work.interface';
/**
 * @class			WorksService
 * @description		Servicio de tarbajos realizados
 */
@Injectable({
	providedIn	: 'root'
})
/**
 * @class			WorksService
 * @description		Servicio de tarbajos realizados
 */
export class WorksService {
	/**
	 * @var				works
	 * @description		Arreglo de objetos que almacena todos los proyectos realizados
	 */
	works : Work[] = [
		{
			id			: 1,
			alias		: 'sysmatick',
			title		: `Sistema de Gestión de turnos de pacientes (SYSMATICK)`,
			description : `Este sistema ha sido diseñado para optimizar por completo el proceso de atención al paciente en centros médicos. Su principal objetivo es reducir los tiempos de espera, mejorar la experiencia del usuario y aumentar la eficiencia operativa del personal.\nLa solución incluye un monitor de turnos en tiempo real, impresión automatizada de tickets, una interfaz amigable de dispensador de turnos accesible desde cualquier dispositivo móvil y un panel administrativo intuitivo para el personal del centro. Todo esto se traduce en una atención más ágil, organizada y de mayor calidad para los pacientes, y en una mejor distribución del trabajo para el personal.<br><br><small class="fw-bold fst-italic">Los datos presentados en estas imágenes son simulados y utilizados exclusivamente para propósitos de demostración.</small>`,
			imgs 		: ['1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png','9.png','10.png'],
			technology	: [
				{
					name 	: 'Angular',
					icon	: ''
				},
				{
					name 	: 'Codeigniter 3',
					icon	: ''
				},
				{
					name 	: 'Boostrap 5',
					icon	: ''
				}
			]
		},
		{
			id			: 2,
			alias		: 'siress',
			title		: `Sistema de Registro de Eventos Situacional (SIRES)`,
			description : `Este sistema web está diseñado para fortalecer la gestión estratégica del personal dentro de una Sala Situacional, optimizando la recopilación, análisis y visualización de datos en tiempo real. A través de representaciones gráficas y geográficas interactivas, permite un seguimiento detallado, control y monitoreo continuo de situaciones críticas, así como de la operatividad general de la empresa.<br><br>Gracias a su enfoque centrado en la toma de decisiones, esta herramienta se convierte en un apoyo clave para la alta gerencia de una empresa de telecomunicaciones, facilitando respuestas oportunas, eficientes y basadas en información precisa. El sistema no solo mejora la eficiencia operativa, sino que transforma los datos en decisiones acertadas y oportunas para un liderazgo más efectivo.<br><br><small class="fw-bold fst-italic">Los datos presentados en estas imágenes son simulados y utilizados exclusivamente para propósitos de demostración.</small>`,
			imgs 		: ['1.png','2.png','3.png','4.png','5.png'],
			technology	: [
				{
					name 	: 'Angular',
					icon	: ''
				},
				{
					name 	: 'Codeigniter 3',
					icon	: ''
				},
				{
					name 	: 'Boostrap 5',
					icon	: ''
				}
			]
		},
		{
			id			: 3,
			alias		: 'magda',
			title		: `Pagina y sistema de gestión de inmobiliaria`,
			description : `Plataforma web diseñada para la compra de bienes inmuebles mediante criptoactivos, específicamente Bitcoin (BTC), brindando una experiencia moderna, segura y descentralizada para los inversionistas.<br><br>El sistema cuenta con un buscador inteligente y visualizador de propiedades que permite a los usuarios filtrar, explorar y encontrar inmuebles de forma rápida e intuitiva. Además, incluye un completo panel administrativo desde el cual el personal de la inmobiliaria puede gestionar y publicar propiedades, incluyendo imágenes, características, ubicación y precios en moneda fiat y criptomoneda.<br><br>Esta solución representa el futuro del sector inmobiliario, fusionando tecnología blockchain con una interfaz amigable y adaptable a las nuevas demandas del mercado.`,
			imgs 		: ['1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png','9.png','10.png','11.png','12.png','13.png'],
			technology	: [
				{
					name 	: 'Codeigniter 3',
					icon	: ''
				},
				{
					name 	: 'Boostrap 5',
					icon	: ''
				}
			]
		},
		{
			id			: 4,
			alias		: `orbis`,
			title		: `Pagina Exchange`,
			description : `Desarrollo y maquetación de un sitio web responsive para una plataforma de exchange de criptomonedas, implementado sobre CodeIgniter 3.<br><br>El portal fue diseñado para mostrar de forma clara y atractiva los servicios ofrecidos por el exchange, así como para integrar, mediante consumo de API en tiempo real, la visualización dinámica de los diferentes mercados de criptomonedas disponibles.<br><br> El sitio fue optimizado para ofrecer una experiencia fluida y adaptativa en múltiples dispositivos, garantizando accesibilidad desde smartphones, tablets y equipos de escritorio. Además, se implementó soporte multilenguaje, permitiendo a usuarios de distintas regiones interactuar en su idioma nativo, mejorando significativamente la experiencia de navegación y ampliando el alcance global de la plataforma.<br><br><small class="fw-bold fst-italic">Los datos presentados en estas imágenes son simulados y utilizados exclusivamente para propósitos de demostración.</small>`,
			imgs 		: ['1.png','2.png','3.png','4.png','5.png'],
			technology	: [
				{
					name 	: 'Codeigniter 3',
					icon	: ''
				},
				{
					name 	: 'Boostrap 4',
					icon	: ''
				}
			]
		},
		{
			id			: 5,
			alias		: `auri`,
			title		: `Pagina de ICO de token crypto`,
			description : `
				Plataforma web desarrollada para respaldar una Oferta Inicial de Monedas (ICO), diseñada con el objetivo de brindar una experiencia segura, clara y funcional tanto para inversionistas como para usuarios interesados en el ecosistema del criptoactivo.<br><br>La página incluía una presentación detallada de los servicios ofrecidos, así como un completo dashboard personalizado, desde donde los usuarios podían:<br><br>

				<ul>
					<li>
						Adquirir el criptoactivo de forma rápida y segura
					</li>
					<li>
						Solicitar servicios relacionados con el proyecto
					</li>
					<li>
						Visualizar su saldo y movimientos en tiempo real, con total transparencia
					</li>
				</ul>
			<br><br><small class="fw-bold fst-italic">Los datos presentados en estas imágenes son simulados y utilizados exclusivamente para propósitos de demostración.</small>`,
			imgs 		: ['1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png','9.png','10.png','11.png','12.png'],
			technology	: [
				{
					name 	: 'Codeigniter 3',
					icon	: ''
				},
				{
					name 	: 'Boostrap 5',
					icon	: ''
				}
			]
		},
	]
	/**
	 * @description		Constructor del Servicio de proyectos realizados
	 */
	constructor() { }
	/**
	 * @method			getAll
	 * @description		Metodo que consulta todos los proyectos realizados
	 */
	getAll() {
		return this.works;
	}
}
