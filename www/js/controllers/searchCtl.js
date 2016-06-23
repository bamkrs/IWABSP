angular.module('app.controllers')
    .controller('searchCtl', function($scope, $rootScope, spotifyService) {
        
    	$scope.searchTracks = function()
        {

            // service.funktion(p1,p2,p3,...).then(tp1,tp2,tp3);
            // tpx = funktionen
            // tp1 = Ok! Success!
            // tp2 = Fail! Error!
            // tp3 = Info! 
    		spotifyService.searchFor($scope.searchText,"track").then(
                function(data){ //success
    			    console.log(data);
    			    $scope.foundTracks = data.tracks.items;
    		},  function(err){ //error
    			    console.err(err);
    		});
    	}

    }
);