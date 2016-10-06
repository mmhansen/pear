//----------------------------------
// Basic express
import express from 'express';
import path from 'path';
let app = express();

//----------------------------------
// Make express run the client files through webpack
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.js';
let compiler = webpack(webpackConfig);
app.use(webpackMiddleware((compiler), {
  hot: true,
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))

//----------------------------------
// Routing
app.get("/*", (req, res)=>{
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});


//----------------------------------
// Make server listen on port
let port = 3000;
app.listen(port);
console.log('magic happening on port '+port);
