const express = require('express')
const path = require('path')
const webpack = require('webpack')
const logger = require('../build/lib/logger')
const webpackConfig = require('../build/webpack.config')
const project = require('../project.config')
const compress = require('compression')

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// TODO need to configure environmental variables
// var db = mongoose.connect('mongodb://127.0.0.1:27017/sphone');
//var db = mongoose.connect('mongodb://flatorez:cde32123!@cluster0-shard-00-00-5ilpq.mongodb.net:27017,cluster0-shard-00-01-5ilpq.mongodb.net:27017,cluster0-shard-00-02-5ilpq.mongodb.net:27017/sphoneApp?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');

const app = express()
app.use(compress())

// ------------------------------------
// Apply Webpack HMR Middleware
// ------------------------------------
if (project.env === 'development') {
  const compiler = webpack(webpackConfig)

  logger.info('Enabling webpack development and HMR middleware')
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: path.resolve(project.basePath, project.srcDir),
    hot: true,
    quiet: false,
    noInfo: false,
    lazy: false,
    stats: 'normal',
  }))
  app.use(require('webpack-hot-middleware')(compiler, {
    path: '/__webpack_hmr'
  }))

  // Serve static assets from ~/public since Webpack is unaware of
  // these files. This middleware doesn't need to be enabled outside
  // of development since this directory will be copied into ~/dist
  // when the application is compiled.
  app.use(express.static(path.resolve(project.basePath, 'public')))

  // This rewrites all routes requests to the root /index.html file
  // (ignoring file requests). If you want to implement universal
  // rendering, you'll want to remove this middleware.
  // app.use('*', function (req, res, next) {
  //   res.send('welcome');
  //   // const filename = path.join(compiler.outputPath, 'index.html')
  //   // compiler.outputFileSystem.readFile(filename, (err, result) => {
  //   //   if (err) {
  //   //     return next(err)
  //   //   }
  //   //   res.set('content-type', 'text/html')
  //   //   res.send(result)
  //   //   res.end()
  //   // })
  // })
} else {
  logger.warn(
    'Server is being run outside of live development mode, meaning it will ' +
    'only serve the compiled application bundle in ~/dist. Generally you ' +
    'do not need an application server for this and can instead use a web ' +
    'server such as nginx to serve your static files. See the "deployment" ' +
    'section in the README for more information on deployment strategies.'
  )

  // Serving ~/dist by default. Ideally these files should be served by
  // the web server and not the app server, but this helps to demo the
  // server in production.
  app.use(express.static(path.resolve(project.basePath, project.outDir)))
}

// var Place = require('./models/placeModel');
// var Track = require('./models/trackModel');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// var placeRouter = require('./routes/placeRoutes')(Place, Track);
// var trackRouter = require('./routes/trackRoutes')();
// var playlistRouter = require('./routes/playlistRoutes')(Place, Track);

// app.use('/api/places', placeRouter);
// app.use('/api/tracks', trackRouter);
// app.use('/api/playlist', playlistRouter);

app.get('/', function (req, res) {
  res.send('welcome to stylistadvised.me api!');
});

module.exports = app
