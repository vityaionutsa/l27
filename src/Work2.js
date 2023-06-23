var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.square = function() {
    $scope.result = $scope.number * $scope.number;
  };
});
