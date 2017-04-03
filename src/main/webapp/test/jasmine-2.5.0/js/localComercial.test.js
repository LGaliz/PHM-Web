describe("Un Comercio", function() {
	var comercio;
	var rubro;
	var horario;
	var calificacion;
	var guillermo;
	var armandoEsteban;
	var susy;

	beforeEach(function() {
		horario = new HorarioDeAtencion("11:00","23:30");//new HorarioDeAtencion(11,0,23,30);
		direccion = new Direccion(new Point(-34.551517,-58.560147),"Gral. Roca","3113","Villa Ballester");
		rubro = new Rubro("Heladeria",0.6);
		comercio = new LocalComercial(direccion,horario,rubro,"Duomo Gelato");

		calificacion = comercio.calificacion;
		guillermo = new Usuario("Guillermo", "Nigote");
		susy = new Usuario("Susy", "Lueta");
		armandoEsteban = new Usuario("ArmandoEsteban", "Quito");
		calificacion.agregarReview(new Review(guillermo,"Me encanta este Poi",3));
		calificacion.agregarReview(new Review(armandoEsteban,"Quisiera tener una pagina tan bonita como esta",5));
		calificacion.agregarReview(new Review(susy,"No lo recomiendo",1));
	});

//Cercanía
	it('Esta a menos de 2 cuadras', function() {
		expect(comercio.getDistancia(new Point(-34.551261,-58.562100))).toBeLessThan(0.20);
		//de Belgrano 5180, Villa Ballester (entre Roca y Colón)
	});
	it('Esta cerca de un punto si éste se encuentra a 3 cuadras.', function() {
		expect(comercio.estaCerca(new Point(-34.549705, -58.562700))).toBe(true);
		//Lafayette 3185, Villa Ballester (entre Artigas y Belgrano)
	});
	it('No esta cerca de un punto si su distancia supera el límite de cercanía del rubro.', function() {
		expect(comercio.estaCerca(new Point(-34.545897, -58.553275))).toBe(false);
		//Buenos Aires 5049 (Villa Ballester) entre Gral. Paz y Lavalle
	});
//Rubro
	it('Es una heladeria.', function(){
		expect(comercio.getNombre()).toMatch("Heladeria Duomo Gelato");
	});
//Dirección
	it('Esta ubicado en Gral. Roca 3113, Villa Ballester.', function(){
		expect(comercio.getDireccion()).toMatch("Gral. Roca 3113, Villa Ballester");
	});
//Disponibilidad
	it('Se encuentra disponible a las 20:35 hs.', function(){
		var hora20 = new Date;
		hora20.setHours(20,35,0);
		expect(comercio.estaDisponible(hora20)).toBe(true);
	});
	it('No se encuentra disponible a las 09 hs.', function(){
		var hora9 = new Date;
		hora9.setHours(9,0,0);
		expect(comercio.estaDisponible(hora9)).toBe(false);
	});
//Favoritos
	it('No está en favoritos.', function() {
		expect(comercio.estaEnFavoritos).toBe(false);
	});
	//Reviews
	it('Tiene 3 reviews.', function() {
			expect(calificacion.listaReview.length).toBe(3);
	});
	it('La suma de las calificaciones es 9', function() {
		expect(calificacion.sumaDeCalificaciones()).toBe(9);
	});
	it('El promedio de las calificaciones es 3.', function() {
//		expect(calificacion.getPromedioCalificacion()).toBe("3.0"); 
		expect(calificacion.getPromedioCalificacion()).toBe(3); //redondeo
	});
	it('Se verifica si un usuario ya calificó.', function() {
		expect(calificacion.usuarioYaCalifico(guillermo)).toBe(true); 
	});
	it('Se verifica si un usuario no calificó.', function() {
		calificacion.eliminarReview(calificacion.findUsuario(susy));
		expect(calificacion.usuarioYaCalifico(susy)).toBe(false);
	});
});
