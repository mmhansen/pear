import express from 'express';
/*
 * Import local functions
 */
import route from './routes'
import connectDB from './services/database'
import configure from './services/middlewares'
import config from './services/config'
// initialize
const app = express();
/*
 * Connect to the database based on config
 */
connectDB(config())
/*
 * Establish middleware for server requests
 */
configure(app)
/*
 * Define routing for server requests
 */
route(app)
/*
 * Start server listening on port from config
 */
app.listen(process.env.PORT || config().port)
console.log(`Server listening on http://localhost:${config().port}`)
