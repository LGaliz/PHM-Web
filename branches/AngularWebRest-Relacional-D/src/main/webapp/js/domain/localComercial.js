function LocalComercial(direccion,horario,rubro,nombre){
	Poi.call(this, direccion, horario); //Llama al constructor de Poi
	
	this.rubro = rubro;
	this.nombre = nombre;

}
LocalComercial.extends(Poi);

LocalComercial.prototype.getNombre = function(){
	return this.rubro.nombre + " " + this.nombre;
};

LocalComercial.prototype.estaCerca = function(unPunto){
	return this.getDistancia(unPunto) < this.rubro.cercania;
};
LocalComercial.transformar = function(jsonLocalComercial) {
    return angular.extend(new LocalComercial(), jsonLocalComercial);
};

/***************************************************************************/

function Rubro(nombre, cercania){
	this.nombre = nombre;
	this.cercania = cercania;
}
