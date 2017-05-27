let config = require('./strategySettings.js').google;
const db = require('../db.js');

const User = require('../../models/User.js');
const AuthProvider = require('../../models/AuthProvider.js');

let GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = new GoogleStrategy({
    clientID: config.clientID,
    clientSecret: config.clientSecret,
    callbackURL: config.callbackURL
  },
  function (accessToken, refreshToken, profile, done) {
    AuthProvider.find({
      provider_type: 'google',
      hash: profile.id
    }, db)
    .then((providerRows) => {
      if (providerRows.length === 0) {
        // create a new user
        let user = new User({
                db,
                first_name: profile.name.familyName,
                last_name: profile.name.givenName,
                avatar_url: profile.photos[0].value,
                email: profile.emails[0].value
              });

        user.save()
            .then(addIdToUser(user))
            .then(createAndSaveProvider(profile, db))
            .then(() => done(null, user))
            .catch(err => done(err));
      }
      else {
        // provider exists and we find coresponding user
        User.find({user_id: providerRows[0].user_id}, db)
            .then(userRow => {
              done(null, userRow[0]);
            })
            .catch(err => done(err));
      }
    });
  });

const addIdToUser = (user) => {
  return (userIdRow) => {
    user.user_id = userIdRow[0];
    return Promise.resolve(user);
  }
}

const createAndSaveProvider = (profile, db) => {
  return (user) => {

    let userProvider = new AuthProvider({
      provider_type: 'google',
      hash: profile.id,
      user_id: user.user_id,
      db: db
    });

    return userProvider.save();
  }
}
