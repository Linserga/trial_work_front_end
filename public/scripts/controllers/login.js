'use strict';

angular.module('frontEndApp').controller('LoginCtrl', ['$scope', 'auth', '$location' ,function ($scope, auth, $location) {

	$scope.user = {};

	$scope.login = function(){
		if($scope.loginForm.$valid){
			auth.login($scope.user)
				.success(function (response){
					localStorage.setItem('auth_token', response.auth_token);
					$location.path('users/' + response.user.id + '/tasks');
				})
				.error(function (response){
					$scope.wrongCredentials = true;
			});
		} 
	};
}]);

