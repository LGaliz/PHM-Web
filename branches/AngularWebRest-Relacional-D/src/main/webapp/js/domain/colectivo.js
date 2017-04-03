function Colectivo(linea) {
	Poi.call(this, null, null); //Llama al constructor del Poi, sino no me toma calificacion.

	this.linea = linea;
	this.recorrido = [];

}
Colectivo.extends(Poi);

Colectivo.prototype.getNombre = function() {
	return "Linea " + this.linea;
};

Colectivo.prototype.getDireccion = function() {
	return "";
};

Colectivo.prototype.cantidadParadas = function() {
	return  this.recorrido.length;
};

Colectivo.prototype.agregarParada = function(unPunto) {
	this.recorrido.push(unPunto);
};

Colectivo.prototype.estaDisponible = function(unHorario) {
	return true;
};

Colectivo.prototype.estaCerca = function(unPunto){
	return this.recorrido.some(parada => parada.distance(unPunto)< 0.1);
};

Colectivo.transformar = function(jsonColectivo) {
    return angular.extend(new Colectivo(), jsonColectivo);
};
