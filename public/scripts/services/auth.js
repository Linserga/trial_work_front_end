'use strict';

angular.module('frontEndApp')
	.service('auth', ['$http', function ($http){
		this.login = function (user){
			return $http.post('https://mysterious-fjord-9872.herokuapp.com/api/login', { email: user.email, password: user.password});
		};

		this.isLoggedIn = function(){
			return (localStorage.getItem('auth_token')) ? true : false; 
		};

		this.logout = function(){
			return $http.delete('https://mysterious-fjord-9872.herokuapp.com/api/logout');
		};
	}]);