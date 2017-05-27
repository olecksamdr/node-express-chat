process.env.NODE_ENV = 'test';

const User = require('../models/User.js');

let user = new User({
  first_name: 'Olecksandr',
  last_name: 'Veleshchuk',
  email: 'velsashok@gmail.com'
});

user.save();
