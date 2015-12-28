'use strict';

angular.module('Commit.routes', [])
   .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('Commit', {
          template: '<div ui-view></div>',
          abstract: true
        })
         .state('Commit.home', {
            url: '/home',
            templateUrl: '../../views/home/home.html',
            controller: 'homeController',
            pageTitle: 'Home'
      });
      $urlRouterProvider.otherwise('/home');
  }]);
