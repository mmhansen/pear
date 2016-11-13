import { Router } from 'express'
import passport from 'passport'
import passportService from './services/passport'
import path from 'path'
//locals
import errorHandler from './controllers/errors'
import { login } from './controllers/authentication'


export default function (app) {
  const apiRoutes = Router()

  apiRoutes.get('/auth/github',
    passport.authenticate('github', { scope: [ 'user:email' ] }));

  apiRoutes.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    login )

  app.use('/api', apiRoutes)
  /*
   * client files
   */
  app.get("/*", (req, res)=>{
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
  });
  /*
   * Error handler
   */
  app.use(errorHandler)
}
