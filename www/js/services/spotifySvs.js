angular.module('app.services').factory('spotifyService', function($q, $http, $rootScope) {
    
    var baseUrl = "https://api.spotify.com/v1/";

    return  {

            request : function(call,params) {

            var def = $q.defer();
            var query;

            if(params)
            {
            	var paramArr = [];
            	angular.forEach(params,function(value,key){
            		paramArr.push(key+"="+value.split(" ").join("+"));
            	},paramArr);
            	query = "?";
            	query += paramArr.join("&");
        	}

            $http.get(baseUrl+call+query)
            	.success(function(data, status, headers, config) {
                    def.resolve(data);
                }).error(function(data, status, headers, config) {
                    def.reject(status);
                });

                return def.promise;
            },

            searchFor : function(input,type) {
                return this.request("search",{"q":input,"type":type?type:"track","market":"DE","limit":"20"});
            },

            loadAlbum : function(id) {
            	return this.request("albums/"+id+"/tracks");
            },

            loadTrack : function(id){
            	return this.request("tracks/"+id);
            }
        };
});