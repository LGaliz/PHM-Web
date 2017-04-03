poiApp.service('detallesService', function($http) {

	this.poi = function(queryString,callback , errorHandler ) {
		$http.get('/detallesPoi/ID='+queryString.id).then(callback , errorHandler );
	}
	
	this.calificacion = function(queryString,review, callback , errorHandler ) {
	     $http.put('/detallesPoi/ID='+queryString.id, review).then(callback , errorHandler );
	}
	
	this.favorito = function (queryString, usuario, callback, errorHandler) {
		$http.put('/detallesPoi/ID='+queryString.id, usuario).then(callback, errorHandler);
	};	
});
