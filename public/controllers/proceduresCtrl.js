'use strict';

app.controller('ProceduresCtrl', [
  '$scope', '$http', '$location',

   function($scope, $http, $location) {
    console.log('any procedures here?');
    let params = {
    createHasInput: false
  }
    let note = {
      isEditing: false,
      isCompleted: false
    }

     $scope.procedures = [
   {
     procedure: 'Hepatobiliary & Liver Tx',
     note: '',
     isCompleted: false,
     isEditing: false
   },
   {
     procedure: 'Renal',
     note: '',
     isCompleted: false,
     isEditing: false
   },
  ],

  $scope.createProcedure = function() {
    console.log('create some new procedure!!!');
      if (!$scope.createProcedureInput) { return; }

      $http.post('/procedures', {
        procedure: $scope.createProcedureInput,
        note: '',
        isCompleted: false,
        isEditing: false
      }).success(response => {
         getProcedures($scope);
         $scope.createProcedureInput = '';
      })
      params.createHasInput = false;
      $scope.createProcedureInput = '';
    }

    $scope.$watch('createProcedureInput', val => {
      console.log('please create a procedure');
       if (!val && params.createHasInput) {
         $scope.procedures.pop();
         params.createHasInput = false;
       }else if (val && !params.createHasInput) {
        $scope.procedures.push({ procedure: val, isCompleted: false});
        params.createHasInput = true;
       } else if (val && params.createHasInput) {
          $scope.procedures[$scope.procedures.length -1].procedure = val;
      }
    })

   $scope.updateNote = function(list) {
    console.log(note)
    $http.put(`/procedures/${note._id}`, { list: note.updateNote}).success(response => {
        getProcedures($scope);
        list.isEditing = false;
    });

        list.note = list.note;
        list.isEditing = false;
    }

   $scope.onCompletedClick = list => {
     list.isCompleted = !list.isCompleted;
   };

   $scope.onEditClick = list => {
     list.isEditing = true;
     list.updatedProcedure = list.procedure;
   };

   $scope.onCancelClick = list => {
     list.isEditing = false;
   };


    $scope.deleteNote = function(list) {
      console.log('DELETE IT!!!');
       $http.delete(`/procedures/${note._id}`, {list: note.deleteNote}).success(response => {
           getProcedures($scope);
           list.isEditing = false;
       });
           list.note = list.deleteNote;
           list.isEditing = false;
    }

  }
])
