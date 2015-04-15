'use strict';

/**
 * @ngdoc function
 * @name managerApp.controller:CategoriesCtrl
 * @description
 * # CategoriesCtrl
 * Controller of the managerApp
 */
angular.module('managerApp')
  .controller('CategoriesCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
