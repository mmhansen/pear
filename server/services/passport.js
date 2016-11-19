import passport from 'passport'
import { extractJwt, Strategy } from 'passport-jwt'
import GitHubStrategy from 'passport-github2'
// locals
import User from '../models/user'
import config from './config'

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

const github = new GitHubStrategy({
  clientID: config().github.id,
  clientSecret: config().github.secret,
  callbackURL: "http://localhost:3000/api/auth/github/callback"
},
function(accessToken, refreshToken, profile, done) {
  User.findOne({ 'github._id': profile.id }, (err, user) => {
    if (err) { return done(err, null) }
    if (user) { return done(null, user) }

    const newUser = new User({ 'github.username': profile.username, 'github._id': profile.id, 'github.url': profile.profileUrl })
    newUser.save((err, user) => {
      if (err) { return done(err, null) }
      return done(null, user)
    })
  })
})

passport.use(github)
