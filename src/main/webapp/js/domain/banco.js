function Banco(direccion,horario,nombre) {
	/**Llamamos al constructor padre, nos aseguramos (utilizando Function#call)
	 que "this" se ha establecido correctamente durante la llamada*/
	Poi.call(this, direccion, horario);
	
	this.nombreBanco = nombre;
	this.servicios = [];//lista de strings
}

Banco.extends(Poi);

Banco.prototype.getNombre = function(){
	return "Banco "+this.nombreBanco;
};

Banco.prototype.agregarServicio = function(servicio){
	this.servicios.push(servicio);
};

Banco.prototype.serviciosToString = function(){
	return servicios.join("\n");
};

Banco.transformar = function(jsonBanco) {
    return angular.extend(new Banco(), jsonBanco);
};