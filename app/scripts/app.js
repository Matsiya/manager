'use strict';

/**
 * @ngdoc overview
 * @name managerApp
 * @description
 * # managerApp
 *
 * Main module of the application.
 */
angular
  .module('managerApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/categories', {
        templateUrl: 'views/categories.html',
        controller: 'CategoriesCtrl'
      })
      .when('/partners', {
        templateUrl: 'views/partners.html',
        controller: 'PartnersCtrl'
      })
      .when('/partner', {
        templateUrl: 'views/partner.html',
        controller: 'PartnerCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
