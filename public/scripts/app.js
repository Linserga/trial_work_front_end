'use strict';

angular.module('frontEndApp', ['ngMessages', 'ngResource', 'ngRoute'])

  .factory('authInterceptor', ['$q', '$location', function($q, $location){
    return {
      request: function (config){
        config.headers = config.headers || {};
        if(localStorage.auth_token){
          config.headers.token = localStorage.auth_token;
        }
        return config;
      },
      responseError: function (response){
        if(response.status === 401){
          $location.path('/login');
        }
        return $q.reject(response);        
      }
    };
  }])

  .config(function ($httpProvider){
    $httpProvider.interceptors.push('authInterceptor');
  })

  .config(function ($routeProvider) {
    $routeProvider
      .when('/users/:id/tasks', {
        templateUrl: 'views/tasks.html',
        controller: 'TasksCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })   
      .when('/users/:id/tasks/new', {
        templateUrl: 'views/new.html',
        controller: 'CreateCtrl'
      })   
      .when('/users/:id/tasks/:taskId/edit', {
        templateUrl: 'views/edit.html',
        controller: 'EditCtrl'
      })
      .otherwise({
        redirectTo: '/login'
      });
  });
