'use strict';
/**
 * @ngdoc function
 * @name managerApp.controller:PartnersCtrl
 * @description
 * # PartnersCtrl
 * Controller of the managerApp
 */
var app = angular.module('managerApp');
app.controller('addPartnerCtrl', function($scope, partnerService,$location) {
    partnerService.getCategory().then(function(data) {
        $scope.category = data.rows;
    });
    $scope.addPartner = function(){
        partnerService.savePartner(this.partner).then(function(data) {
                $location.path('/partners');
            });
    }
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
});
app.service('partnerService', function($http, $q) {
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
        savePartner: function(partner) {
            
            partner._id= "partner_"+Date.now();
            var deferred = $q.defer();
            
            $http.put('http://188.166.105.97:5984/manager/partner_'+Date.now(),partner, {
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