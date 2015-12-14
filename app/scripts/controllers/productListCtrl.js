'use strict';

angular.module('Commit.controllers')
  .controller('productListController', function($scope, productResource){

    $scope.show = true;
    $scope.productCode="";

    $scope.filterCode = function() {
      /* Query String */
      productResource.query({search: $scope.productCode}, function(data) {
        $scope.products = data;
      });
    };

    $scope.clearCode = function() {
      $scope.productCode='';
    };

    /* First case get all the data */
    productResource.query(function(data) {
      $scope.products = data;
    });

    /*Second case
    productResource.query({$skip:1, $top:3}, function(data){
      $scope.products = data;
    });*/

    /*Third case
    productResource.query(
      { $filter: "contains(ProductCode, 'GDN') and Price ge 5 and Price le 20",
        $orderby: "Price desc"}, function(data){
      $scope.products = data;
    });*/

    /*Fourth case
    var searchCriteria = "GDN";
    var sortProperty = "Price";
    var sortDirection = "desc";
    productResource.query({
      $filter: "contains(ProductCode, '" + searchCriteria + "')" +
               "or contains(ProductName, '" + searchCriteria + "')",
      $orderby: sortProperty + " " + sortDirection
    }, function(data){
      $scope.products = data;
    })*/
});
