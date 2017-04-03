function HorarioDeAtencion(inicio_,fin_){
  this.inicio = inicio_;

  this.fin = fin_;

  this.estaDisponible = function(unHorario){
	var fechaActual = new Date().toDateString();
	var dateInicio = new Date(fechaActual + ' ' + this.inicio);
	var dateFin = new Date(fechaActual + ' ' + this.fin);
	
    return (dateInicio < unHorario && unHorario < dateFin);
  }
  
  this.toString = function(){
	  return /* "De "+ */ this.inicio + " a " + this.fin /* + " hs." */;
  }

}


