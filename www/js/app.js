angular.module('IWABSP', ['ui.router', 'app.controllers', 'app.directives', 'app.services']) 				// initialisiere Angular-Applikation IWABSP mit abhängigkeiten
.config(function($stateProvider, $urlRouterProvider) { 	// konfiguriere ui-router
  
  // Falls unbekannte URL verweise auf den view /start
  $urlRouterProvider.otherwise("/start");
  
  // der stateProvider ist der "Manager" der views
  // konfiguration der einzelnen views
  $stateProvider
    .state('start', { 									//name für view /start
      url: "/start",									//link zu view
      templateUrl: "templates/start.html",				//zugehöriges template
      controller: "startCtl"							//zugehöriger controller
    })
    .state('about', { 									//name für view /about
      url: "/about",									//link zu view
      templateUrl: "templates/about.html",				//zugehöriges template
      controller: "aboutCtl"							//zugehöriger controller
    });
});