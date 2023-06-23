var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
  $scope.isChecked = false;
  $scope.toggleCheckbox = function() {
    $scope.isChecked = !$scope.isChecked;
  };
});
