import { Router } from 'express'
import passport from 'passport'
import passportService from './services/passport'
import path from 'path'
import graphqlHTTP from 'express-graphql'
/*
 * Import local functions
 */
import errorHandler from './controllers/errors'
import { login } from './controllers/authentication'
import schema from './graphQL/'
/*
 * This is the server router. It handles the response anytime the server address is visited.
 */
export default function (app) {
  const apiRoutes = Router()

  /*
   * Github Login routing
   */
  apiRoutes.get('/auth/github',
    passport.authenticate('github', { scope: [ 'user:email' ] }));

  apiRoutes.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    login )
  /*
   * graphql endpoint
   */
   apiRoutes.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
    pretty: true
  }));
  //
  app.use('/api', apiRoutes)
  /*
   * toss any stray requests to the error handler
   */
  app.get('/*', (req, res) => res.json({ error: 'you probably meant /api/graphql'}))
}
