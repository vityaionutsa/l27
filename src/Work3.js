var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.countries = ['Україна', 'США', 'Китай', 'Японія', 'Німеччина'];
  $scope.addCountry = function() {
    if ($scope.newCountry !== '') {
      $scope.countries.push($scope.newCountry);
      $scope.newCountry = '';
    }
  };
});
