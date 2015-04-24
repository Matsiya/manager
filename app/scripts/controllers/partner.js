
'use strict';
/**
 * @ngdoc function
 * @name managerApp.controller:PartnersCtrl
 * @description
 * # PartnersCtrl
 * Controller of the managerApp
 */
var app = angular.module('managerApp');
app.controller('PartnerCtrl', function($scope, editPartnerService, $location, $routeParams) {
    editPartnerService.fetchPartner($routeParams.id).then(function(data) {
        $scope.partner = data;
    });
    editPartnerService.getCategory().then(function(data) {
        $scope.category = data.rows;
    });
    $scope.updatePartner = function(val) {
        editPartnerService.updatePartner(val).then(function(data) {
            $location.path('/partners');
        });
    };
});
app.service('editPartnerService', function($http, $q) {
    return {
        getCategory: function() {
            var deferred = $q.defer();
            $http.get('http://' + DbManager + '/manager/_design/lists/_view/categories?include_docs=true', {
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
        fetchPartner: function(val) {
            var deferred = $q.defer();
            $http.get('http://' + DbManager + '/manager/' + val, {
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
        updatePartner: function(partner) {
            var deferred = $q.defer();
            $http.put('http://' + DbManager + '/manager/' + partner._id, partner, {
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
    }
});
