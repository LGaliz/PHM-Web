poiApp.config(function($stateProvider) {
  return $stateProvider
  .state('main.detallesPoi', {
	  url: "/detallesPoi/ID=:id",
      templateUrl: "/views/partials/detallesPoi.html",
      controller: "poisController",
      controllerAs:"poisCtrl"
  })
  .state('main.detallesPoi.Banco',{
	  views : { "detallesParticularesPoi": { templateUrl: "/views/partials/detallesBanco.html" } },
	  controller: "poisController",
	  controllerAs: "poisCtrl"
  })
  .state('main.detallesPoi.Colectivo',{
	  views : { "detallesParticularesPoi": { templateUrl: "/views/partials/detallesColectivo.html" } },
	  controller: "poisController",
	  controllerAs: "poisCtrl"
  })
  .state('main.detallesPoi.Cgp',{
	  views : { "detallesParticularesPoi": { templateUrl: "/views/partials/detallesCGP.html" } },
	  controller: "poisController",
	  controllerAs: "poisCtrl"
  })
  .state('main.detallesPoi.LocalComercial',{
	  views : { "detallesParticularesPoi": { templateUrl: "/views/partials/detallesLocalComercial.html" } },
	  controller: "poisController",
	  controllerAs: "poisCtrl"
  })
});
