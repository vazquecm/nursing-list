
const Procedures = require('../models/proceduresModel');

//module.exports allows all the functions inside to be used in other places, they are like using a global variable but you need to "require" them in other files -- these functions are going to use the "magic" in mongoose to update, show, ....

module.exports = {
  create (req, res) {
    Procedures.create(req.body, (err, procedures) => {
      if (err) throw err;

    });
},

  update (req, res) {
    console.log(req.body);
    Procedures.update(req.body, (err, procedures) => {
      if (err) throw err;

    });
},

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
