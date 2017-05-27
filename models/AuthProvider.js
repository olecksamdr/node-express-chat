const db = require('../config/db.js');

class AuthProvider {
  constructor(options) {
    this.hash = options.hash;
    this.user_id = options.user_id;
    this.provider_type = options.provider_type;
    this.db = options.db;
  }

  getObjToInsert(obj1, obj2) {
      let obj = Object.assign({}, this);
      delete obj.db;
      return obj;
  }

  save() {
    return this.db('auth_provider')
              .returning('provider_id')
              .insert(this.getObjToInsert());
  }

  static find(searchHash, db) {
    return db('auth_provider')
                .where(searchHash);
  }

}
module.exports = AuthProvider;
