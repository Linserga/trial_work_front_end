'use strict';

angular.module('frontEndApp')
	.directive('navbar', function(){
		return {
			restrict: 'E',
			templateUrl: 'views/partials/nav.html',
			controller: 'NavCtrl'
		};
	});