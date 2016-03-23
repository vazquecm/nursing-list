'use strict';

app.controller('ChecklistsCtrl', [
  '$scope', '$http', '$location',

  function($scope, $http, $location) {
    console.log('creating something!!!');
    let params = {
    createHasInput: false
  }

    $scope.checklists = [
   {
     task: 'Is the Consent signed & dated!!!',
     isCompleted: false,
     isEditing: false
   },
   {
     task: 'Make sure surgeon is here!!',
     isCompleted: false,
     isEditing: false
   },
   {
     task: 'Grab a drug box!!',
     isCompleted: false,
     isEditing: false
   }
  ],

  // listFactory.getTasks($scope);

    $scope.createTask = function() {
    console.log('yay, creating a task!!!');
      if (!$scope.createTaskInput) { return; }

      $http.post('/checklists', {
        task: $scope.createTaskInput,
        isCompleted: false,
        isEditing: false
      }).success(response => {
         getTasks($scope);
         $scope.createTaskInput = '';
      })
      params.createHasInput = false;
      $scope.createTaskInput = '';
    }

    $scope.$watch('createTaskInput', val => {
      console.log('please create a task');
       if (!val && params.createHasInput) {
         $scope.checklists.pop();
         params.createHasInput = false;
       }else if (val && !params.createHasInput) {
        $scope.checklists.push({ task: val, isCompleted: false});
        params.createHasInput = true;
       } else if (val && params.createHasInput) {
          $scope.checklists[$scope.checklists.length -1].task = val;
      }
    })

   $scope.onCompletedClick = list => {
     list.isCompleted = !list.isCompleted;
   };

   $scope.onEditClick = list => {
     list.isEditing = true;
     list.updatedTask = list.task;
   };

   $scope.onCancelClick = list => {
     list.isEditing = false;
   };

   $scope.updateTask = function(list) {
    $http.put(`/checklists/${list._id}`, { task: list.updatedTask }).success(response => {
        getTasks($scope);
        list.isEditing = false;
    });

        list.task = list.updatedTask;
        list.isEditing = false;
    }

    $scope.deleteTask = function(list) {
      console.log('DELETE IT!!!');
       $http.delete(`/checklists/${list._id}`, {task: list.deleteTask}).success(response => {
           getTasks($scope);
           list.isEditing = false;
       });
           list.task = list.deleteTask;
           list.isEditing = false;
   }

}
])
