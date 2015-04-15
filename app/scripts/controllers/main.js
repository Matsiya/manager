'use strict';

/**
 * @ngdoc function
 * @name managerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the managerApp
 */
angular.module('managerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
