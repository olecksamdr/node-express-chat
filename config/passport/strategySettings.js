
/**
 * Expose
 */

module.exports = {
  facebook: {
    clientID: '1878345289076980',
    clientSecret: '89b0b82bfc47f35f5986c078287c8b25',
    callbackURL: 'http://localhost:3000/auth/facebook/callback',
    scope: [
      'public_profile',
      'email'
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
