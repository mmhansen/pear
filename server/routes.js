import { Router } from 'express'
import passport from 'passport'
import passportService from './services/passport'
import path from 'path'
import graphqlHTTP from 'express-graphql'
//locals
import errorHandler from './controllers/errors'
import { login } from './controllers/authentication'
import schema from './graphQL/'
//
export default function (app) {
  const apiRoutes = Router()

  /*
   * Github Login
   */
  apiRoutes.get('/auth/github',
    passport.authenticate('github', { scope: [ 'user:email' ] }));

  apiRoutes.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    login )
  /*
   * graphql
   */
   apiRoutes.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
    pretty: true
  }));
  //
  app.use('/api', apiRoutes)
  /*
   * Error handler
   */
  app.get('/*', (req, res) => res.json({ error: 'you probably meant /api/graphql'}))
}
