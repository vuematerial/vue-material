import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import eslintFormatter from 'eslint-friendly-formatter';
import config from '../config';

export default {
  entry: {
    docs: './docs/src/index.js'
  },
  output: {
    path: config.rootPath,
    publicPath: config.publicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [config.nodePath],
    alias: {
      assets: path.resolve(__dirname, '../../docs/src/assets')
    }
  },
  resolveLoader: {
    fallback: [config.nodePath]
  },
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: config.projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: config.projectRoot,
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: config.projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'vue-style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        loader: 'vue-style-loader!css-loader!sass-loader'
      },
      {
        test: /\.theme$/,
        loaders: ['raw', 'sass-loader']
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      }
    ]
  },
  eslint: {
    fix: true,
    formatter: eslintFormatter
  },
  vue: {
    loaders: {
      css: 'vue-style-loader!css-loader',
      scss: 'vue-style-loader!css-loader!sass-loader'
    },
    postcss: [
      autoprefixer({
        browsers: ['last 2 versions']
      })
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.env
    })
  ]
};
