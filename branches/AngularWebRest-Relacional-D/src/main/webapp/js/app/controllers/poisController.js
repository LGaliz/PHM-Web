poiApp.controller('poisController', function($stateParams, usuarioService,
		detallesService, $timeout, $state) {
	var self = this;
	this.alertas = [];
	this.$timeout = $timeout;
	this.favorito = usuarioService.poiEstaEnFavoritos($stateParams.id);
	this.puntuacion;
	this.review;
	this.deshabilitar = false;


	this.disableButton = function() {
		if (this.review != null && this.puntuacion != null) {
			this.deshabilitar = true;
		}
	}

	this.jsonToServer = function(tipo) {
		return {
			idUsuario : usuarioService.jsonId().id,
			comentario : self.review,
			puntuacion : self.puntuacion,
			pedido : tipo
		};
	}

	this.getPoi = function() {
		detallesService.poi($stateParams, function(response) {
			self.poi = transformarAPoi(response.data);
		}, notificarErrorSistema);
	}


	function transformarAPoi(jsonPoi){
		var tipoPoi = jsonPoi['tipo'];
		return this[tipoPoi].transformar(jsonPoi);
	}

	this.getPoi();

	this.setFavorito = function() {
		detallesService.favorito($stateParams, self
				.jsonToServer('favorito'), function(response) {
			usuarioService.setUsuario(response.data);
		}, notificarErrorSistema);
	}

	this.setCalificacion = function() {
		this.disableButton();
		detallesService.calificacion($stateParams, self
				.jsonToServer('review'), function(response) {
			self.poi = transformarAPoi(response.data);
		}, notificarErrorSistema);
	}

	function notificarErrorSistema(infoError) {
		notificarError(self, infoError);
	}


	this.abrirDetallesParticularesPoi = function () {
		$state.go("main.detallesPoi." + self.poi.tipo);
	};
});
