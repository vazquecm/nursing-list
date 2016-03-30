
const Procedures = require('../models/proceduresModel');

//module.exports allows all the functions inside to be used in other places, they are like using a global variable but you need to "require" them in other files -- these functions are going to use the "magic" in mongoose to update, show, ....

module.exports = {
  create (req, res) {
    Procedures.create(req.body, (err, procedures) => {
      if (err) throw err;
      console.log(procedures);
      res.send(procedures);
    });
},
// looks for a specific "id" to be updated and then replaces info to it and sets it to the new values chosen //
  update (req, res) {
    Procedures.update(`$_id: {req.params.id}`,
      {$set: {
        procedure: req.body.procedures,
        note: req.body.notes
      }},
      (err, procedures) => {
    console.log(req.body);
      if (err) throw err;
      res.send(procedures);
    });
  },
/// deletes only the chosen "id" from the DOM and also the DB //
  destroy (req, res) {
    Procedures.remove(`$_id: {req.params.id}`, (err) => {
      if (err) throw err;
      console.log('procedures deleted')
    });
  },

  find (req, res) {
    console.log('herre')
    Procedures.find({}).exec(req.body, (err, procedures) => {
      console.log(procedures)
      res.send(procedures);
    });
  }
};
