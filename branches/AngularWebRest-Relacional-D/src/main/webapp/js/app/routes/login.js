poiApp.config(function($stateProvider) {
  return $stateProvider
  .state('main.login', {
            url: "/login/",
            templateUrl: "/views/partials/logIn.html",
            controller: "loginController",
            controllerAs: "loginCtrl"
        });
});
