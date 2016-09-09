'use strict';

/**
 * @ngdoc service
 * @name armsAngularApp.apiDataService
 * @description
 * # apiDataService
 * This service handle all api get and post calls.
 */
angular.module('armsAngularApp')
  .factory('dataServiceRole',[ '$http','CONFIG',function ($http,CONFIG) {
    //base url for api calls

    var baseUrl  = CONFIG.BASE_URL;
    var dataServiceRole = {};

    //insert new role api call
    dataServiceRole.insertNewRole = function(userRole) {
      return $http.post(baseUrl+'add-new-role',userRole);
    };

    dataServiceRole.getAllUsers = function(){
        return $http.get(baseUrl+'locations');
    };

    return dataServiceRole;

  }]);
