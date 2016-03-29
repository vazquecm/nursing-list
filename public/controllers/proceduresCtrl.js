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

// Load data from DB on controller load
  function getProcedures() {
      console.log('doing something for procedures');
      $http.get('/procedures')
        .then(function(res) {
        console.log(res.data);
        $scope.procedures = $scope.procedures.concat(res.data);
        console.log($scope.procedures)
      })
    }();

// both input fields used to create one procedure
  $scope.createProcedure = function() {
      if (!$scope.createProcedureInput) { return; }
      if (!$scope.createNoteInput) { return; }
    console.log('create some new procedure!!!');
      $http.post('/procedures', {
        procedure: $scope.createProcedureInput,
        note: $scope.createNoteInput,
        isCompleted: false,
        isEditing: false
      })
      .then(function(res) {
        console.log("RES DATA",res.data);
        $scope.procedures.push({
           _id: res.data._id,
           procedure: res.data.procedure,
           note: res.data.note,
           isCompleted: true,
           isEditing: false
         });
         $scope.createProcedureInput = '';
         $scope.createNoteInput ='';
      })

      params.createHasInput = false;

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

   $scope.updateProcedure = function(list) {
    console.log('getting to update maybe???', list);

    $http.post(`/procedures/${list._id}`, {
      procedure: list.procedure,
      note: list.note
    })

    .then(function(res) {
      console.log(res.data);
        list.isEditing = false;
    });
        list.procedure = list.procedure;
        list.note = list.note;
        list.isEditing = false;
    }

    $scope.deleteProcedure = function(list) {
      console.log('deleting the procedure!!!', list);
       $http.delete(`/procedures/${list._id}`)
       .then(function(res) {
        console.log('finally deleting', res.data);
       });
         list.procedure = '';
         list.note = '';
         list.isEditing = false;
    }

  }
])
