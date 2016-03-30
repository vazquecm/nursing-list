'use strict';

const mongoose = require('mongoose');



const UserSchema = mongoose.Schema({
  email: String,
  password: String
});

// UserSchema.methods.authenticate = function (password, cb) {
//     bcrypt.compare(password, this.password,cb);
// };

// // hashing the password to enable more encryptability -- safeguards the password better providing increased security
// UserSchema.pre('save', function (next) {
//   bcrypt.hash(this.password, BCRYPT_DIFFICULTY, (err, hash) => {
//     if (err) throw err;

//     this.password = hash;
//     next();
//   });
// });

module.exports = mongoose.model('Users', UserSchema);


