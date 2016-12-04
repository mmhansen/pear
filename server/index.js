import express from 'express'
import path from 'path'
import mongoose from 'mongoose'
import logger from 'morgan'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import expressJwt from 'express-jwt'
import jwt from 'jsonwebtoken';
// locals
import passport from './passport'
import responses from './utils/responses'
import graphqlHTTP from 'express-graphql'
import schema from './graphQL'
import * as config from './config'

// initialize
const app = express();

/*
 * Start up the database connection
 */

mongoose.connect(config.databaseUrl)
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => (
    console.log(`db connection open on ${config.databaseName}`)
  ))

/*
 * Register express middleware
 */

app.use(express.static(path.join(__dirname, '../build')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(responses)
if(process.env.NODE_ENV != 'test') {
  app.use(logger('dev'))
}

/*
 * Add authentication
 */
// this is decoding the token from the cookie
app.use(expressJwt({
  secret: config.auth.jwt.secret,
  credentialsRequired: false,
  getToken: req => req.cookies.id_token,
}));

app.use(passport.initialize());


if (process.env.NODE_ENV !== 'production') {
  app.enable('trust proxy');
}

app.get('/login/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }));


app.get('/login/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    const expiresIn = 60 * 60 * 24 * 180; // 180 days
    const token = jwt.sign(req.user, config.auth.jwt.secret, { expiresIn });
    res.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true });
    res.redirect('/');
  }
)


/*
 * Register Data api with GraphQL
 */

app.use('/graphql', graphqlHTTP(req => ({
  schema,
  graphiql: process.env.NODE_ENV !== 'production',
  pretty: process.env.NODE_ENV !== 'production',
})));

/*
 * Invalidate token so that user is logged out
 */
app.get('/logout', (req, res) => {
  req.logOut();
  console.log(req.user)
  res.cookie('id_token', "", { maxAge: -1, httpOnly: true });
  res.redirect('/');
})
/*
 * Catch other routes and send back index.html
 */
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build', 'index.html'))
})

/*
 * If you've made it this far, let's catch the error
 */

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});



/*
 * Start server listening on port from config
 */
app.listen(process.env.PORT || config.port)
console.log(`Server listening on http://localhost:${config.port}`)
