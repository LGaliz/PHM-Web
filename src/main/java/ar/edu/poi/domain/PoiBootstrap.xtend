package ar.edu.poi.domain

import ar.edu.POIs.Cgp
import ar.edu.POIs.Comuna
import ar.edu.POIs.Direccion
import ar.edu.POIs.HorarioDeAtencion
import ar.edu.POIs.Poi
import ar.edu.POIs.Rubro
import ar.edu.POIs.Servicio
import ar.edu.RepoUsuario.RepositorioUsuario
import ar.edu.builder.BancoBuilder
import ar.edu.builder.ColectivoBuilder
import ar.edu.builder.DireccionBuilder
import ar.edu.builder.HorarioDeAtencionBuilder
import ar.edu.builder.LocalComercialBuilder
import ar.edu.calificaciones.Calificacion
import ar.edu.calificaciones.Review
import ar.edu.singleton.RepositorioSingleton
import ar.edu.usuario.Usuario
import java.util.Arrays
import org.uqbar.arena.bootstrap.CollectionBasedBootstrap
import org.uqbar.commons.utils.ApplicationContext
import org.uqbar.geodds.Point
import org.uqbar.geodds.Polygon

class PoiBootstrap extends CollectionBasedBootstrap { 
	static PoiBootstrap instance
	
	static def getInstance() {
		if (instance == null) {
			instance = new PoiBootstrap
		}
		instance
	}
	
	private new() {
		ApplicationContext.instance.configureSingleton(typeof(Poi),  RepositorioSingleton.instance)
		ApplicationContext.instance.configureSingleton(typeof(Usuario), RepositorioUsuario.instance)
	}
	
	 override  run() {
		val repositorioPois = ApplicationContext.instance.getSingleton(typeof(Poi)) as RepositorioSingleton
		val repositorioUsuario = ApplicationContext.instance.getSingleton(typeof(Usuario)) as RepositorioUsuario
	
	/**
	 * Inicialización del juego de datos
	 */
				
		/**Los user1 al user5 Calificaron */
		val user1 = new Usuario("ArmandoEsteban", "Quito")
		val user2 = new Usuario("Guillermo", "Nigote")
		val user3 = new Usuario("admin","admin")
		val user4 = new Usuario("Juanchi", "Cato")
		val user5 = new Usuario("Susy", "Lueta")
		
		/**Los user6 al user10 Nunca calificaron */
		val user6 = new Usuario("Jaime", "Talero")
		val user7 = new Usuario("bergoglio","666")
		val user8 = new Usuario("Lueta", "Rado") 
		val user9 = new Usuario("Martin", "Gala") 
		val user10 = new Usuario("Edu", "Cado") 

	/**
	 * Inicialización del juego de datos del repositorio
	 */

//Colectivos
		
		val colectivo78 = new ColectivoBuilder()
					.agregarNombre("78")
					.agregarParada(-34.570444, -58.538289)
					.agregarParada(-34.578555, -58.528354)
					.agregarParada(-34.568666, -58.542023)
					.build
					
		val colectivo169 = new ColectivoBuilder()
					.agregarNombre("169")
					.agregarParada(-34.577999, -58.528354)
					.agregarParada(-34.568755, -58.542023)
					.build
					
		val colectivo343 = new ColectivoBuilder()
					.agregarNombre("343")
					.agregarParada(-34.579999, -58.520000)
					.agregarParada(-34.687777, -58.418651)
					.agregarParada(-34.568888, -58.542023)
					.build
					
		val colectivo57 = new ColectivoBuilder()
					.agregarNombre("57")
					.agregarParada(-34.57999, -58.528354)
					.agregarParada(-34.568666, -58.542023)
					.build
		
		val colectivo328 = new ColectivoBuilder()
					.agregarNombre("328")
					.agregarParada(-34.579100, -58.528545)
					.agregarParada(-34.568555, -58.542777)
					.build
		
//Bancos
		
		val bancoSantander = new BancoBuilder()
					.agregarDireccion(new DireccionBuilder().agregarPunto(-34.565000, -58.542023).agregarCalle("Rondeau").agregarEntreCalle1("Av Primavera").agregarEntreCalle2("6 de Julio").agregarNumero(250).agregarCodigoPostal(1650).agregarLocalidad("San Martin").agregarBarrio("San Martin").agregarProvincia("Buenos Aires").agregarPais("Argentina").build)
					.agregarHorarioBanco(new HorarioDeAtencionBuilder().agregarHoraInicio("10:00").agregarHoraFin("15:00").build)
					.agregarNombre("Santander")
					.agregarServicios(#["Depósitos", "Transferencias", "Cobro de cheques"])
					.build

		val bancoNacion = new BancoBuilder()
				.agregarDireccion(new DireccionBuilder().agregarPunto(-34.575000, -58.528354).agregarCalle("Av Darko").agregarEntreCalle1("Los Conejos").agregarEntreCalle2("Las Alicias").agregarNumero(820).agregarCodigoPostal(1650).agregarLocalidad("San Martin").agregarBarrio("San Martin").agregarProvincia("Buenos Aires").agregarPais("Argentina").build)
				.agregarHorarioBanco(new HorarioDeAtencionBuilder().agregarHoraInicio("10:00").agregarHoraFin("15:00").build)
				.agregarNombre("Nacion")
				.agregarServicios(#["Depósitos", "Transferencias", "Cobro de cheques", "Extracciones"])
				.build
				
		val bancoCiudad = new BancoBuilder()
				.agregarDireccion(new DireccionBuilder().agregarPunto(-34.580000, -58.542023).agregarCalle("Av Los Talares").agregarEntreCalle1("Ebano").agregarEntreCalle2("Pino").agregarNumero(1320).agregarCodigoPostal(1650).agregarLocalidad("San Martin").agregarBarrio("San Martin").agregarProvincia("Buenos Aires").agregarPais("Argentina").build)
				.agregarHorarioBanco(new HorarioDeAtencionBuilder().agregarHoraInicio("10:00").agregarHoraFin("15:00").build)
				.agregarNombre("Ciudad")
				.agregarServicios(#["Depósitos", "Extracciones"])
				.build
	
		val bancoPiano = new BancoBuilder()
				.agregarDireccion(new DireccionBuilder().agregarPunto(-34.56000, -58.528354).agregarCalle("Av Cipres").agregarEntreCalle1("Los Conejos").agregarEntreCalle2("Algarrobo").agregarNumero(2560).agregarCodigoPostal(1650).agregarLocalidad("San Martin").agregarBarrio("San Martin").agregarProvincia("Buenos Aires").agregarPais("Argentina").build)
				.agregarHorarioBanco(new HorarioDeAtencionBuilder().agregarHoraInicio("10:00").agregarHoraFin("15:00").build)
				.agregarNombre("Piano")
				.agregarServicios(#["Transferencia", "Cobro de cheques"])
				.build
		
		val bancoRioDelPlata = new BancoBuilder()
				.agregarDireccion(new DireccionBuilder().agregarPunto(-34.57000, -58.529354).agregarCalle("Av Naranjo").agregarEntreCalle1("Los Tomates").agregarEntreCalle2("Las Alicias").agregarNumero(2320).agregarCodigoPostal(1650).agregarLocalidad("San Martin").agregarBarrio("San Martin").agregarProvincia("Buenos Aires").agregarPais("Argentina").build)
				.agregarHorarioBanco(new HorarioDeAtencionBuilder().agregarHoraInicio("10:00").agregarHoraFin("15:00").build)
				.agregarNombre("Rio Del Plata")
				.agregarServicios(#["Prestamo", "Inversión"])
				.build
	
//Locales Comerciales
		
		val rubroVerduleria = new Rubro("Verduleria", 0.4)
		val rubroVivero = new Rubro("Vivero",0.9)
		
		val verduleriaManolo = new  LocalComercialBuilder()
					.agregarDireccion(new DireccionBuilder().agregarPunto(-34.579999, -58.520000).agregarCalle("Quirno").agregarEntreCalle1("Bolivia").agregarEntreCalle2("San Pedrito").agregarNumero(343).agregarCodigoPostal(1650).agregarLocalidad("Flores").agregarBarrio("C.A.B.A").agregarProvincia("Buenos Aires").agregarPais("Argentina").build)
					.agregarHorario(new HorarioDeAtencionBuilder().agregarHoraInicio("08:00").agregarHoraFin("17:00").build)
					.agregarNombre("Don Manolo")
					.agregarRubro(rubroVerduleria)
					.agregarPalabrasClave(Arrays.asList("Maracuya","Mango","Melon","Cereza"))
					.build
					
		val verduleriaAmanda = new  LocalComercialBuilder()
					.agregarDireccion(new DireccionBuilder().agregarPunto(-34.578555, -58.530000).agregarCalle("Avellaneda").agregarEntreCalle1("Tannat").agregarEntreCalle2("San Pedrito").agregarNumero(100).agregarCodigoPostal(1650).agregarLocalidad("Flores").agregarBarrio("C.A.B.A").agregarProvincia("Buenos Aires").agregarPais("Argentina").build)
					.agregarHorario(new HorarioDeAtencionBuilder().agregarHoraInicio("08:00").agregarHoraFin("17:00").build)
					.agregarNombre("Las Amandas")
					.agregarRubro(rubroVerduleria)
					.agregarPalabrasClave(Arrays.asList("Mango","Anco Zapallo","Alcaucil","Arandano"))
					.build		
		
		val libreriaGarabombo = new  LocalComercialBuilder()
					.agregarDireccion(new DireccionBuilder().agregarPunto(-34.578555, -58.525000).agregarCalle("Amerello").agregarEntreCalle1("Celeste").agregarEntreCalle2("San Pedrito").agregarNumero(900).agregarCodigoPostal(1650).agregarLocalidad("Flores").agregarBarrio("C.A.B.A").agregarProvincia("Buenos Aires").agregarPais("Argentina").build)
					.agregarHorario(new HorarioDeAtencionBuilder().agregarHoraInicio("08:00").agregarHoraFin("19:30").build)
					.agregarNombre("Garabombo")
					.agregarRubro(new Rubro("Libreria", 0.2))
					.agregarPalabrasClave(Arrays.asList("Libros","Textos","Textos Escolares","Libros Antiguos"))
					.build
		
		val viveroPalmeras = new  LocalComercialBuilder()
					.agregarDireccion(new DireccionBuilder().agregarPunto(-34.578555, -58.535000).agregarCalle("Marcos Sastre").agregarEntreCalle1("Helguera").agregarEntreCalle2("Argerich").agregarNumero(3100).agregarCodigoPostal(1417).agregarLocalidad("Villa Del Parque").agregarBarrio("Villa Del Parque").agregarProvincia("Buenos Aires").agregarPais("Argentina").build)
					.agregarHorario(new HorarioDeAtencionBuilder().agregarHoraInicio("08:00").agregarHoraFin("17:00").build)
					.agregarNombre("Las Palmeras")
					.agregarRubro(rubroVivero)
					.agregarPalabrasClave(Arrays.asList("Palmera","Platano","Pino","Duraznero"))
					.build
		
		val viveroLotoAzul = new  LocalComercialBuilder()
					.agregarDireccion(new DireccionBuilder().agregarPunto(-34.578793, -58.515000).agregarCalle("Cielo Razo").agregarEntreCalle1("Terrada").agregarEntreCalle2("San Pedrito").agregarNumero(300).agregarCodigoPostal(1650).agregarLocalidad("Flores").agregarBarrio("C.A.B.A").agregarProvincia("Buenos Aires").agregarPais("Argentina").build)
					.agregarHorario(new HorarioDeAtencionBuilder().agregarHoraInicio("08:00").agregarHoraFin("17:00").build)
					.agregarNombre("LotoAzul")
					.agregarRubro(rubroVivero)
					.agregarPalabrasClave(Arrays.asList("Solanacea","Hipomea Violacia","Bromelia","Orquidea"))
					.build
		
//CGP
		
			val  comuna1= new Comuna (new Polygon(#[new Point(-34.577777, -58.528354), new Point(-34.578555, -58.528974), new Point(-34.599284, -58.386868),new Point(-34.579900, -58.528354)]),"CGP Comuna 1")
			val  comuna2= new Comuna (new Polygon(#[new Point(-55.569901, -88.322222), new Point(-99.576603, -18.377776), new Point(-34.576999, -58.528354),new Point(-38.597805, -58.475952)]),"CGP Comuna 2")
			val  comuna3= new Comuna (new Polygon(#[new Point(-34.577555, -58.528354), new Point(-34.578555, -58.528888), new Point(-34.599284, -108.386868),new Point(-33.597805, -76.46952)]),"CGP Comuna 3")
			val  comuna4= new Comuna (new Polygon(#[new Point(-38.569901, -48.399922), new Point(-79.579503, -158.376716), new Point(-34.578555, -58.528354),new Point(-34.578666, -58.528354)]),"CGP Comuna 4")
			val  comuna5= new Comuna (new Polygon(#[new Point(-34.578999, -58.528354), new Point(-34.578000, -58.528354), new Point(-104.599284, -199.386868),new Point(-101.597805, -106.417852)]),"CGP Comuna 5")

			val direccionComuna1 = new Direccion(new Point(-107.567801, -128.397822),"La Paz","Bolivia","Paraguay",281,1986,"Altamirano","Buenos Aires","Buenos Aires","Argentina")
			val direccionComuna2 = new Direccion(new Point(-34.577900, -58.528354),"Lavalle","Lacroze","Boulevard Ballester",222,1653,"Villa Ballester","San Martin","Buenos Aires","Argentina")
			val direccionComuna3 = new Direccion(new Point(-34.579555, -58.528354),"Av. 5 de Mayo","Libertador","America",2203,1986,"Altamirano","Buenos Aires","Buenos Aires","Argentina")
			val direccionComuna4 = new Direccion(new Point(-128.567901, -105.399222),"Av. Independencia","Francia","Estado de Israel",654,1458,"Bella Vista","Buenos Aires","Buenos Aires","Argentina")
			val direccionComuna5 = new Direccion(new Point(-54.569121, -26.393232),"Av. Ricardo Balbin","Los Ceibos","Alamedas",635,1623,"Caballito","Capital Federal","Buenos Aires","Argentina")

			val horarioServicioRentas = new HorarioDeAtencion("07:30","15:30")
			val horarioServicioSocial = new HorarioDeAtencion("08:00","19:00")
			val horarioServicioDireccionGeneralDeLaMujer = new HorarioDeAtencion("09:00","21:00")
			val horarioServicioRegistroCivil = new HorarioDeAtencion("08:30","20:30")
			val horarioServicioTesoreria = new HorarioDeAtencion("07:00","13:00")			

			val rentas = new Servicio("Rentas",horarioServicioRentas)
			val servicioSocial = new Servicio("Servicio Social",horarioServicioSocial)
			val direccionGeneralDeLaMujer = new Servicio ("Dirección Gral. de la Mujer",horarioServicioDireccionGeneralDeLaMujer)
			val registroCivil = new Servicio ("Registro Civil",horarioServicioRegistroCivil)
			val tesoreria = new Servicio ("Tesorería",horarioServicioTesoreria )
			
			val sedeComuna1 = new Cgp(comuna1,direccionComuna1)
			sedeComuna1.servicios.addAll(Arrays.asList(direccionGeneralDeLaMujer,registroCivil))	
			
			val sedeComuna2 = new Cgp(comuna2, direccionComuna2)
			sedeComuna2.servicios.addAll(Arrays.asList(direccionGeneralDeLaMujer,registroCivil))
			
			val sedeComuna3 = new Cgp(comuna3, direccionComuna3)
			sedeComuna3.servicios.addAll(Arrays.asList(tesoreria,rentas))
			
			val sedeComuna4 = new Cgp(comuna4, direccionComuna4)
			sedeComuna4.servicios.add(servicioSocial)
			
			val	sedeComuna5 = new Cgp(comuna5, direccionComuna5)
			sedeComuna5.servicios.add(tesoreria)	


	/**Creamos los POIS del Repositorio de POIS */
					
		repositorioPois => [	createOrUpdate(colectivo78)
								createOrUpdate(colectivo169)
								createOrUpdate(colectivo343)
								createOrUpdate(colectivo57)
								createOrUpdate(colectivo328)
								createOrUpdate(bancoSantander)
								createOrUpdate(bancoRioDelPlata)
								createOrUpdate(bancoPiano)
								createOrUpdate(bancoCiudad)
								createOrUpdate(bancoNacion)
								createOrUpdate(verduleriaManolo)
								createOrUpdate(verduleriaAmanda)
								createOrUpdate(viveroLotoAzul)
								createOrUpdate(viveroPalmeras)
								createOrUpdate(libreriaGarabombo)
								createOrUpdate(sedeComuna1)
								createOrUpdate(sedeComuna2)
								createOrUpdate(sedeComuna3)
								createOrUpdate(sedeComuna4)
								createOrUpdate(sedeComuna5)
							]

	/**Creamos los Usuarios del Repositorio de Usuarios */
					
		repositorioUsuario => [	createOrUpdate(user1)
								createOrUpdate(user2)
								createOrUpdate(user3)
								createOrUpdate(user4)
								createOrUpdate(user5)
								createOrUpdate(user6)
								createOrUpdate(user7)
								createOrUpdate(user8)
								createOrUpdate(user9)
								createOrUpdate(user10)
							  ]	
	}
	
	def void agregarCalificacionesALosPois(){
		
		
		val opinion1 = new Review(RepositorioUsuario.instance.searchById(1), "Que buen Poi pero le pongo 1", 1)
		val opinion2 = new Review(RepositorioUsuario.instance.searchById(2), "No me gusto el lugar", 2)
		val opinion3 = new Review(RepositorioUsuario.instance.searchById(3), "Vamos con un 3", 3)
		val opinion4 = new Review(RepositorioUsuario.instance.searchById(4), "Tengo sueño", 4)
		val opinion5 = new Review(RepositorioUsuario.instance.searchById(5), "POI recomendado", 5)
		
		val calificacion1 = new Calificacion
			calificacion1.listaReview = newArrayList(opinion1, opinion5)
			
		val calificacion2 = new Calificacion
		 	calificacion2.listaReview = newArrayList(opinion1, opinion4, opinion5)
		 	
		val calificacion3 = new Calificacion
		 	calificacion3.listaReview = newArrayList(opinion3, opinion4, opinion5)
		 
		val calificacion4 = new Calificacion
		 	calificacion4.listaReview = newArrayList(opinion1,  opinion3, opinion4, opinion5)
		 
		val calificacion5 = new Calificacion
		 	calificacion5.listaReview = newArrayList(opinion1,  opinion2, opinion5, opinion4)
		 
		val calificacion6 = new Calificacion
		 	calificacion6.listaReview = newArrayList(opinion2,  opinion4, opinion3)
		 
		val calificacion7 = new Calificacion 		
			calificacion7.listaReview = newArrayList(opinion4)
		
		val calificacion8 = new Calificacion
		 	calificacion8.listaReview = newArrayList(opinion2,  opinion5, opinion1)
		 			
		val calificacion9 = new Calificacion
		 	calificacion9.listaReview = newArrayList(opinion1,  opinion3, opinion5)		
		
		val calificacion10 = new Calificacion
		 	calificacion10.listaReview = newArrayList(opinion4, opinion5)		
		
		val calificacion11 = new Calificacion
		 	calificacion11.listaReview = newArrayList(opinion2,  opinion3, opinion5)
		 	
		val calificacion12 = new Calificacion
		 	calificacion12.listaReview = newArrayList(opinion5)		 	
		 	
		RepositorioSingleton.instance.searchById(1).calificacion = calificacion1
		RepositorioSingleton.instance.searchById(2).calificacion = calificacion2
		RepositorioSingleton.instance.searchById(3).calificacion = calificacion3
		RepositorioSingleton.instance.searchById(6).calificacion = calificacion4		 			
		RepositorioSingleton.instance.searchById(7).calificacion = calificacion5
		RepositorioSingleton.instance.searchById(8).calificacion = calificacion6
		RepositorioSingleton.instance.searchById(11).calificacion = calificacion7
		RepositorioSingleton.instance.searchById(12).calificacion = calificacion8		 			
		RepositorioSingleton.instance.searchById(13).calificacion = calificacion9
		RepositorioSingleton.instance.searchById(16).calificacion = calificacion10
		RepositorioSingleton.instance.searchById(17).calificacion = calificacion11
		RepositorioSingleton.instance.searchById(18).calificacion = calificacion12		 			
	}
	
	def void agregarPoisFavoritosAUsuarios(){
		
		/**Usuario 6*/
		RepositorioUsuario.instance.searchById(6)=>[ agregarPoiFavorito ("2")
													 agregarPoiFavorito ("1")
													 agregarPoiFavorito ("13")
													 agregarPoiFavorito ("3")
													 agregarPoiFavorito ("7")
													]

		/**Usuario 7*/
		RepositorioUsuario.instance.searchById(7)=>[ agregarPoiFavorito ("12")
													 agregarPoiFavorito ("16")
													 agregarPoiFavorito ("1")
													 agregarPoiFavorito ("6")
													 agregarPoiFavorito ("17")
													]
		/**Usuario 8*/
		RepositorioUsuario.instance.searchById(8)=>[ agregarPoiFavorito ("2")
													 agregarPoiFavorito ("1")
													 agregarPoiFavorito ("13")
													 agregarPoiFavorito ("3")
													 agregarPoiFavorito ("7")
													]
		/**Usuario 9*/
		RepositorioUsuario.instance.searchById(9)=>[ agregarPoiFavorito("20")
													 agregarPoiFavorito("11")
													 agregarPoiFavorito("3")
		                                             agregarPoiFavorito("4")
		                                             agregarPoiFavorito("8")
		                                            ]
		/**Usuario 10*/
		RepositorioUsuario.instance.searchById(10)=>[ agregarPoiFavorito ("2")
													 agregarPoiFavorito ("10")
													 agregarPoiFavorito ("8")
													 agregarPoiFavorito ("12")
													 agregarPoiFavorito ("14")
													]
													
		/**Usuario 3 = admin*/
		RepositorioUsuario.instance.searchById(3)=>[ agregarPoiFavorito ("2")
													 agregarPoiFavorito ("10")
													 agregarPoiFavorito ("8")
													 agregarPoiFavorito ("12")
													 agregarPoiFavorito ("14")
													]
													

}
}