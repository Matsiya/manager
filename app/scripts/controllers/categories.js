'use strict';

/**
 * @ngdoc function
 * @name managerApp.controller:CategoriesCtrl
 * @description
 * # CategoriesCtrl
 * Controller of the managerApp
 */
var app = angular.module('managerApp');
app.controller('CategoriesCtrl', function($scope, getCategoryService) {
    getCategoryService.getCategory().then(function(data) {
        $scope.catRows = data.rows;
    });
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
});



app.service('getCategoryService', function($http, $q) {
    return {
        getCategory: function() {
            var deferred = $q.defer();
            $http.get('http://188.166.105.97:5984/manager/_design/lists/_view/categories?include_docs=true', {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).success(function(data) {
                deferred.resolve(data);
            }).error(function() {
                deferred.reject();
            });
            return deferred.promise;
        },
    }
});