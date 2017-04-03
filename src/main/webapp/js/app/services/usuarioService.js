poiApp.service('usuarioService', function($http) {
    var self = this;
    this.usuario = { cuenta: "", password: ""};

    this.jsonId = function(){
      return  {id : self.usuario.id };
    }

    this.estadoSesion = function(state,buscadorCtrl){
      if(self.usuario.cuenta===""){
              state.go("main.login");
              return;
      }else {
              buscadorCtrl.getPoisDeUsuario(self.jsonId());
            }
    };

    this.logOut = function(){
      self.usuario = { cuenta: "", password: ""};
    }

    this.poiEstaEnFavoritos = function(id){
      return self.usuario.getPoiEstaEnFavoritos(id);
    }

  this.transformarAUsuario = function(jsonUsuario) {
        return Usuario.asUsuario(jsonUsuario);
    }

    this.setUsuario = function(jsonUsuario) {
        self.usuario = this.transformarAUsuario(jsonUsuario);
    }

    this.iniciarSesion = function(usuario, callback, errorHandler) {
        $http.put('/login', usuario).then(callback, errorHandler);
    }
});
