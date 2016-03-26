
const Checklists = require('../models/checklistsModel');

//module.exports allows all the functions inside to be used in other places, they are like using a global variable but you need to "require" them in other files -- these functions are going to use the "magic" in mongoose to update, show, ....

module.exports = {
  create (req, res) {
    Checklists.create(req.body, (err, checklists) => {
      if (err) throw err;

      res.redirect('/checklists/${checklists._id}');
    });
},

  update (req, res) {
    req.checklists.update(req.body, (err) => {
      if (err) throw err;

      res.redirect('/checklists/${req.checklists._id}');
    });
},

  destroy (req, res) {
    req.checklists.remove((err) => {
      if (err) throw err;

      res.redirect('/checklists');
    });
  }

};
  // new (req, res) {
  //   res.render('checklists-new');
  // },

  // show (req, res) {
  //     res.render('checklists-show', {
  //       checklists: req.checklists
  //     });
  // },

  // show (req, res) {
  //     res.render('checklists-show', {
  //       checklists: req.checklists
  //     });
  // },

  // show (req, res) {
  //     res.render('checklists-show', {
  //       checklists: req.checklists
  //     });
  // },

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
