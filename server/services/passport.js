import passport from 'passport'
import { extractJwt, Strategy } from 'passport-jwt'
import config from 'config'
import GitHubStrategy from 'passport-github2'
// locals
import User from '../models/user'

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

const github = new GitHubStrategy({
  clientID: config.github.id,
  clientSecret: config.github.secret,
  callbackURL: "http://localhost:3000/api/auth/github/callback"
},
function(accessToken, refreshToken, profile, done) {
  User.findOrCreate({ githubId: profile.id }, function (err, user) {
    return done(err, user);
  });
})

passport.use(github)
