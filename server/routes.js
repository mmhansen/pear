import { Router } from 'express'
import passport from 'passport'
import passportService from './services/passport'
import path from 'path'

export default function (app) {
  const apiRoutes = Router()

  apiRoutes.get('/auth/github',
    passport.authenticate('github', { scope: [ 'user:email' ] }));

  apiRoutes.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/');
    });

  app.use('/api', apiRoutes)
  app.get("/*", (req, res)=>{
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
  });
}
