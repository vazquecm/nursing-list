
app.controller('ChecklistsCtrl', [
  '$scope', '$http', '$location',

  function($scope, $http, $location) {

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
   },
  ],

    function getTasks() {
      console.log('doing something')
      $http.get('/checklists')
        .then(function(res) {
        console.log(res.data);
        $scope.checklists = $scope.checklists.concat(res.data);
        console.log($scope.checklists)
      })
    }()

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
      // .success(response => {
      //    getTasks($scope);
      // })
      params.createHasInput = false;
      $scope.createTaskInput = '';
    }

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

   $scope.updateTask = function(list) {
    console.log(list);
    $http.put(`/checklists/${list._id}`, { task: list.updatedTask })
    .then(function(res) {
      console.log(res.data);
        getUpdatedTasks($scope);
        list.isEditing = false;
    });

        list.task = list.updatedTask;
        list.isEditing = false;
    };

    $scope.deleteTask = function(list) {
      console.log('DELETE IT!!!', list);
       $http.delete(`/checklists/${list._id}`)
       .then(function(res) {
        console.log('RESPONSE', res.data);
           // getDeletedTasks($scope);
           // list.isEditing = false;
       });
           list.task = list.deletedTask;
           list.isEditing = false;
    }
  }
])
