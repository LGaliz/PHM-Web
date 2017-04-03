function Direccion(point,calle,numero,barrio) {
  this.ubicacion=point;
  this.calle=calle;
  this.numero=numero;
  this.barrio=barrio;

  this.toString = function(){
    return this.calle+" "+this.numero+", "+this.barrio;
  }

  this.getDistancia = function(unPunto){
    return this.ubicacion.distance(unPunto);
  }
}
