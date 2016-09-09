'use strict';

/**
 * @ngdoc directive
 * @name armsAngularApp.directive:faculty
 * @description
 * # faculty
 */
angular.module('armsAngularApp')
  .directive('faculty', function () {
    return {
      templateUrl: 'views/faculty.html',
      restrict: 'A',
      controller: 'FacultyCtrl',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the navBar directive');
      }
    };
  });
