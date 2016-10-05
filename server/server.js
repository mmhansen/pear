import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev.js';

let app = express();
let compiler = webpack(webpackConfig);

app.use(webpackMiddleware((compiler), {
  hot: true,
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))
//
app.get("/*", (req, res)=>{
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

app.listen(3000, () => console.log("running on localhost:3000"))
