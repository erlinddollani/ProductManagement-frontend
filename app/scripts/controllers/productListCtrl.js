'use strict';

angular.module('Commit.controllers')
  .controller('productListController', function($scope, $uibModal, productResource){

    $scope.show = true;
    $scope.productCode="";
    $scope.product = {};

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
    var getAllProducts = function() {
      productResource.query(function(data) {
        $scope.products = data;
      });
    };
    getAllProducts();

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

    $scope.GetDataById = function(productId) {
      productResource.get({id: productId}, function(data){
        $scope.product = data;
      },function(error){
        var err = error.statusText + "\r\n";// will display internal server error
        // to display more specific actual error
        if(error.data.exceptionMessage)
          err+=error.data.exceptionMessage;
        console.log(err);
      });
    };

/* * * editProduct()
--------------------------------------- */
    $scope.editProduct = function(productId) {
        $uibModal.open({
          animation: true,
          templateUrl: '../../views/modals/addProduct.html',
          resolve: {
            getProduct: ['productResource', function(productResource){
              return productResource.get({id: productId}, function(data){
                return data;
              });
            }]
          },
          controller: function (getProduct, $scope, $uibModalInstance) {
            getProduct.$promise.then(function(result){
              console.log(result);
              $scope.product = result;
              $scope.title = "Edit: " + $scope.product.productName;
            }, function(error){
              console.log(error);
            });

            $scope.ok = function() {
              $uibModalInstance.close();
              $scope.product.$update({id: $scope.product.productId},
                function(data) {
                  console.log(data);
                  getAllProducts();
                },function(error){
                  var err = error.statusText + "\r\n";
                  if(error.data.modelState) {
                    for (var key in response.data.modelState) {
                      err+= response.data.modelState[key] + "\r\n";
                    }
                  }
                  if(error.data.exceptionMessage)
                    err+=error.data.exceptionMessage;
                  console.log(err);
                })
            };
            $scope.cancel = function() {
              $uibModalInstance.dismiss('cancel');
            };
          }
        });
    }; /* * * ------------------------ finish of editProduct() ---- * * */


    /* * * saveNewProduct()
    --------------------------------------- */
    $scope.saveNewProduct = function(productId) {
        $uibModal.open({
          animation: true,
          templateUrl: '../../views/modals/addProduct.html',
          controller: function ($scope, $uibModalInstance) {
            $scope.title = "New Product";
            $scope.product = new productResource();
            $scope.ok = function() {
              $uibModalInstance.close();

              console.log($scope.product);
              var response = $scope.product.$save(
                function(data) {
                  console.log(data);
                  getAllProducts();
                },function(error){
                  var err = error.statusText + "\r\n";
                  if(error.data.exceptionMessage)
                    err+=error.data.exceptionMessage;
                  console.log(err);
                });
            };
            $scope.cancel = function() {
              $uibModalInstance.dismiss('cancel');
            };
          }
        });
    }; /* * * ------------------------ finish of saveNewProduct() ---- * * */

    $scope.delete = function(productId) {
      productResource.delete({id: productId}, function(data){
        getAllProducts();
        console.log(data);
      })
    };

});
