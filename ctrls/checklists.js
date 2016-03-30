'use strict';

const Checklists = require('../models/checklistsModel');

//module.exports allows all the functions inside to be used in other places, they are like using a global variable but you need to "require" them in other files -- these functions are going to use the "magic" in mongoose to create,update and delete.

module.exports = {
  create (req, res) {
    Checklists.create(req.body, (err, checklists) => {
      if (err) throw err;
      res.send(checklists);
    });
},
// looks for a specific "id" to be updated and then replaces info to it and sets it to the new values chosen //
  update (req, res) {
    console.log(req.body);
    Checklists.update(req.body, (err, checklists) => {
      if (err) throw err;
      res.send(checklists);
    });
},
/// deletes only the chosen "id" from the DOM and also the DB //
  destroy (req, res) {
    Checklists.remove(`$_id: {req.params.id}`, (err) => {
      if (err) throw err;
      console.log('checklist deleted')
    });
  },

  find (req, res) {
    console.log('herre')
    Checklists.find({}).exec(req.body, (err, checklists) => {
      console.log(checklists)
      res.send(checklists);
    });
  }
};
