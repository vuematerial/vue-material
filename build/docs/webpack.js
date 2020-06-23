import webpack from 'webpack'
import path from 'path'
import autoprefixer from 'autoprefixer'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import PrerenderSpaPlugin from 'prerender-spa-plugin'
import PreloadWebpackPlugin from 'preload-webpack-plugin'
import TerserWebpackPlugin from 'terser-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import mediaPacker from 'css-mqpacker'
import OfflinePlugin from 'offline-plugin'
import { config, getRandomInt, resolvePath } from '../config'
import banner from '../lib/banner'
import { mapRoutes } from '../../docs/app/routes'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import VueLoaderPlugin from 'vue-loader/lib/plugin'

const Renderer = PrerenderSpaPlugin.PuppeteerRenderer

const cacheUpdateTime = process.env.CACHE_UPDATE_MINUTES || 10

const componentExampleLoader = require.resolve('../loaders/component-example-loader')

const webpackConfig = {
  mode: 'production',
  entry: {
    app: [
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
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            }
          }
        ],
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
          },
        ],
      },
      {
        resourceQuery: /blockType=example/,
        use: [
          {
            loader: componentExampleLoader,
          }
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                autoprefixer(),
                mediaPacker(),
              ],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                autoprefixer(),
                mediaPacker(),
              ],
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.BannerPlugin({
      banner,
      raw: true,
      entryOnly: true
    }),
    new CopyWebpackPlugin({
      patterns: [
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
      ]
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'docs/index.html',
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
    new PrerenderSpaPlugin({
      staticDir: path.join(__dirname, '..', '..', config.dist),
      routes: mapRoutes(),
      renderer: new Renderer({
        headless: true,
        renderAfterElementExists: '.main-container',
        renderAfterTime: 7000,
        maxConcurrentRoutes: 10,
      })
    }),
    new OfflinePlugin({
      autoUpdate: +cacheUpdateTime * 60 * 1000
    })
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    },
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
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
          warnings: false,
          output: {
            comments: false,
          },
        },
        sourceMap: false,
      })
    ],
  }
}

if (process.argv.includes('--analyze')) {
  webpackConfig.plugins.push(new BundleAnalyzerPlugin({
    analyzerPort: getRandomInt(8000, 8999)
  }))
}

export default webpackConfig
