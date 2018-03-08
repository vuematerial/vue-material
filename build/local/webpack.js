import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin'
import { config, resolvePath } from '../config'

const componentExampleLoader = require.resolve('../loaders/component-example-loader')
const cssLoaders = 'vue-style-loader!css-loader'
const scssLoaders = 'vue-style-loader!css-loader!sass-loader?outputStyle=compressed'
const babelLoader = 'babel-loader?cacheDirectory=true'

export default {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    docs: [
      'babel-polyfill',
      './docs/app/index.js',
      './build/local/client'
    ]
  },
  output: {
    path: resolvePath(config.dist),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  resolve: {
    extensions: config.resolve,
    alias: config.alias
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: cssLoaders,
            scss: scssLoaders,
            js: babelLoader,
            example: componentExampleLoader
          }
        }
      },
      {
        test: /\.js$/,
        loader: babelLoader,
        exclude: /node_modules/,
        options: {
          'cacheDirectory': true
        }
      },
      {
        test: /\.css$/,
        loader: cssLoaders
      },
      {
        test: /\.scss$/,
        loader: scssLoaders
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: '/assets/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      DEBUG: false
    }),
    new webpack.WatchIgnorePlugin([resolvePath('node_modules')]),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'docs/index.html',
      inject: true
    }),
    new FriendlyErrorsPlugin()
  ]
}
