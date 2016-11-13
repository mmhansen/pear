import express from 'express'
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../webpack.config.js';
import logger from 'morgan'
import bodyParser from 'body-parser'
import passport from 'passport'

export default function (app) {
  // logger
  if(process.env.NODE_ENV != 'test') {
    app.use(logger('dev'))
  }
  // body parser
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  // webpack
  const compiler = webpack(webpackConfig);
  app.use(webpackMiddleware((compiler), {
    hot: true,
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }))
  app.use(webpackHotMiddleware(compiler))
  // passport
  app.use(passport.initialize());
}
