'use strict';

angular.module('frontEndApp')
	.controller('CreateCtrl', ['$scope', '$location', 'Task', 'User', '$routeParams', function ($scope, $location, Task, User, $routeParams){

		$scope.users = User.query();
		$scope.userId = $routeParams.id;

		$scope.task = new Task({id: $scope.userId});

		$scope.addTask = function(){
			if($scope.taskForm.$valid){
				$scope.task.$save();
				$location.path('users/' + $scope.userId + '/tasks');
			}
		};
	}]);