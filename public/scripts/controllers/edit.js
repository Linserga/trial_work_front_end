'use strict';

angular.module('frontEndApp')
	.controller('EditCtrl', ['$scope', '$location', '$routeParams', 'Task', function($scope, $location, $routeParams, Task){

		var userId = $routeParams.id;
		var taskId = $routeParams.taskId;

		$scope.task = Task.get({id: userId, taskId: taskId});

		$scope.updateTask = function(){
			Task.update({id: userId, taskId: taskId}, $scope.task);
			$location.path('users/' + userId + '/tasks');
		};
	}]);