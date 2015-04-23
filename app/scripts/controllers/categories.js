'use strict';

/**
 * @ngdoc function
 * @name managerApp.controller:CategoriesCtrl
 * @description
 * # CategoriesCtrl
 * Controller of the managerApp
 */
var app = angular.module('managerApp');
app.controller('CategoriesCtrl', function($scope, CategoryService) {
    CategoryService.getCategory().then(function(data) {
        $scope.catRows = data.rows;
    });

    $scope.addCategory = function(val) {
        CategoryService.saveCategory(val).then(function(data) {
            $('#add').modal('hide');
            CategoryService.getCategory().then(function(data) {
                $scope.catRows = data.rows;
            });
        });
    }

    $scope.editCat = function(val) {
        CategoryService.fetchCategory(val).then(function(data) {
            $scope.cat = data;
            $('#edit').modal('show');
        });
    }
    $scope.updateCat = function(val) {
        CategoryService.updateCategory(val).then(function(data) {
            $('#edit').modal('hide');
            CategoryService.getCategory().then(function(data) {
                $scope.catRows = data.rows;
            });
        });
    }

    $scope.deleteCat = function(id, rev) {
        $('#cid').val(id);
        $('#rev').val(rev);
        $('#delete').modal('show');
    }

    $scope.delCategory = function() {
        CategoryService.delCategory($('#cid').val(), $('#rev').val()).then(function(data) {
            $('#delete').modal('hide');
            CategoryService.getCategory().then(function(data) {
                $scope.catRows = data.rows;
            });
        });
    }

    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
});



app.service('CategoryService', function($http, $q) {
    return {
        getCategory: function() {
            var deferred = $q.defer();
            $http.get('http://'+DbManager+'/manager/_design/lists/_view/categories?include_docs=true', {
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
        saveCategory: function(val) {
            var deferred = $q.defer();
            $http.put('http://'+DbManager+'/manager/category_' + Date.now(), {'_id': 'category_' + Date.now(), 'label': val}, {
                headers: {
                    'Content-Type': 'application/json'
                },
            }).success(function(data) {
                deferred.resolve(data);
            }).error(function() {
                deferred.reject();
            });
            return deferred.promise;
        },
        fetchCategory: function(val) {
            var deferred = $q.defer();
            $http.get('http://'+DbManager+'/manager/' + val, {
                headers: {
                    'Content-Type': 'application/json'
                },
            }).success(function(data) {
                deferred.resolve(data);
            }).error(function() {
                deferred.reject();
            });
            return deferred.promise;
        },
        updateCategory: function(val) {
            var deferred = $q.defer();
            $http.put('http://'+DbManager+'/manager/' + val._id, val, {
                headers: {
                    'Content-Type': 'application/json'
                },
            }).success(function(data) {
                deferred.resolve(data);
            }).error(function() {
                deferred.reject();
            });
            return deferred.promise;
        },
        delCategory: function(id, rev) {
            var deferred = $q.defer();
            $http.put('http://'+DbManager+'/manager/' + id, {"_id": id, "_rev": rev, "_deleted": true}, {
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