const bcrypt = require('bcrypt-nodejs');
const Bookshelf = require('../config/db.js');

class User {
  constructor(options) {
    this.first_name = options.first_name;
    this.last_name = options.last_name;
    this.email = options.email;
    this.avatar_url = options.avatar_url;
    this.db = options.db;
  }

  getObjToInsert(obj1, obj2) {
      let obj = Object.assign({}, this);
      delete obj.db;
      return obj;

      console.log('=====================')
      console.log(obj);
      console.log('=====================')

  }

  save() {
    return this.db('users')
            .returning('user_id')
            .insert(this.getObjToInsert());
  }

  static find(hashObj, db) {
    return db('users').where(hashObj);
  }
}
module.exports = User;
