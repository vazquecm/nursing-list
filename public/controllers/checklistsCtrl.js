'use strict';

app.controller('ChecklistsCtrl', [
  '$scope', '$http', '$location',

  function($scope, $http, $location) {

    let params = {
    createHasInput: false
  }
// first 3 tasks are hard coded and cannot be edited or deleted permanently, will always come back after page is refreshed //
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
   },
  ],

// Load data from DB on controller load
    function getTasks() {
      console.log('doing something')
      $http.get('/checklists')
        .then(function(res) {
        console.log(res.data);
        $scope.checklists = $scope.checklists.concat(res.data);
        console.log($scope.checklists)
      })
    }();
// function allows user to create a new task and adds to list on DOM and also adding to DB //
    $scope.createTask = function() {
      if (!$scope.createTaskInput) { return; }
      console.log('firing create task post request')
      $http.post('/checklists', {
        task: $scope.createTaskInput,
        isCompleted: false,
        isEditing: false
      })
      .then(function(res){
        console.log(res.data);
        $scope.createTaskInput = '';

      })

      params.createHasInput = false;
      $scope.createTaskInput = '';
    }
// watches for the last character user types in "input" box and then loads entire text to DOM
    $scope.$watch('createTaskInput', val => {
       if (!val && params.createHasInput) {
         $scope.checklists.pop();
         params.createHasInput = false;
       }else if (val && !params.createHasInput) {
        $scope.checklists.push({
          task: val,
          isCompleted: false
        });
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
// function replaces original task to whatever user changes it too -- overrides the create task function above when edit button is clicked, also changes value in the DB //
   $scope.updateTask = function(list) {
    console.log(list);
    $http.put(`/checklists/${list._id}`, {
      task: list.updatedTask
    })

    .then(function(res) {
      console.log(res.data);
        getUpdatedTasks($scope);
        list.isEditing = false;
    });

        list.task = list.updatedTask;
        list.isEditing = false;
    };
// function deletes info on DOM and also in the DB //
    $scope.deleteTask = function(list) {
      console.log('deleting the task list!!!', list);
       $http.delete(`/checklists/${list._id}`)
       .then(function(res) {
        console.log('RESPONSE', res.data);

       });
           list.task = list.deletedTask;
           list.isEditing = false;
    }
  }
])
