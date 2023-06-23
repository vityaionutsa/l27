var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    $scope.number = 0;

    $scope.$watch('number', function(newValue, oldValue) {
        $scope.square = newValue * newValue;
    });
});