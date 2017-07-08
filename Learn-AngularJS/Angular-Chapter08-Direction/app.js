/**
 * Created by as on 2017/4/14.
 */

var app = angular.module('app', []);

app.directive('myDirective', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<a href="https://google.com">  Click me to go to Google</a>'
    };
});

app.directive('mySecondDirective', function () {
    return {
        restrict: 'E',
        template: '<a href="{{ myUrl }}">{{ myLinkText }}</a>'
    };
});

app.directive('myThirdDirective', function () {
    return {
        restrict: 'A',
        replace: true,
        scope: {
            myUrl: '@',
            myLinkText: '@'
        }
    };
})

app.run(function ($rootScope) {
   $rootScope.rootProperty = 'Root Scope';
});

app.controller('ParentController', function ($scope) {
    $scope.parentProperty = 'parent scope';
});

app.controller('ChildController', function ($scope) {
    $scope.childProperty = 'child scope';
    $scope.fullSentenceFromChild = 'Same $scope: we can access:' +
            $scope.rootProperty + ' and '+
            $scope.parentProperty + ' and ' +
            $scope.childProperty
});
