/**
 * Created by as on 2017/4/14.
 */
var app = angular.module('app', []);

app.controller('FirstController', function ($scope) {
    $scope.counter = 0;
    $scope.add = function (amount) {
        $scope.counter += amount;
    };
    $scope.subtract = function (amount) {
        $scope.counter -= amount;
    };
});

app.controller('MyController', function ($scope) {
    $scope.person = {
        name: 'Baude Li'
    };
})

app.controller('ParentController', function ($scope) {
    $scope.person = {greeted: false};
});
app.controller('ChildController', function ($scope) {
    $scope.sayHello = function () {
        $scope.person.name = 'Baude Li';
    };
});
