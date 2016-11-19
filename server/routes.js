import { Router } from 'express'
import passport from 'passport'
import passportService from './services/passport'
import path from 'path'
import graphqlHTTP from 'express-graphql'
//locals
import errorHandler from './controllers/errors'
import { login } from './controllers/authentication'
import { schema } from './graphQL/schema'
import { root } from './graphQL/root'
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
    rootValue: root,
    graphiql: true,
  }));
  //
  app.use('/api', apiRoutes)
  /*
   * Error handler
   */
  app.use(errorHandler)
}
