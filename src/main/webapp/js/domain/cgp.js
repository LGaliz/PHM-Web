function Cgp(comuna, direccion) {
	/**Llamamos al constructor padre, nos aseguramos (utilizando Function#call)
	 que "this" se ha establecido correctamente durante la llamada*/
	Poi.call(this, direccion, null);

	this.comuna = comuna;
	this.servicios = [];

}

Cgp.extends(Poi);

Cgp.prototype.estaCerca = function(unPunto){
   return this.comuna.zonaComuna.isInside(unPunto) || this.getDistancia(unPunto) < 0.5;
};

Cgp.prototype.getNombre = function(){
	return this.comuna.numeroComuna;
};

Cgp.prototype.estaDisponible = function(unHorario) {
	return this.servicios.some(function(servicio){
		return servicio.estaDisponible(unHorario);
	});
};

Cgp.prototype.agregarServicio = function(servicio){
	this.servicios.push(servicio);
};

Cgp.prototype.eliminarServicio = function(servicio){
	var index = this.servicios.indexOf(servicio);
	this.servicios.splice(index,1);
};


/******************************************************************************************/
function Comuna(polygon,numero){
	this.zonaComuna = polygon;
	this.numeroComuna = numero;//string

}

/******************************************************************************************/

function Servicio(nombre,horario){
	this.nombre = nombre;
	this.horario = horario;

	 this.estaDisponible = function(unHorario) {
	 	return this.horario.estaDisponible(unHorario);
	 }
}

Cgp.transformar = function(jsonCgp) {
    return angular.extend(new Cgp(), jsonCgp);
};