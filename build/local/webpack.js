import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin'
import eslintFormatter from 'eslint-friendly-formatter'
import { config, resolvePath } from '../config'

export default {
  devtool: '#source-map',
  entry: {
    docs: [
      './docs/app/index.js',
      './build/local/client'
    ]
  },
  output: {
    path: resolvePath(config.dist),
    publicPath: config.dist.public,
    filename: '[name].js'
  },
  resolve: {
    extensions: config.resolve,
    alias: config.alias
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        options: {
          fix: true,
          formatter: eslintFormatter
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: 'vue-style-loader!css-loader',
            scss: 'vue-style-loader!css-loader!sass-loader'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
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
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new webpack.WatchIgnorePlugin([resolvePath('node_modules')]),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'docs/index.html',
      inject: true
    }),
    new FriendlyErrorsPlugin()
  ]
}
