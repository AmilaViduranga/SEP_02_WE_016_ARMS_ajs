'use strict';

/**
 * @ngdoc function
 * @name armsAngularApp.controller:FacultyCtrl
 * @description
 * # FacultyCtrl
 * Controller of the armsAngularApp
 */
angular.module('armsAngularApp')
  .controller('FacultyCtrl', ["$scope", "$http" ,function($scope, $http) {

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

     $scope.newfacultyform = {};

     $scope.newfacultyform.AddNewFaculty = function(item, event) {
 
       var FormObject = {
          facultyname : $scope.newfacultyform.facultyname,
          facultylocation  : $scope.newfacultyform.facultylocation
       };

       console.log(FormObject);

       var responsePromise = $http.post("/addnewfaculty/json-data-post", FormObject, {});

       responsePromise.success(function(dataFromServer, status, headers, config) {
            //Success handler
       });
        responsePromise.error(function(data, status, headers, config) {
            //Error handler
       });
     }
}]);
