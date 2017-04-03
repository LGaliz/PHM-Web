describe("Horario de atención", function() {
	var horario;
	var hora13;
	var hora21;
	beforeEach(function(){
		horario = new HorarioDeAtencion(09,00,18,30);
		
		hora13 = new Date;
		hora13.setHours(13,00,00);
		
		hora21 = new Date;
		hora21.setHours(21,00,00);
	});
	
	it('Poi disponible a las 13 hs.', function() {
		alert(hora13);
		
		expect(horario.estaDisponible(hora13)).toBe(true);
	});
	
	it('Poi no disponible a las 21 hs.', function() {
		alert(hora21);
		
		expect(horario.estaDisponible(hora21)).toBe(false);
		
	});

});



