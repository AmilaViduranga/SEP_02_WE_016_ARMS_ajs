'use strict';

/**
 * @ngdoc directive
 * @name armsAngularApp.directive:navBar
 * @description
 * # navBar
 */
angular.module('armsAngularApp')
  .directive('navBar', function () {
    return {
      templateUrl: 'views/navbar.html',
      restrict: 'A',
      controller: 'NavbarCtrl',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the navBar directive');
      }
    };
  });
