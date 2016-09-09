'use strict';

/**
 * @ngdoc directive
 * @name armsAngularApp.directive:department
 * @description
 * # department
 */
angular.module('armsAngularApp')
  .directive('department', function () {
    return {
      templateUrl: 'views/department.html',
      restrict: 'A',
      controller: 'DepartmentCtrl',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the navBar directive');
      }
    };
  });
