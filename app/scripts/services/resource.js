'use strict';

angular.module('Commit.services')
  .factory('productResource', function($http, $resource, appSettings) {

    /*return {
      get: function(entity, id) {
        if(id===null || id===undefined) {
          return $http({
            'method': 'GET',
            'url': appSettings.apiEndpoint + entity
          });
        }else {
          return $http({
            'method': 'GET',
            'url': appSettings.apiEndpoint + entity + '/' + id /*psh products
          });
        }
      }
    }*/

    /*return the data resource object
    return $resource(appSettings.apiBasepoint + "api/products/:id");*/

    /*extended the url path*/
    return $resource(appSettings.apiBasepoint + "api/products/:search");

});
