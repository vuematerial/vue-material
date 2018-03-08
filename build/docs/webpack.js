import webpack from 'webpack'
import path from 'path'
import autoprefixer from 'autoprefixer'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import OptimizeJsPlugin from 'optimize-js-plugin'
import PrerenderSpaPlugin from 'prerender-spa-plugin'
import PreloadWebpackPlugin from 'preload-webpack-plugin'
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import mediaPacker from 'css-mqpacker'
import OfflinePlugin from 'offline-plugin'
import { config, resolvePath, getRandomInt } from '../config'
import banner from '../lib/banner'
import { mapRoutes } from '../../docs/app/routes'

const cacheUpdateTime = process.env.CACHE_UPDATE_MINUTES || 10
const cssLoader = ExtractTextPlugin.extract({
  use: 'css-loader',
  fallback: 'vue-style-loader'
})
const scssLoader = ExtractTextPlugin.extract({
  use: 'css-loader!sass-loader',
  fallback: 'vue-style-loader'
})
const babelLoader = 'babel-loader?cacheDirectory=true'
const componentExampleLoader = require.resolve('../loaders/component-example-loader')
const webpackConfig = {
  entry: {
    app: [
      'babel-polyfill',
      './docs/app/index.js',
      './build/docs/offline.js'
    ]
  },
  output: {
    path: resolvePath(config.dist),
    publicPath: '/',
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:8].js'
  },
  resolve: {
    extensions: config.resolve,
    alias: config.alias
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: babelLoader,
        exclude: /node_modules/,
        options: {
          'cacheDirectory': true
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: cssLoader,
            scss: scssLoader,
            js: babelLoader,
            example: componentExampleLoader
          },
          postcss: [
            autoprefixer(),
            mediaPacker()
          ]
        }
      },
      {
        test: /\.css$/,
        loader: cssLoader
      },
      {
        test: /\.scss$/,
        loader: scssLoader
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        booleans: true,
        cascade: true,
        comparisons: true,
        conditionals: true,
        dead_code: true,
        drop_debugger: true,
        evaluate: true,
        hoist_funs: true,
        hoist_vars: true,
        if_return: true,
        join_vars: true,
        loops: true,
        properties: true,
        screw_ie8: true,
        sequences: true,
        side_effects: true,
        unsafe: true,
        unused: true,
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: false
    }),
    new OptimizeJsPlugin({
      sourceMap: false
    }),
    new ExtractTextPlugin({
      allChunks: true,
      filename: '[name].[contenthash:8].css'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks (module) {
        let resource = module.resource

        if (resource && (/\.js$/).test(resource)) {
          return resource.indexOf(config.nodePath) >= 0
        }

        return false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),
    new webpack.BannerPlugin({
      banner,
      raw: true,
      entryOnly: true
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CopyWebpackPlugin([
      {
        context: config.assets,
        from: '**/*',
        to: 'assets'
      },
      {
        context: config.docs,
        from: '_redirects',
        to: ''
      }
    ]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'docs/index.html',
      chunksSortMode: 'dependency',
      inject: 'head',
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        html5: true,
        minifyCSS: true,
        minifyJS: true,
        preserveLineBreaks: false,
        removeAttributeQuotes: false,
        removeComments: false,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeTagWhitespace: true,
        sortAttributes: true,
        sortClassName: true,
        useShortDoctype: true
      }
    }),
    new PreloadWebpackPlugin(),
    new OptimizeCssAssetsPlugin({
      canPrint: false
    }),
    new PrerenderSpaPlugin(path.join(__dirname, '..', '..', config.dist), mapRoutes(), {
      captureAfterElementExists: '.main-container',
      captureAfterTime: 7000,
      navigationLocked: true,
      ignoreJSErrors: true
    }),
    new OfflinePlugin({
      autoUpdate: +cacheUpdateTime * 60 * 1000
    })
  ]
}

if (process.argv.includes('--analyze')) {
  webpackConfig.plugins.push(new BundleAnalyzerPlugin({
    analyzerPort: getRandomInt(8000, 8999)
  }))
}

export default webpackConfig
