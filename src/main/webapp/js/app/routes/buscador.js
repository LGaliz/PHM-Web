poiApp.config(function($stateProvider) {
  return $stateProvider
  .state('main.buscador', {
            url: "/",
            templateUrl: "/views/partials/buscador.html",
            controller: "buscadorController",
            controllerAs: "buscadorCtrl"
        });
});
