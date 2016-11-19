import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'
import passport from 'passport'
import responses from './responses'

export default function (app) {
  // logger
  if(process.env.NODE_ENV != 'test') {
    app.use(logger('dev'))
  }
  // body parser
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  // passport
  app.use(passport.initialize());
  // responses
  app.use(responses)
}
