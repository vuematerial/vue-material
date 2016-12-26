import webpack from 'webpack';
import merge from 'webpack-merge';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import OptimizeJsPlugin from 'optimize-js-plugin';
import prodConfig from './prod-lib';

const devConfig = merge(prodConfig, {
  output: {
    filename: '[name].debug.js'
  },
  devtool: 'source-map'
});

devConfig.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.DedupePlugin(),
  new OptimizeJsPlugin({
    sourceMap: false
  }),
  new ExtractTextPlugin('[name].css')
];

export default devConfig;
