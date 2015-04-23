'use strict';
/**
 * @ngdoc function
 * @name managerApp.controller:PartnersCtrl
 * @description
 * # PartnersCtrl
 * Controller of the managerApp
 */
var app = angular.module('managerApp');
app.controller('PartnersCtrl', function($scope, getpartnerService) {
    getpartnerService.getPartners().then(function(data) {
        $scope.partnerRows = data.rows;
    });
    $scope.deletePartner = function(id, rev) {
        $('#pid').val(id);
        $('#rev').val(rev);
        $('#delete').modal('show');
    }
    $scope.delPartner = function() {
        getpartnerService.delPartners($('#pid').val(), $('#rev').val()).then(function(data) {
            console.log(data);
            $('#delete').modal('hide');
            getpartnerService.getPartners().then(function(data) {
                $scope.partnerRows = data.rows;
            });
        });
    }
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
});
app.service('getpartnerService', function($http, $q) {
    return {
        getPartners: function() {
            var deferred = $q.defer();
            $http.get('http://'+DbManager+'/manager/_design/lists/_view/partners?include_docs=true', {
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
        delPartners: function(id, rev) {
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

