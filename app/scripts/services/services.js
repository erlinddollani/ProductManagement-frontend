'use strict';

angular.module('Commit.services', [])
  .constant('appSettings',{
      apiBasepoint: "http://localhost:30000/",/*the server path*/
      apiEndpoint: "http://localhost:30000/api/"
  });
