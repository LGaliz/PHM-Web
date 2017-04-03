describe("Un Usuario", function() {
	var usuario;
	var usuario2;
	var usuario3;
	var usuario4;

	beforeEach(function() {
		usuario = new Usuario("Susy", "Lueta");
		usuario2 = new Usuario("Guillermo", "Nigote");
		usuario3 = new Usuario("Jaime", "Talero");
		usuario4 = new Usuario("ArmandoEsteban", "Quito");

		colectivo = new Colectivo("78");
		colectivo.id = 0;
		banco = new Banco(new Direccion(new Point(-34.529601,-58.523644),"Gral. Belgrano", "2549", "Munro"), new HorarioDeAtencion(08,00,19,30), "Comafi");
		banco.id = 1;
		
		usuario.agregarFavorito(colectivo.id);
		usuario.agregarFavorito(banco.id);

		calificacion = new Calificacion();
		opinion1 = new Review(usuario,"Me encanta este Poi",2);
		opinion2 = new Review(usuario2,"adasfsadf",3);
		opinion3 = new Review(usuario3,"Quisiera tener una pagina tan bonita como esta",5);
		calificacion.agregarReview(opinion1);
		calificacion.agregarReview(opinion2);
		calificacion.agregarReview(opinion3);

	});

//Ubicación
	 it('Conoce su ubicación.', function() {
	 	usuario.getPosicionActual();
	 	expect(usuario.ubicacion).not.toBe(null);//(0);
	 });

//Favoritos
	it('Agrega dos Pois a la lista de favoritos.', function() {
		expect(usuario.listaFavoritos.length).toEqual(2);
	});
	it('Elimina un Poi de la lista de favoritos.', function() {
		usuario.eliminarFavorito(banco.id);
		expect(usuario.listaFavoritos.length).toEqual(1);
	});

//Calificacion
	it('Las Opiniones se agregaron a la lista de Calificacion', function() {
		expect(calificacion.listaReview.length).toEqual(3);
	});
	it('Se remueve un comentario de la lista de Calificacion', function() {
		calificacion.eliminarReview(opinion3);
		expect(calificacion.listaReview.length).toEqual(2);
	});
	it('Se verifica si el usuario ya califico', function() {
		expect(calificacion.usuarioYaCalifico(usuario)).toBe(true);
	});
	it('el usuario aun no califico', function() {
		expect(calificacion.usuarioYaCalifico(usuario4)).toBe(false);
	});
	it('Suma de Calificaciones', function() {
		expect(calificacion.sumaDeCalificaciones()).toBe(10);
	});



});
