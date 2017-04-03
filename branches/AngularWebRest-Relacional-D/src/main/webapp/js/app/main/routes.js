poiApp.config(function($locationProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    return $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});
})

poiApp.constant('_', window._)
poiApp.config(function($stateProvider) {
  return $stateProvider
  .state('main', {
    abstract: true,
    views: {
      'layout': {
        templateUrl: "/views/main/layout.html"
      },
      'container@main': {
        template: "<ui-view>"
      },
      'topbar@main': {
        templateUrl: "/views/main/topbar.html"
      },
      'footer@main': {
        templateUrl: "/views/main/footer.html"
      }
    }
  });
});