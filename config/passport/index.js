//const local = require('./passport/local');
const google = require('./google.js');
const facebook = require('./facebook.js');

const db = require('../db.js');
const User = require('../../models/User.js');

/**
 * Expose
 */

module.exports = function (passport) {

  // serialize and deserialize sessions
  passport.serializeUser((user, done) => {
    done(null, user.user_id);
  });

  passport.deserializeUser((id, done) => {
    User.find({user_id: id}, db)
        .then(user => done(null, user))
        .catch(err => done(err));
  });

  // use these strategies
  //  passport.use(local);
  passport.use('google', google);
  passport.use('facebook', facebook);
};
