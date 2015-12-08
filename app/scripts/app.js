'use strict';

/**
 * @ngdoc overview
 * @name productManagementFrontendApp
 * @description
 * # productManagementFrontendApp
 *
 * Main module of the application.
 */
angular.module('Commit', [
      'ui.router',
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'Commit.routes',
      'Commit.services',
      'Commit.controllers'
]);
