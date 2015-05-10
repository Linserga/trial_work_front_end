'use strict';

angular.module('frontEndApp')
  .controller('TasksCtrl', ['$scope', 'Task', '$routeParams', '$location', function ($scope, Task, $routeParams, $location) {
    
    var userId = $routeParams.id;		

    $scope.tasks = Task.query({id: userId});

    var dispatcher = new WebSocketRails('mysterious-fjord-9872.herokuapp.com/websocket');

    // dispatcher.trigger('get_tasks', userId);
    // dispatcher.bind('tasks', function (data){
    //     $scope.tasks = angualar.fromJson(data);
    // });    

    $scope.wordOrder = 'description';

    $scope.sort = function(item){
    	$scope.wordOrder = item;
    	$scope.reverse = !$scope.reverse;
    };

    $scope.add = function (){
    	$location.path('users/' + userId + '/tasks/new');
    };

    $scope.edit = function(task){
        $location.path('users/' + userId + '/tasks/' + task.id + '/edit');
    };

    // $scope.delete = function(task){
    //     for(var i = 0; i < $scope.tasks.length; i++){
    //         if($scope.tasks[i].id == task.id){
    //             $scope.tasks.splice(i, 1);
    //             break;
    //         }
    //     }
    //     Task.delete({id: userId, taskId: task.id});        
    // };

    

    $scope.delete = function (task){
        for(var i = 0; i < $scope.tasks.length; i++){
            if($scope.tasks[i].id == task.id){
                $scope.tasks.splice(i, 1);
                break;
            }
        }
        dispatcher.trigger('delete', task);
    };
  }]);
