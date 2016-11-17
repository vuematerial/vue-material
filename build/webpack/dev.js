import webpack from 'webpack';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import baseWebpackConfig from './base';
import config from '../config';

Object.keys(baseWebpackConfig.entry).forEach((name) => {
  baseWebpackConfig.entry[name] = ['./build/server/client'].concat(baseWebpackConfig.entry[name]);
});

export default merge(baseWebpackConfig, {
  devtool: '#inline-source-map',
  plugins: [
    new webpack.WatchIgnorePlugin([config.nodePath]),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'docs/index.html',
      inject: true
    })
  ]
});
