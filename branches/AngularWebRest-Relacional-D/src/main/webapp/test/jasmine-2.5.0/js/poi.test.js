describe("un Poi amigo", function() { // este ya np se usa
	var colectivo;
	var banco;
	var puntoCualquiera;
	var puntoCualquiera2;

	beforeEach(function() {
		puntoCualquiera = new Point(-34.578793, -58.528590);
		puntoCualquiera1 = new Point(-34.578448, -58.528974);
		puntoCualquiera2 = new Point(-34.577521, -58.530017);
		colectivo = new Colectivo();
		banco = new Banco();

		//colectivo.ubicacion = puntoCualquiera2;
		//direccion = new Direccion(puntoCualquiera,"calle","123","San Ma");
//		colectivo.direccion = direccion;
		colectivo.addParada(puntoCualquiera);
		colectivo.addParada(puntoCualquiera1);

	});
	it('El punto esta a menos de 2 cuadras', function() {
		expect(puntoCualquiera.distance(puntoCualquiera2)).toBeLessThan(0.20);
	});
	it('El punto esta cerca del Colectivo ', function() {
	expect(colectivo.estaCerca(puntoCualquiera1)).toBe(true);
	});
});