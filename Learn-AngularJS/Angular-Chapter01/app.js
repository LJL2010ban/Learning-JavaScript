/**
 * Created by as on 2017/4/13.
 */
var app = angular.module('MyApp',[]);

app.controller('MyController', function($scope, $timeout){
 /*   var updateClock = function () {
        $scope.clock = new Date();
        $timeout(function () {
            updateClock();
        }, 1000);
    };
    updateClock();*/

    $scope.clock = function(){
        now: new Date()
    };
    var updateClock = function () {
        $scope.clock.now = new Date();
    }
    setInterval(function () {
        $scope.$apply(updateClock);
    }, 1000);
    updateClock();
});