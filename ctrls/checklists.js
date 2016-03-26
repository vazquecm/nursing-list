'use strict';

const Checklists = require('../models/checklistsModel');

// module.exports allows all the functions inside to be used in other places, they are like using a global variable but you need to "require" them in other files -- these functions are going to use the "magic" in mongoose to update, show, ....

module.exports = {
  index (req, res) {
    Checklists.find({}, (err, checklists) => {
      if (err) throw err;

      res.render('checklists-index', {
        checklists: checklists
     });
  });
},

  // new (req, res) {
  //   res.render('checklists-new');
  // },

  create (req, res) {
    Checklists.create(req.body, (err) => {
      if (err) throw err;

      res.redirect('/checklists');
    });
},
  // show (req, res) {
  //     res.render('checklists-show', {
  //       checklists: req.checklists
  //     });
  // },

  update (req, res) {
    Checklists.update(req.body, (err) => {
      if (err) throw err;

      res.redirect('/checklists');
    });
},
  // show (req, res) {
  //     res.render('checklists-show', {
  //       checklists: req.checklists
  //     });
  // },

  delete (req, res) {
    Checklists.delete(req.body, (err) => {
      if (err) throw err;

      res.redirect('/checklists');
    });
},
  // show (req, res) {
  //     res.render('checklists-show', {
  //       checklists: req.checklists
  //     });
  // },

};
//   create (req, res)
//     console.log(req.body)
//     // var checklist = new CheckList({
//     //   task: req.body.task,
//     //   isCompleted: req.body.isCompleted,
//     //   isEditing: req.body.isEditing
//     // })
//     // checklist.save();
//     res.sendStatus(200);
// });
