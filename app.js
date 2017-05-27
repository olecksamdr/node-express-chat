var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const passport = require('passport');

var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);

var sessionStore = new MySQLStore({
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: '48106shiftb',
  database: 'chat_session'
});

// view engine
var hbs  = require('express-handlebars');

var app = express();

app.set('views', path.join(__dirname, 'views'));

// view engine setup
app.engine('.hbs', hbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  key: 'my-cookie',
  secret: 'session-secret',
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    someSite: true,
    resave: true,
    expires: null
  },
  store: sessionStore
}));

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
// all routes
require('./routes')(app, passport);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
