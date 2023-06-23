var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.isChecked = false;

  $scope.check = function() {
	$scope.isChecked = true;
  };

  $scope.uncheck = function() {
	$scope.isChecked = false;
  };
});