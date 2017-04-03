poiApp.config(function($stateProvider) {
  return $stateProvider
  .state('main.sobreElProyecto', {
            url: "/project/",
            templateUrl: "/views/partials/sobreElProyecto.html",
            controller: "proyectoController",
            controllerAs: "sobreElProyectoCtrl"
        });
});
