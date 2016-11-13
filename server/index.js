import express from 'express';
import config from 'config'
// locals
import route from './routes'
import connectDB from './services/database'
import configure from './services/middlewares'
// initialize
const app = express();
// database
connectDB(config)
// middleware
configure(app)
// route
route(app)
// listen
app.listen(process.env.PORT || config.port)
console.log(`Server listening on http://localhost:${config.port}`)
