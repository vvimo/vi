'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const ApiDao = require('../api/dao')

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    },
    before (app) {
      /* login */
      app.post('/api/login/add', function (req, res, next) { ApiDao.loginDao.add(req, res, next) })
      app.post('/api/login/update', function (req, res, next) { ApiDao.loginDao.update(req, res, next) })
      app.post('/api/login/delete', function (req, res, next) { ApiDao.loginDao.delete(req, res, next) })
      app.post('/api/login/login', function (req, res, next) { ApiDao.loginDao.queryByUserName(req, res, next) })

      /* user */
      app.post('/api/user/add', function (req, res, next) { ApiDao.userDao.add(req, res, next) })
      app.post('/api/user/update', function (req, res, next) { ApiDao.userDao.update(req, res, next) })
      app.post('/api/user/delete', function (req, res, next) { ApiDao.userDao.delete(req, res, next) })
      app.post('/api/user/queryById', function (req, res, next) { ApiDao.userDao.queryById(req, res, next) })
      app.post('/api/user/queryAll', function (req, res, next) { ApiDao.userDao.queryAll(req, res, next) })
      
      /* article */
      app.post('/api/article/add', function (req, res, next) { ApiDao.articleDao.add(req, res, next) })
      app.post('/api/article/update', function (req, res, next) { ApiDao.articleDao.update(req, res, next) })
      app.post('/api/article/updateRead', function (req, res, next) { ApiDao.articleDao.updateRead(req, res, next) })
      app.post('/api/article/updateState', function (req, res, next) { ApiDao.articleDao.updateState(req, res, next) })
      app.post('/api/article/delete', function (req, res, next) { ApiDao.articleDao.delete(req, res, next) })
      app.post('/api/article/queryById', function (req, res, next) { ApiDao.articleDao.queryById(req, res, next) })
      app.post('/api/article/queryAll', function (req, res, next) { ApiDao.articleDao.queryAll(req, res, next) })

      /* card */
      app.post('/api/card/add', function (req, res, next) { ApiDao.cardDao.add(req, res, next) })
      app.post('/api/card/info', function (req, res, next) { ApiDao.cardDao.queryByCard(req, res, next) })
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
