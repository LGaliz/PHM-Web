'use strict';

poiApp.controller('loginController', function($state, usuarioService, $timeout) {

    var self = this;
    this.cuenta = "";
    this.pass = "";
    this.alertas = [];
    this.$timeout = $timeout;

    usuarioService.logOut();

    function notificarErrorSistema(infoError) {
        notificarError(self, infoError);
    }

    this.iniciarSesion = function() {
        usuarioService.iniciarSesion({
            cuenta: self.cuenta,
            password: self.pass
        }, function(response) {
            usuarioService.setUsuario(response.data);
            $state.go("main.buscador");
            return;
        }, notificarErrorSistema);
    };

});
