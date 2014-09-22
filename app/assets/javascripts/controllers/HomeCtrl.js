var HomeCtrl = angular.module('HomeCtrl', ['ngAnimate']);

HomeCtrl.controller('HomeCtrl', ['$scope', function($scope) {
    $scope.welcome = 'This is the first Application on Angular'
}]);

