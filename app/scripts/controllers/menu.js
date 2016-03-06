'use strict';

angular.module('Commit.controllers')
  .controller('menuController', function($scope, userAccount){
    $scope.isLoggedIn = false;
    $scope.message = '';

    $scope.userData = {
      userName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
    $scope.registerUser = function() {
      $scope.userData.confirmPassword = $scope.userData.password;
      userAccount.registration.registerUser($scope.userData, function(data){
        $scope.userData.confirmPassword = "";
        $scope.message = "... Regitration Successful";
        $scope.login();
      }, function(err){
        console.log(err);
        $scope.isLoggedIn = false;
        $scope.message = err.statusText + "\r\n";
        //Validation errs
        if(err.data.modelState){
          console.log(err.data.modelState);
          for(var key in err.data.models) {
            $scope.message += err.data.modelState[key] + "\r\n";
          }
        }
        console.log($scope.message);
      });
    };

    $scope.login = function() {
      console.log("login");
      $scope.userData.grant_type = "password";
      $scope.userData.userName = $scope.userData.email;

      userAccount.login.loginUser($scope.userData,
        function(data){
          $scope.isLoggedIn = true;
          $scope.message = "";
          $scope.password = "";
          $scope.token = data.access_token;
          console.log($scope.token);
        }, function(err){
          $scope.password = "";
          $scope.isLoggedIn = false;
          $scope.message = err.statusText + "\r\n";
          if(err.data != null)
            $scope.message += err.data.exceptionMessage;

          if(err.data) {
            $scope.message += err.data.error;
          }
        });
    }
  });
