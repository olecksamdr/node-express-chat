module.exports = (app, passport) => {

  app.get('/', (req, res) => res.render('index.hbs'));
  
  // local login, google, facebook routes
  require('./login.js')(app, passport);
}


