describe("Un Banco", function() {
	var bancoComafi;
	var horario;
	var calificacion;
	var jaime;
	var susy;

	beforeEach(function() {
//		horario = new HorarioDeAtencion(08,00,19,30);
		horario = new HorarioDeAtencion("08:00","19:30");
		bancoComafi = new Banco(new Direccion(new Point(-34.529601,-58.523644),"Gral. Belgrano", "2549", "Munro"), horario, "Comafi");
		bancoComafi.agregarServicio("Depósito");
		bancoComafi.agregarServicio("Extracción");
		bancoComafi.agregarServicio("Transacción");
		bancoComafi.setEstaEnFavoritos(true);

		calificacion = bancoComafi.calificacion;
		jaime = new Usuario("Jaime", "Talero");
		susy = new Usuario("Susy", "Lueta");
		calificacion.agregarReview(new Review(jaime,"Me encanta este Poi",2));
		calificacion.agregarReview(new Review(susy,"Quisiera tener una pagina tan bonita como esta",5));
	});
	
//Cercania
	it('Esta a menos de 2 cuadras.', function() {
		expect(bancoComafi.getDistancia(new Point(-34.530316,-58.524035))).toBeLessThan(0.20);
		// de Vélez Sársfield 4653, Munro (entre Gral. Belgrano y Carlos Tejedor)
	});
	it('Esta cerca de un punto si éste se encuentra a 3 cuadras).', function() {
		expect(bancoComafi.estaCerca(new Point(-34.529821,-58.520591))).toBe(true);
		//de Bernardino Rivadavia 2425, Munro (entre Vélez Sársfield y Guillermo Marconi)
	});
	it('No esta cerca de un punto si se encuentra a más de 5 cuadras.', function() {
		expect(bancoComafi.estaCerca(new Point(-34.525101,-58.524218))).toBe(false);
		//Ituzaingó 4407, entre Armenia y Bernardino Rivadavia (Munro)
	});
//Nombre
	it('Es una sucursal del Banco Comafi.', function(){
		expect(bancoComafi.getNombre()).toMatch("Banco Comafi");
	});
//Direccion
	it('Esta ubicado en Gral. Belgrano 2549, Munro.', function(){
		expect(bancoComafi.getDireccion()).toMatch("Gral. Belgrano 2549, Munro");
	});
//Servicios
	it('Presta 3 servicios', function() {
		expect(bancoComafi.servicios.length).toBe(3);
	});
//Disponibilidad
	it('Se encuentra disponible a las 15 hs.', function(){
		var hora15 = new Date();
		hora15.setHours(15,00,00);
		expect(bancoComafi.estaDisponible(hora15)).toBe(true);
	});
	it('No se encuentra disponible a las 06 hs.', function(){
		var hora6 = new Date();
		hora6.setHours(6,0,0);
		expect(bancoComafi.estaDisponible(hora6)).toBe(false);
	});

	it('Está en la lista favoritos de un usuario.', function() {
		expect(bancoComafi.estaEnFavoritos).toBe(true);
	});

//Reviews
	it('Tiene 2 reviews', function() {
		expect(calificacion.cantidadDeReview()).toBe(2);
	});
	it('La suma de las calificaciones es 7', function() {
		expect(calificacion.sumaDeCalificaciones()).toBe(7);
	});
	it('El promedio de las calificaciones es 3.5', function() {
		expect(calificacion.getPromedioCalificacion()).toBe(4); //redondeo
//		expect(calificacion.getPromedioCalificacion()).toBe("3.5");
	});
	it('Se verifica si un usuario ya calificó.', function() {
		expect(calificacion.usuarioYaCalifico(susy)).toBe(true);
	});
	it('Se verifica si un usuario no calificó.', function() {
		var usuario = new Usuario("Guillermo", "Nigote");
		expect(calificacion.usuarioYaCalifico(usuario)).toBe(false);
	});

});

/*
Banco Santander Rio
Dirección: Av. Urquiza 4788, 1678 Caseros, Buenos Aires
Latitud: -34.605995 | Longitud: -58.563467
************************
Banco Piano
Dirección: Av. Gdor. Vergara 3270, Hurlingham, Buenos Aires
Latitud: -34.602905 | Longitud: -58.635399
************************
Banco de la NAcion Argentina
Dirección: Bartolomé Mitre 326, 1036 Avellaneda, Buenos Aires
Latitud: -34.606687 | Longitud: -58.371096
****************************
Banco Ciudad
Dirección: Av. Pres. Juan Domingo Perón 900, San Miguel, Cdad. Autónoma de Buenos Aires
Latitud: -34.540642 | Longitud: -58.714153
*/
