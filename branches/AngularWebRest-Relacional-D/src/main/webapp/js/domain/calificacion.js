function Calificacion() {
	this.listaReview = [];

	this.agregarReview = function(review) {
		this.listaReview.push(review);
	}

	this.eliminarReview = function(review) {
		var index = this.listaReview.indexOf(review);
		this.listaReview.splice(index, 1);
		/** 1 --> cantidad de elementos a eliminar */
	}

	this.asignarReview = function(usuario, comentario, calificacion) {
		this.validarComentario(comentario);
		if (this.usuarioYaCalifico(usuario)) {
			this.actualizarReview(usuario, comentario, calificacion);
		} else {
			this.agregarReview(new Review(usuario, comentario, calificacion));
		}
	}

	this.actualizarReview = function(usuario, comentario, calificacion) {
		var reviewDelUsuario = this.findUsuario(usuario);

		var index = this.listaReview.indexOf(reviewDelUsuario);
		this.listaReview.splice(index, 1);

		this.agregarReview(new Review(usuario, comentario, calificacion));
	}

	this.getPromedioCalificacion = function() {
		if (this.hayReview()) {
			return Math.round(this.sumaDeCalificaciones()
					/ this.cantidadDeReview()); // redondeo
		} else {
			return 0;
		}
	}

	this.sumaDeCalificaciones = function() {
		var suma = 0;
		var i = 0;
		for (i = 0; i < this.cantidadDeReview(); i++) {
			suma = suma + this.listaReview[i].calificacion;
		}
		return suma;
	}

	this.cantidadDeReview = function() {
		return this.listaReview.length;
	}

	this.hayReview = function() {
		return this.cantidadDeReview() > 0;
	}

	this.usuarioYaCalifico = function(usuarioAVerificar) {
		var reviewDelUsuario = this.findUsuario(usuarioAVerificar);
		return this.listaReview.indexOf(reviewDelUsuario) != -1;
		/** si el index es -1 es porque no encontro ninguno */
	}

	this.findUsuario = function(usuario) {
		return this.listaReview.find(function(review) {
			return review.usuario === usuario;
		});
	}
}
