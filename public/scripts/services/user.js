'use strict';

angular.module('frontEndApp').factory('User', ['$resource', function ($resource){
	return $resource('https://mysterious-fjord-9872.herokuapp.com/api/users/');
}]);