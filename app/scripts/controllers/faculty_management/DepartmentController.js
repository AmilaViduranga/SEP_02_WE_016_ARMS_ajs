'use strict';

/**
 * @ngdoc function
 * @name armsAngularApp.controller:DepartmentCtrl
 * @description
 * # DepartmentCtrl
 * Controller of the armsAngularApp
 */
angular.module('armsAngularApp')
  .controller('DepartmentCtrl', ["$scope", "$http" ,function($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

     $scope.newdepartmentform = {};

     $scope.newdepartmentform.addNewDepartment = function(item, event) {
 
       var FormObject = {
          departmentname : $scope.newdepartmentform.departmentname,
          faculty  : $scope.newdepartmentform.faculty,
          hod  : $scope.newdepartmentform.hod
       };

       console.log(FormObject);

       var responsePromise = $http.post("/addnewdepartment/json-data-post", FormObject, {});

       responsePromise.success(function(dataFromServer, status, headers, config) {
            //Success handler
       });
       responsePromise.error(function(data, status, headers, config) {
            //Error handler
       });
     }
}]);