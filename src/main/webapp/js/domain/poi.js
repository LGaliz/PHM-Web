Function.prototype.extends = function(padre){
	var child = this;
	child.prototype = Object.create(padre.prototype);
	child.prototype.constructor = child;
}

function Poi(direccion, horario) {
	this._direccion = direccion;
	this.horario = horario;
	this.estaEnFavoritos = false;
	this.cercania = false;
	this.disponibilidad = false;
	this.calificacion = new Calificacion();
	this.tipo="";
	this.descripcion = "";
	
	this.distancia = 0.0;

}

Poi.prototype.getNombre = function() {};

Poi.prototype.getDireccion = function() {
	return this._direccion.toString(); 
};

Poi.prototype.getDistancia = function(unPunto) {
	return this._direccion.getDistancia(unPunto); 
};

Poi.prototype.getDescripcion = function(){
	return this.descripcion;
};

Poi.prototype.estaCerca = function(unPunto) {
	return this.getDistancia(unPunto) < 0.5;
};

Poi.prototype.estaDisponible = function(unHorario) {
	return this.horario.estaDisponible(unHorario);
};

Poi.prototype.setEstaEnFavoritos = function(estado){
	this.estaEnFavoritos = estado;
};

Poi.prototype.setPoiEstaCerca = function(unPunto){
	this.cercania = this.estaCerca(unPunto);
};

Poi.prototype.setDescripcion = function(unaDescripcion){
	this.descripcion = unaDescripcion;
};

Poi.asPoiUsuario = function (jsonPoiUsuario) {
	  return angular.extend(new Poi(), jsonPoiUsuario);
};

