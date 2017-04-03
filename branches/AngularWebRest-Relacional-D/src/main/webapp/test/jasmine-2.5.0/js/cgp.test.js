describe("Un CGP", function() {
	var comuna15;
	var cgp15;
	var polygon15;
	var calificacion;

	beforeEach(function() {
		polygon15 = new Polygon([
			new Point(-34.572596,-58.467366),
			new Point(-34.597611,-58.423936),
			new Point(-34.607219,-58.446423),
			new Point(-34.593654,-58.502213),
			new Point(-34.6324105,-58.4833006)
		]);
		comuna15 = new Comuna(polygon15,"CGP Comuna 15");
		cgp15 = new Cgp(comuna15,new Direccion(new Point(-34.587007,-58.441284),"Av. Córdoba","5690","Chacarita"));
		calificacion = cgp15.calificacion;
		cgp15.agregarServicio(new Servicio("Rentas",new HorarioDeAtencion("09:30","15:30")));//new HorarioDeAtencion(9,30,15,30)));
		cgp15.agregarServicio(new Servicio("Infracciones",new HorarioDeAtencion("08:00","14:00")));//new HorarioDeAtencion(8,0,14,0)));
		cgp15.agregarServicio(new Servicio("Atención Ciudadana",new HorarioDeAtencion("08:00","17:00")));//new HorarioDeAtencion(8,0,17,0)));
		
	});

//Cercania
	it('No esta cerca si el punto no se encuentra dentro de la comuna.', function() {
		var puntoFueraDeLaComuna15 = new Point(-34.575918,-58.481442);
		expect(cgp15.estaCerca(puntoFueraDeLaComuna15)).toBe(false);
	});
	it('Esta cerca si el punto se encuentra a menos de 5 cuadras.', function() {
		//Avenida Coronel Niceto Vega 5669 (entre Bonpland y Fitz Roy)
		expect(cgp15.estaCerca(new Point(-34.586209,-58.440018))).toBe(true);
	});
	it('Esta cerca si el punto se encuentra dentro de la comuna.', function() {
		 expect(cgp15.estaCerca(new Point(-34.587607,-58.461284))).toBe(true);
	});
// Direccion
	it('Su sede se encuentra en Av. Córdoba 5690, Chacarita', function() {
		expect(cgp15.getDireccion()).toMatch("Av. Córdoba 5690, Chacarita");
	});
//Comuna
	it('Su número de comuna es 15.', function() {
		expect(cgp15.getNombre()).toMatch("CGP Comuna 15");
	});
//Disponibilidad
	it('Tiene al menos un servicio disponible a las 15 hs.', function() {
		var hora15 = new Date;
		hora15.setHours(15,0,0);
		expect(cgp15.estaDisponible(hora15)).toBe(true);
	});
	it('No tiene ningún servicios disponible a las 21 hs.', function() {
		var hora21 = new Date;
		hora21.setHours(21,0,0);
		expect(cgp15.estaDisponible(hora21)).toBe(false);
	});
//Favoritos
	it('No está en favoritos.', function() {
		expect(cgp15.estaEnFavoritos).toBe(false);
	});
//Reviews
	it('No tiene reviews.', function() {
		expect(calificacion.cantidadDeReview()).toBe(0);
	});

});
