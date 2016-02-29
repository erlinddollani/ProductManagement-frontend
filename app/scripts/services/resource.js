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

    /*return the data resource object*/
    // null is for the default parameter
    // {'update'} is for custom actions, we decide to call it 'update'
    return $resource(appSettings.apiBasepoint + "api/products/:id", null, {
        'update':{method: 'PUT'}
      });

    /*extended the url path
    return $resource(appSettings.apiBasepoint + "api/products/:search");*/

});
