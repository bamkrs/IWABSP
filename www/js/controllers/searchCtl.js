angular.module('app.controllers')
    .controller('searchCtl', function($scope, $rootScope, spotifyService) {
        
    	$scope.searchTracks = function()
        {
    		spotifyService.searchFor($scope.searchText,"track").then(
            function(data){ //success
    			console.log(data);
    			$scope.foundTracks = data.tracks.items;
    		}, function(err){ //error
    			console.err(err);
    		});
    	}

    }
);