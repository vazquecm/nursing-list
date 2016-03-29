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

  function getProcedures() {
      console.log('doing something for procedures')
      $http.get('/procedures')
        .then(function(res) {
        console.log(res.data);
        $scope.procedures = $scope.procedures.concat(res.data);
        console.log($scope.procedures)
      })
    }()

  $scope.createProcedure = function() {
    console.log('create some new procedure!!!');
      if (!$scope.createProcedureInput) { return; }

      $http.post('/procedures', {
        procedure: $scope.createProcedureInput,
        note: $scope.createNoteInput,
        isCompleted: false,
        isEditing: false
      })
      .then(function(res) {
        console.log(res.data);
         // getProcedures($scope);
         $scope.createProcedureInput = '';
         $scope.createNoteInput ='';
      })

      params.createHasInput = false;
      $scope.createProcedureInput = '';
      $scope.createNoteInput = '';
    }

    $scope.$watch('createProcedureInput', 'createNoteInput', val => {
      console.log('please create a procedure and note');
       if (!val && params.createHasInput) {
         $scope.procedures.pop();
         params.createProcedureInput = false;
         params.createNoteInput = false;
       }else if (val && !params.createHasInput) {
        $scope.procedures.push({
          procedure: val,
          isCompleted: false,
          note: val,
          isCompleted: false
        });
        params.createHasInput = true;
       } else if (val && params.createHasInput) {
          $scope.procedures[$scope.procedures.length -1].procedure = val;
      }
    })

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

   $scope.createNote = function() {
      if (!$scope.createNoteInput) { return; }
      console.log('trying to create/update a note!!!!!')
      $http.post('/procedures', {
        procedure: $scope.createProcedureInput,
        note: $scope.createNoteInput,
        isCompleted: false,
        isEditing: false
      })
      .then(function(res){
        console.log(res.data);
        $scope.createNoteInput = '';

      })
      params.createHasInput = false;
      $scope.createNoteInput = '';

    // $scope.$watch('createNoteInput', val => {
    //    if (!val && params.createHasInput) {
    //      $scope.procedures.pop();
    //      params.createHasInput = false;
    //    }else if (val && !params.createHasInput) {
    //     $scope.procedures.push({ task: val, isCompleted: false});
    //     params.createHasInput = true;
    //    } else if (val && params.createHasInput) {
    //       $scope.procedures[$scope.procedures.length -1].task = val;
    //     }
    //   })
    }


   // $scope.updateNote = function(list) {
   //  console.log(list);
   //  $http.put(`/procedures/${list._id}`, { note: list.updatedNote})
   //  .then(function(res) {
   //    console.log(res.data);
   //      getUpdatedNotes($scope);
   //      list.isEditing = false;
   //  });

   //      list.note = list.updatedNote;
   //      list.isEditing = false;
   //  }

    $scope.deleteNote = function(list) {
      console.log('DELETE IT!!!', list);
       $http.delete(`/procedures`)
       .then(function(res) {
        console.log('finally deleting', res.data);
           // getProcedures($scope);
           // list.isEditing = false;
       });
           list.note = list.deletedNote;
           list.isEditing = false;
    }

  }
])
