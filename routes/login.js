const express = require('express');
const router = express.Router();

const config = require('../config/passport/strategySettings.js');

module.exports = (app, passport) => {

  app.get('/login-methods', (req, res) => {
    res.render('login.hbs');
  });

  // == GOOGLE

  app.get('/auth/google', passport.authenticate('google', {scope: config.google.scope}));
  app.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/login-methods'
  }));

}

