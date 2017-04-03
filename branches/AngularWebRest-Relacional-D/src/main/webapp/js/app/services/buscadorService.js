poiApp.service('buscadorService', function($http) {

    this.findAll = function(callback , errorHandler) {
        $http.get('/buscador').then(callback , errorHandler );
    }
    this.buscarPoisUsuario = function (usuario, callback, errorHandler) {
        $http.put('/buscador', usuario).then(callback, errorHandler);
      };

});