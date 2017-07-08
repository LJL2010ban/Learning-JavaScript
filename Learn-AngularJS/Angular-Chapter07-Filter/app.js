/**
 * Created by as on 2017/4/14.
 */

var app = angular.module('app', []);

app.controller('DemoController', ['$scope', '$filter',
    function ($scope, $filter) {
        $scope.name = $filter('lowercase')('Ari');
    }]);
//自定义过滤器
angular.module('myApp.filters', [])
    .filter('capitalize', function () {
        return function (input) {

        };
    });

angular.module('myApp.filters', [])
    .filter('capitalize', function () {
        return function (input) {
            if(input){
                return input[0].toUpperCase() + input.slice(1);
            }
        }
    });