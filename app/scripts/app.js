'use strict';

/**
 * @ngdoc overview
 * @name armsAngularApp
 * @description
 * # armsAngularApp
 *
 * Main module of the application.
 */
angular
  .module('armsAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      
        $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login',
        activeTab: 'login'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
     .when('/faculty', {
        templateUrl: 'views/faculty.html',
        controller: 'FacultyCtrl',
        controllerUrl: 'app/controllers/faculty_management'
      })
     .when('/department', {
        templateUrl: 'views/department.html',
        controller: 'DepartmentCtrl',
        controllerUrl: 'app/controllers/faculty_management'
      })
      .otherwise({
        redirectTo: '/'
      });
    // use the HTML5 History API
       $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });

    }])
    .run(function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, currentRoute) {
      console.log(currentRoute.templateUrl);
      switch(currentRoute.templateUrl) {
          case 'views/login.html':
              $rootScope.bodyClass = 'login-page';
              break;
          default:
              $rootScope.bodyClass = 'skin-blue sidebar-mini';
              break;
      }
  });
});
