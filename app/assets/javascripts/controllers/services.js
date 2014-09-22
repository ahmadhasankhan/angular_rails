angular.module('angular_rails.services', [])
    .factory('productsAPIservice', function ($http) {

        var productsAPI = {};

        productsAPI.getProducts = function () {
            return $http({
                method: 'GET',
                url: 'http://localhost:3000/products-back.json'
            });
        }
        return productsAPI;
    });