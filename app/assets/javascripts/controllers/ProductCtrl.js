var ProductsCtrl = angular.module('ProductsCtrl', ['ngAnimate']);

ProductsCtrl.controller('ProductsController', ['$scope', '$http', function ($scope, $http) {

    $scope.products = [];

//    $http.get({method: 'GET', url: 'http://localhost:3000/api/products'}).success(function (data) {
//
//        $scope.products = data;
//        $scope.productOrder = 'name';
//
//    });

    $http({method: 'GET', url: 'http://localhost:3000/api/products.json'}).
        success(function (data, status, headers, config) {
            $scope.products = data.products;
        }).
        error(function (data, status, headers, config) {
            alert(status);
        });

}]);

ProductsCtrl.controller('ProductController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $http({method: 'GET', url: 'http://localhost:3000/api/products/'+$routeParams.id+'.json'}).
        success(function (data, status, headers, config) {
            $scope.products = data;


           // $scope.whichItem = $routeParams.id;

//            if ($routeParams.itemId > 0) {
//                $scope.prevItem = Number($routeParams.itemId) - 1;
//            } else {
//                $scope.prevItem = $scope.products.length - 1;
//            }
//
//            if ($routeParams.itemId < $scope.products.length - 1) {
//                $scope.nextItem = Number($routeParams.itemId) + 1;
//            } else {
//                $scope.nextItem = 0;
//            }

        });
}]);

