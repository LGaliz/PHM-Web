describe("Un Colectivo", function() {
	var avAlbarellos3001_3059; //Av. Albarellos 3001-3059
	var avAlbarellos2964; //Av. Albarellos 2964
	var helguera5612; //Helguera 5612
	var franco3079; //Franco 3079
	var franco2975_2999; //Franco 2975-2999
	var avNazca5093; //Av. Nazca 5093
	var cuenca5379; //Cuenca 5379
	var linea110;

	beforeEach(function() {
		avAlbarellos3001_3059 = new Point(-34.578849,-58.512064);
		avAlbarellos2964 = new Point(-34.577832,-58.510021);
		helguera5612 = new Point(-34.580641,-58.511416);
		franco3079 = new Point(-34.583054,-58.509071);
		franco2975_2999 = new Point(-34.582197,-58.507676);
		avNazca5093 = new Point(-34.583003,-58.505105);
		cuenca5379 = new Point(-34.583268,-58.511103);

		linea110 = new Colectivo("110");
		linea110.agregarParada(avAlbarellos3001_3059);
		linea110.agregarParada(avAlbarellos2964);
		linea110.agregarParada(helguera5612);
		linea110.agregarParada(franco3079);
		linea110.agregarParada(franco2975_2999);
		linea110.agregarParada(avNazca5093);
		linea110.agregarParada(cuenca5379);

		linea110.estaEnFavoritos = true;
/*
Larsen 3371-3399   (-34.583036, -58.514983)
*/
	});
	
//Cercanía
	it('El punto está a menos de 2 cuadras de una parada.', function() {
		var argerich5746 = new Point(-34.578837,-58.510953);
		expect(avAlbarellos3001_3059.distance(argerich5746)).toBeLessThan(0.20);
		//Argerich 5746, CABA
	});
	it('Esta cerca del punto si está a menos de una cuadra de alguna parada.', function() {
		var larsen3096 = new Point(-34.580706,-58.511134);
		expect(linea110.estaCerca(larsen3096)).toBe(true);
		// Larsen 3096, CABA
		//Está a menos de una cuadra de Helguera 5612
	});
	it('No esta cerca de ninguna parada si el punto está a más de una cuadra de distancia.', function() {
		//Escobar 2568, CABA
		var escobar2568 = new Point(-34.576024,-58.505459);
		expect(linea110.estaCerca(escobar2568)).toBe(false);
	});
//Linea
	it('Pertenece a la línea 110.', function() {
		expect(linea110.getNombre()).toMatch("Linea 110");
	});
//Disponibilidad
	it('Siempre se encuentra disponible.', function() {
		var horario = new Date;
		expect(linea110.estaDisponible(horario.now)).toBe(true);
	});
//Favoritos
	it('Está en la lista de favoritos de un usuario.', function() {
		expect(linea110.estaEnFavoritos).toBe(true);
	});
//Reviews
	 it('No tiene reviews.', function() {
	 	expect(linea110.calificacion.cantidadDeReview()).toBe(0);
	 });
//Paradas
	it('Cantidad de paradas igual a 7', function() {
		expect(linea110.cantidadParadas()).toEqual(7);
	});
});
