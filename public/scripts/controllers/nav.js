'use strict';

angular.module('frontEndApp')
	.controller('NavCtrl', ['$scope', '$location', 'auth', function ($scope, $location, auth){

		$scope.loggedIn = auth.isLoggedIn;   

        $scope.logout = function(){
        	auth.logout()
        		.success( function(){
        			localStorage.removeItem('auth_token');
        			$location.path('/login');
        		})
        		.error();
        };
	}]);