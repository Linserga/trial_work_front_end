'use strict';

angular.module('frontEndApp')
  .controller('TasksCtrl', ['$scope', 'Task', '$routeParams', '$location', 'Sockets', function ($scope, Task, $routeParams, $location, Sockets) {
    
  var userId = $routeParams.id;
  $scope.tasks = [];

  $scope.tasks.push(Task.query({id: userId}));  

  var dispatcher = new WebSocketRails('mysterious-fjord-9872.herokuapp.com/websocket');
  var channel = dispatcher.subscribe('tasks');    


  channel.bind('change', function(data){
    $scope.$apply(function(){    
      $scope.tasks = [];
      $scope.tasks.push(angular.fromJson(data));
    });
  });  


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
    
  $scope.update = function(task){
    Task.update({id: userId, taskId: task.id}, task);
  };

  $scope.delete = function(task){            
    Task.delete({id: userId, taskId: task.id});   
  };    
}]);
