poiApp.controller('buscadorController', function($state, usuarioService, buscadorService, $timeout) {
    var self = this;
    this.alertas = [];
    this.$timeout = $timeout;
    this.pois = [];


    //BUSCAR POI DE USUARIOS
    this.getPoisDeUsuario = function(usuario) {
        buscadorService.buscarPoisUsuario(usuario, function(response) {
            self.buscador = _.map(response.data, transformarADatosBuscador);
        }, notificarErrorSistema);
    };

    usuarioService.estadoSesion($state,self);

    this.favoritos = function(id){
      return usuarioService.usuario.getPoiEstaEnFavoritos(id);
    }

    function notificarErrorSistema(infoError) {
        notificarError(self, infoError);
    }

    function transformarADatosBuscador(jsonUsuario) {
        return DatosBuscador.asDatos(jsonUsuario);
    }

});
