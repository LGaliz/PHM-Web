poiApp.controller('proyectoController', function($state, usuarioService, $timeout) {
    var self = this;
    this.alertas = [];
    this.$timeout = $timeout;

    this.getPoisDeUsuario= function(id){
    };

    usuarioService.estadoSesion($state,self);


});
