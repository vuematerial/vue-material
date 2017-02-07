import path from 'path';
import webpack from 'webpack';
import eslintFormatter from 'eslint-friendly-formatter';
import config from '../config';

const resolvePath = (dir) => {
  return path.resolve(__dirname, '..', '..', dir);
};

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
    extensions: ['.js', '.vue', '.json'],
    alias: {
      assets: resolvePath('docs/src/assets')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [
          resolvePath('build'),
          resolvePath('src'),
          resolvePath('docs')
        ],
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
        include: [
          resolvePath('build'),
          resolvePath('src'),
          resolvePath('docs')
        ]
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
        test: /\.theme$/,
        use: ['raw-loader', 'sass-loader']
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
      'process.env': config.env
    })
  ]
};
