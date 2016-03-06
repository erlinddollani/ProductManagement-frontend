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
      'ui.bootstrap',
      'ui.router',
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'angular-loading-bar',
      // 'cfp.loadingBar',
      'Commit.routes',
      'Commit.services',
      'Commit.controllers'
]).config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    // cfpLoadingBarProvider.latencyThreshold = 500;
    // cfpLoadingBarProvider.spinnerTemplate = '<div><span class="fa fa-spinner">Loading...</div>';
    // cfpLoadingBarProvider.parentSelector = '#navbar';
    // cfpLoadingBar.inc();
  }]);
