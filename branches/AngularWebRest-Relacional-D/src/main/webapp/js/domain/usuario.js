function Usuario(cuenta, password){
	this.cuenta = cuenta;
	this.password = password;
	this.ubicacion;
	this.listaFavoritos =[];
}

    Usuario.prototype.verificarCuenta = function(cuenta, password) {
        return this.cuenta == cuenta && this.password == password;
    }

    Usuario.prototype.agregarFavorito = function(id) {
    	this.listaFavoritos.push(id.toString());
    }

    Usuario.prototype.eliminarFavorito = function(id) {
    	var index = this.listaFavoritos.indexOf(id.toString());
        this.listaFavoritos.splice(index, 1);
    }


  Usuario.prototype.validarLogueo = function(_cuenta, _pass) {
            return ((this.cuenta === _cuenta) && (this.password === _pass));
        }

    Usuario.prototype.getPoiEstaEnFavoritos = function(id) {
			return (this.listaFavoritos.indexOf(id.toString()) != -1);
    }

    Usuario.prototype.getPosicionActual = function() {
        this.ubicacion = GPS.getInstance().getPosicion();
    }


Usuario.asUsuario = function(jsonUsuario) {
    return angular.extend(new Usuario(), jsonUsuario);
};
