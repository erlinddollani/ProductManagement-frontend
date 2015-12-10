'use strict';

angular.module('Commit.controllers')
  .controller('productListController', function($scope, productResource){

    $scope.show = true;
    $scope.productCode="";

    $scope.filterCode = function() {
      console.log("brenda filterCode()");
      /* Query String */
      productResource.query({search: $scope.productCode}, function(data) {
        $scope.products = data;
      });
    };

    $scope.clearCode = function() {
      $scope.productCode='';
    };


    productResource.query(function(data) {
      $scope.products = data;
    });

    console.log('jashte filterCode()');

});
