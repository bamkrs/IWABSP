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
    })
    .state('search', {                   //name für view /about
      url: "/search",                  //link zu view
      templateUrl: "templates/search.html",        //zugehöriges template
      controller: "searchCtl"              //zugehöriger controller
    })
    .state('detail', { //neuer state mit Parameter
    	url: "/detail/{displayId:int}", //definition des Parameters displayId als Integer (ganzzahl), URL's sehen dann so aus: /detail/13
    	templateUrl: "templates/detail.html",
    	controller: "detailCtl",
    	resolve: { 
    		//Resolves sind sozusagen Vorbedingungen die erfüllt werden müssen, bevor der Controller gestartet wird.
    		//Wir wollen den Controller eine Variable übergeben mit dem Namen "paramDisplayId".
    		//Um diese Variable zu erzeugen, brauchen wir eine anonyme Funktion, die wir den Resolve-Objekt unter dem Namen "paramDisplayId" hinzufügen.
    		//In dieser wollen wir auf die Parameter der URL zugreifen "$stateParams"
    		paramDisplayId: function($stateParams) 
    		{
    			//Da wir die Variable einfach durchreichen wollen, müssen wir sie nur aus den $stateParams rausholen
    			//und zurückgeben.
    			return $stateParams.displayId; 
    		}
    	}
    });
});

