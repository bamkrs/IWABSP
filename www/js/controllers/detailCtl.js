angular.module('app.controllers')
    .controller('detailCtl', function($scope, $rootScope, paramDisplayId) { //Hier taucht der Name "paramDisplayId" wieder auf.
                                                                            //Der Controller versucht jetzt die Funktion paramDisplayId des
                                                                            //Resolve-Objektes aufzurufen und dessen Rückgabewert in paramDisplayId
                                                                            //zu hinterlegen.

        //Zu Demozwecken wollen wir die Zahl in der URL einfach nur im View anzeigen.
        $scope.parameterFromURL = paramDisplayId; 
    }
);