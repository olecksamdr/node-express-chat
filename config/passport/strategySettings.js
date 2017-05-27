
/**
 * Expose
 */

module.exports = {
  facebook: {
    clientID: 'APP_ID',
    clientSecret: 'SECRET',
    callbackURL: 'http://localhost:3000/auth/facebook/callback',
    scope: [
      'email',
      'user_about_me',
      'user_friends'
    ]
  },
  google: {
    clientID: '193761939413-13c0fmm52ocfkinhb8j84ftv91dij6f5.apps.googleusercontent.com',
    clientSecret: 'tBSWnQ6T6OZFL5XEx49UgVf_',
    callbackURL: 'http://localhost:3000/auth/google/callback',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
    ]
  }
};
