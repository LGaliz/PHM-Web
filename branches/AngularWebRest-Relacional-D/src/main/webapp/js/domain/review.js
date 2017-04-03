function Review(usuario,comentario,calificacion) {
  this.usuario = usuario;
  this.comentario = comentario;
  this.calificacion = calificacion;

  this.getNombreDeUsuario = function(){
    return this.usuario.cuenta;
  }
}
