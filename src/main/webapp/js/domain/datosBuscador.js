function DatosBuscador() {
//Objeto Value
}


DatosBuscador.asDatos = function(jsonUsuario) {
    return angular.extend(new DatosBuscador(), jsonUsuario);
};
