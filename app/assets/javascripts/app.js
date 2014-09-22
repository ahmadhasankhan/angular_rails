var angular_rails = angular.module('angular_rails', [
    'ngRoute',
    'artistControllers',
    'HomeCtrl',
    'ProductsCtrl'
]);

angular_rails.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/products', {
            templateUrl: 'templates/products/index.html',
            controller: 'ProductsController'
        }).
        when('/product/:id', {
            templateUrl: 'templates/products/view.html',
            controller: 'ProductController'
        }).
        when('/list', {
            templateUrl: 'partials/list.html',
            controller: 'ListController'
        }).
        when('/details/:itemId', {
            templateUrl: 'partials/details.html',
            controller: 'DetailsController'
        }).
        otherwise({
            templateUrl: '../templates/home.html',
            controller: 'HomeCtrl'
        });
}]);