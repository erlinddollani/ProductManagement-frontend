'use strict';

angular.module('Commit.services')
  .factory('userAccount', function($resource, appSettings){
    return {
      registration: $resource(appSettings.apiEndpoint + "Account/Register", null,
        {
          'registerUser': { method: 'POST' }
        }),
      login: $resource(appSettings.apiBasepoint + "Token", null,
        {
          'loginUser': {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(data, headersGetters) {
              var str = [];
              for(var d in data)
                str.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));

              return str.join("&");
            }
          }
        })
    }

  });
